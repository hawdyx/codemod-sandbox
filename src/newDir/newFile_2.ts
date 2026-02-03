import { styleText } from "node:util";

const memory = process.memoryUsage();

console.log(styleText("yellow", "🧠 Memory Usage"));
console.log(styleText("magenta", `RSS: ${(memory.rss / 1024 / 1024).toFixed(2)} MB`));
console.log(
  styleText("magenta", `Heap Used: ${(memory.heapUsed / 1024 / 1024).toFixed(2)} MB`),
);
