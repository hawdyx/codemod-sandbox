import chalk from "chalk";

export function displayMenu(): void {
  console.log(chalk.bgBlue.white.bold(" MENU "));
  console.log(chalk.cyan("1. Create Task"));
  console.log(chalk.cyan("2. List Tasks"));
  console.log(chalk.cyan("3. Delete Task"));
  console.log(chalk.cyan("4. Exit"));
}

export function displayHeader(title: string): void {
  console.log(chalk.magenta.bold(`\n=== ${title} ===\n`));
}
