import chalk from "chalk";
import os from "os";

const formatTime = (seconds) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  return `${h}h ${m}m ${s}s`;
};

console.log(chalk.cyan("⏳ Uptime Information"));
console.log(chalk.green(`System uptime: ${formatTime(os.uptime())}`));
console.log(chalk.yellow(`Process uptime: ${formatTime(process.uptime())}`));
