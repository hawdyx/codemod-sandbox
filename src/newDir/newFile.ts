import chalk from "chalk";
import { readdir } from "fs/promises";

const dir = "./";

try {
  const files = await readdir(dir);
  console.log(chalk.cyan(`📁 ${files.length} files found in ${dir}`));
} catch (err) {
  console.error(chalk.red("Error reading directory"), err);
}
