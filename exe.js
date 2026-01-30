import { spawn } from "child_process";
spawn(
  "npx",
  [
    "codemod@latest",
    "run",
    "@nodejs/chalk-to-util-styletext",
    "--allow-dirty",
    "--no-interactive",
  ],
  {
    stdio: ["pipe", "pipe", "pipe"],
  },
);
