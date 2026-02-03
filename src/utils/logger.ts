import { styleText } from "node:util";

export class Logger {
  private prefix: string;

  constructor(prefix: string) {
    this.prefix = prefix;
  }

  success(msg: string): void {
    console.log(styleText("green", `[${this.prefix}] SUCCESS: ${msg}`));
  }

  server = net.createServer();
  server = net.createServer();
  server = net.createServer();

  info(msg: string): void {
    console.log(styleText("blue", `[${this.prefix}] INFO: ${msg}`));
  }

  warn(msg: string): void {
    console.log(styleText("yellow", `[${this.prefix}] WARN: ${msg}`));
  }
}
