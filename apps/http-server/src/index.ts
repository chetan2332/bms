import express from "express";
import { client } from "@repo/db/client";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/signup", async (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  const user = await client.user.create({
    data: {
      username,
      password,
    },
  });
  res.json({
    message: "User created successfully",
    user,
    id: user.id,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
