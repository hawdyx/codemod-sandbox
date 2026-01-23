import { styleText } from "node:util";
import chalk from "chalk";

export class Logger {
  private prefix: string;

  constructor(prefix: string) {
    this.prefix = prefix;
  }

  error(msg: string): void {
    console.log(styleText("red", `[${this.prefix}] ERROR: ${msg}`));
    console.log(chalk.red.bold(`[CHALK] ${msg}`));
  }

  success(msg: string): void {
    console.log(styleText("green", `[${this.prefix}] SUCCESS: ${msg}`));
  }

  info(msg: string): void {
    console.log(styleText("blue", `[${this.prefix}] INFO: ${msg}`));
  }

  warn(msg: string): void {
    console.log(styleText("yellow", `[${this.prefix}] WARN: ${msg}`));
  }
}
