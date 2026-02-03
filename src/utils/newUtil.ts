import { styleText } from "node:util";
import os from "os";

const formatTime = (seconds) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  return `${h}h ${m}m ${s}s`;
};

console.log(styleText("cyan", "⏳ Uptime Information"));
console.log(styleText("green", `System uptime: ${formatTime(os.uptime())}`));
console.log(styleText("yellow", `Process uptime: ${formatTime(process.uptime())}`));
