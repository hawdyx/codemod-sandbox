import { styleText } from "node:util";

export class Logger {
  private prefix: string;

  constructor(prefix: string) {
    this.prefix = prefix;
  }

  private getTimestamp(): string {
    return new Date().toISOString().split("T")[1].slice(0, 8);
  }

  error(msg: string): void {
    console.log(styleText("red", `[${this.prefix}] [${this.getTimestamp()}] ERROR: ${msg}`));
  }

  success(msg: string): void {
    console.log(styleText("green", `[${this.prefix}] [${this.getTimestamp()}] SUCCESS: ${msg}`));
  }

  info(msg: string): void {
    console.log(styleText("blue", `[${this.prefix}] [${this.getTimestamp()}] INFO: ${msg}`));
  }

  warn(msg: string): void {
    console.log(styleText("yellow", `[${this.prefix}] [${this.getTimestamp()}] WARN: ${msg}`));
  }
}
