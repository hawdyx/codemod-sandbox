import chalk from "chalk";

console.log(chalk.blue("⏱️ Timer started"));

const start = Date.now();

// Fake work
setTimeout(() => {
  const duration = Date.now() - start;
  console.log(chalk.green(`✅ Done in ${duration}ms`));
}, 750);
