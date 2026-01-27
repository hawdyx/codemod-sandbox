import chalk from "chalk";

export function printStatus(status: string, message: string): void {
  if (status === "success") {
    console.log(chalk.green.bold(`✓ ${message}`));
  } else if (status === "error") {
    console.log(chalk.red.bold(`✗ ${message}`));
  } else {
    console.log(chalk.blue(`→ ${message}`));
  }
}

export function printTable(headers: string[], rows: string[][]): void {
  console.log(chalk.cyan(headers.join(" | ")));
  rows.forEach(row => console.log(chalk.white(row.join(" | "))));
}
