import { styleText } from "node:util";
import chalk from "chalk";

export function formatError(error: Error): string {
  return styleText("red", `Error: ${error.message}`);
}

export function formatSuccess(message: string): string {
  return styleText("green", `✓ ${message}`);
}

export function formatInfo(message: string): string {
  return styleText("blue", `ℹ ${message}`);
}

export function formatWarning(message: string): string {
  return chalk.yellow(`⚠ ${message}`);
}

export function printBanner(text: string): void {
  console.log(styleText("blue", "=".repeat(50)));
  console.log(styleText("green", text));
  console.log(chalk.bgBlue.white(" " + text + " "));
  console.log(styleText("blue", "=".repeat(50)));
}
