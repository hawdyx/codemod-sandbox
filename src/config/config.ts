import chalk from "chalk";

export const CONFIG = {
  appName: "TaskApp",
  version: "1.0.0",
  maxUsers: 100,
};

export function printConfig(): void {
  console.log(chalk.blue("Application Configuration:"));
  console.log(chalk.green(`Name: ${CONFIG.appName}`));
  console.log(chalk.green(`Version: ${CONFIG.version}`));
  console.log(chalk.green(`Max Users: ${CONFIG.maxUsers}`));
}
