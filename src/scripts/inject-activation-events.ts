import fs from "fs";
import path from "path";

const packageJsonPath = path.resolve(__dirname, "../../package.json");

const packageJsonRaw = fs.readFileSync(packageJsonPath, "utf-8");

const packageJson: any = JSON.parse(packageJsonRaw);

// Evita duplicação
if (!packageJson.activationEvents) {
  packageJson.activationEvents = ["onCommand:nextjsAppRouter.installSnippets"];

  fs.writeFileSync(
    packageJsonPath,
    JSON.stringify(packageJson, null, 2),
    "utf-8"
  );

  console.log("✅ activationEvents field temporarily injected for packaging.");
} else {
  console.log("ℹ️ activationEvents already present. Skipping injection.");
}
