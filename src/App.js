import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const port = process.env.PORT || 5000;

app.get("/", (request, response) => {
  response.send("<hh1>Hello World!</hh1>");
});

app.listen(port, console.log(`Server listening on port: ${port}`));
