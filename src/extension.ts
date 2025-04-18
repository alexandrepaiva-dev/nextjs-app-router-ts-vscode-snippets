// src/extension.ts
import * as vscode from "vscode";
import { exec } from "child_process";
import { activateCreateAppFolderCommand } from "./commands/createAppFolder";

export function activate(context: vscode.ExtensionContext) {
  const installSnippets = vscode.commands.registerCommand(
    "nextjsAppRouter.installSnippets",
    () => {
      const workspaceRoot = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;

      if (!workspaceRoot) {
        vscode.window.showErrorMessage("No workspace folder is open.");
        return;
      }

      const command = "npm run generate:snippets";

      exec(command, { cwd: workspaceRoot }, (error, stdout, stderr) => {
        if (error) {
          vscode.window.showErrorMessage(
            `Failed to generate snippets: ${stderr}`
          );
        } else {
          vscode.window.showInformationMessage(
            "✅ Next.js snippets generated successfully!"
          );
          console.log(stdout);
        }
      });
    }
  );

  activateCreateAppFolderCommand(context);

  context.subscriptions.push(installSnippets);
}

export function deactivate() {}
