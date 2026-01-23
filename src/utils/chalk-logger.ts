import chalk from "chalk";

export class ChalkLogger {
  log(message: string): void {
    console.log(chalk.white(message));
  }

  success(message: string): void {
    console.log(chalk.green(`✓ ${message}`));
  }

  error(message: string): void {
    console.log(chalk.red(`✗ ${message}`));
  }

  warning(message: string): void {
    console.log(chalk.yellow(`⚠ ${message}`));
  }

  info(message: string): void {
    console.log(chalk.blue(`ℹ ${message}`));
  }
}
