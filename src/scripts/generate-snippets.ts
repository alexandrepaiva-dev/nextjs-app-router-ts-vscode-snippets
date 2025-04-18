import fs from "fs";
import path from "path";

const snippetsDir = path.resolve(__dirname, "../snippets-src");
const outputFile = path.resolve(__dirname, "../../snippets/nextjs.json");

const toTitleCase = (fileName: string) =>
  fileName
    .replace(/\.ts$/, "")
    .replace(/[-_]/g, " ")
    .replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1));

const buildSnippets = async () => {
  const files = fs.readdirSync(snippetsDir).filter((f) => f.endsWith(".ts"));

  const snippetJson: Record<string, any> = {};

  for (const file of files) {
    const filePath = path.join(snippetsDir, file);
    const { prefix, description, body } = require(filePath); // importa objeto com estrutura
    const snippetName = toTitleCase(file);

    snippetJson[snippetName] = {
      prefix,
      body: body.split("\n"),
      description,
    };
  }

  const outputDir = path.dirname(outputFile);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outputFile, JSON.stringify(snippetJson, null, 2));
  console.log(`✅ Snippets gerados em ${outputFile}`);
};

buildSnippets();
