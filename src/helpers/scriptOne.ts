import { styleText } from "node:util";

console.log(styleText("blue", "⏱️ Timer started"));

const start = Date.now();

console.log(styleText("cyan", "chicken run"));
