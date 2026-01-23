import chalk from "chalk";

export function formatError(error: Error): string {
  return chalk.red(`Error: ${error.message}`);
}

export function formatSuccess(message: string): string {
  return chalk.green(`✓ ${message}`);
}

export function formatInfo(message: string): string {
  return chalk.blue(`ℹ ${message}`);
}

export function printBanner(text: string): void {
  console.log(chalk.blue("=".repeat(50)));
  console.log(chalk.green(text));
  console.log(chalk.blue("=".repeat(50)));
}
