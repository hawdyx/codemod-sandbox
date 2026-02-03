import { styleText } from "node:util";

const requiredVars = ["NODE_ENV", "API_KEY"];

requiredVars.forEach((key) => {
  if (process.env[key]) {
    console.log(styleText("green", `✔ ${key} is set`));
  } else {
    console.log(styleText("red", `✖ ${key} is missing`));
  }
});
