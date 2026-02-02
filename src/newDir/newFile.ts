import { styleText } from "node:util";
import { readdir } from "fs/promises";

const dir = "./";

try {
  const files = await readdir(dir);
  console.log(styleText("cyan", `📁 ${files.length} files found in ${dir}`));
} catch (err) {
  console.error(styleText("red", "Error reading directory"), err);
}
