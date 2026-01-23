import chalk from "chalk";

export class Logger {
  private prefix: string;

  constructor(prefix: string) {
    this.prefix = prefix;
  }

  error(msg: string): void {
    console.log(chalk.red(`[${this.prefix}] ERROR: ${msg}`));
  }

  success(msg: string): void {
    console.log(chalk.green(`[${this.prefix}] SUCCESS: ${msg}`));
  }

  info(msg: string): void {
    console.log(chalk.blue(`[${this.prefix}] INFO: ${msg}`));
  }

  warn(msg: string): void {
    console.log(chalk.yellow(`[${this.prefix}] WARN: ${msg}`));
  }
}
