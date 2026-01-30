import chalk from "chalk";

const requiredVars = ["NODE_ENV", "API_KEY"];

requiredVars.forEach((key) => {
  if (process.env[key]) {
    console.log(chalk.green(`✔ ${key} is set`));
  } else {
    console.log(chalk.red(`✖ ${key} is missing`));
  }
});
