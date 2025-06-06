import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const port = process.env.PORT || 9000;

app.get("/", (req, res) => {
  res.send("<h1>Home Page!</h1>");
});

app.listen(port, () => `Server running on port: ${port} 🔥`);
