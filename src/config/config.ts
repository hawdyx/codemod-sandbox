import { styleText } from "node:util";

export const CONFIG = {
  appName: "TaskApp",
  version: "1.0.0",
  maxUsers: 100,
};

export function printConfig(): void {
  console.log(styleText("blue", "Application Configuration:"));
  console.log(styleText("green", `Name: ${CONFIG.appName}`));
  console.log(styleText("green", `Version: ${CONFIG.version}`));
  console.log(styleText("green", `Max Users: ${CONFIG.maxUsers}`));
}
