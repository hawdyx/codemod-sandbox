import { styleText } from "node:util";
import net from "net";

const PORT = 3000;

const server = net.createServer();

server.once("error", () => {
  console.log(styleText("red", `❌ Port ${PORT} is already in use`));
});

server.once("listening", () => {
  console.log(styleText("green", `✅ Port ${PORT} is available`));
  server.close();
});

server.listen(PORT);
