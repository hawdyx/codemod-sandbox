import chalk from "chalk";
import net from "net";

const PORT = 3000;

const server = net.createServer();

server.once("error", () => {
  console.log(chalk.red(`❌ Port ${PORT} is already in use`));
});

server.once("listening", () => {
  console.log(chalk.green(`✅ Port ${PORT} is available`));
  server.close();
});

server.listen(PORT);
