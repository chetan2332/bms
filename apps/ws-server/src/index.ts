import { WebSocketServer } from "ws";
import { client } from "@repo/db/client";

const wss = new WebSocketServer({ port: 3001 });

wss.on("connection", async (socket) => {
  const res = await client.user.create({
    data: {
      username: Math.random().toString(36).substring(2, 15),
      password: Math.random().toString(36).substring(2, 15),
    },
  });
  console.log(res);
  socket.send("Hello from the server");
});