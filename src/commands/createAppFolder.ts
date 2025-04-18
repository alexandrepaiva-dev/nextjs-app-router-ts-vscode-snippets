import * as vscode from "vscode";
import * as path from "path";
import * as fs from "fs";

export function activateCreateAppFolderCommand(
  context: vscode.ExtensionContext
) {
  const disposable = vscode.commands.registerCommand(
    "nextjsAppRouter.createAppFolder",
    async () => {
      const workspaceFolders = vscode.workspace.workspaceFolders;
      if (!workspaceFolders) {
        vscode.window.showErrorMessage("No workspace folder open.");
        return;
      }

      const rootPath = workspaceFolders[0].uri.fsPath;
      const srcPath = path.join(rootPath, "src");
      const useSrc = fs.existsSync(srcPath);

      const baseFolder = useSrc ? srcPath : rootPath;
      const appDirName = `app-boilerplate`;
      const appPath = path.join(baseFolder, appDirName);

      const stylesPath = path.join(appPath, "globals.css");

      if (!fs.existsSync(stylesPath)) {
        fs.writeFileSync(
          stylesPath,
          `/* Global styles for your Next.js App Router project */
          html, body {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
            background-color: #fff;
            color: #111;
          }
          `,
          "utf-8"
        );
      }

      if (!fs.existsSync(appPath)) {
        fs.mkdirSync(appPath);
      }

      const extensionRoot = context.extensionPath;
      const snippetsPath = path.join(extensionRoot, "snippets", "nextjs.json");

      if (!fs.existsSync(snippetsPath)) {
        vscode.window.showErrorMessage(
          "nextjs.json not found. Run the snippet generator first."
        );
        return;
      }

      const rawSnippets = fs.readFileSync(snippetsPath, "utf-8");
      const snippets = JSON.parse(rawSnippets);

      let firstFilePath: string | null = null;

      for (const [name, snippet] of Object.entries<any>(snippets)) {
        const isComponent = name.toLowerCase().includes("component");
        const isRoute = name.toLowerCase() === "route";
        const isApi = isRoute;

        let targetDir = appPath;
        let filename: string;

        if (isApi) {
          targetDir = path.join(appPath, "api");
          if (!fs.existsSync(targetDir)) {
            fs.mkdirSync(targetDir, { recursive: true });
          }
          filename = "route.ts";
        } else if (isComponent) {
          targetDir = path.join(appPath, "components");
          if (!fs.existsSync(targetDir)) {
            fs.mkdirSync(targetDir, { recursive: true });
          }
          filename = `${toPascalCase(name)}.tsx`;
        } else {
          const baseName = name
            .replace(/([a-z])([A-Z])/g, "$1-$2")
            .replace(/\s+/g, "-")
            .replace(/[^a-zA-Z0-9-]/g, "")
            .toLowerCase();
          const ext = ["sitemap", "robots"].includes(baseName) ? ".ts" : ".tsx";
          filename = `${baseName}${ext}`;
        }

        const fullPath = path.join(targetDir, filename);
        const content = snippet.body.join("\n");

        if (!fs.existsSync(fullPath)) {
          fs.writeFileSync(fullPath, content, "utf-8");
          if (!firstFilePath) {
            firstFilePath = fullPath;
          }
        }
      }

      if (firstFilePath) {
        const doc = await vscode.workspace.openTextDocument(firstFilePath);
        await vscode.window.showTextDocument(doc, { preview: false });
      }

      vscode.window.showInformationMessage(
        `✅ Folder '${appDirName}' created inside ${
          useSrc ? "src/" : "root"
        } with scaffold files.`
      );
    }
  );

  context.subscriptions.push(disposable);
}

function toPascalCase(str: string): string {
  return str
    .replace(/[^a-zA-Z0-9]/g, " ")
    .replace(/\s(.)/g, (match) => match.toUpperCase())
    .replace(/\s+/g, "")
    .replace(/^(.)/, (match) => match.toUpperCase());
}
