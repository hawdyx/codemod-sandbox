import chalk from "chalk";

const memory = process.memoryUsage();

console.log(chalk.yellow("🧠 Memory Usage"));
console.log(chalk.magenta(`RSS: ${(memory.rss / 1024 / 1024).toFixed(2)} MB`));
console.log(
  chalk.magenta(`Heap Used: ${(memory.heapUsed / 1024 / 1024).toFixed(2)} MB`),
);
