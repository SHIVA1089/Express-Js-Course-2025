import express from "express";
import dotenv from "dotenv";
import Users from "./UsersData.js";
import Products from "./ProductsData.js";

const app = express();
dotenv.config();
const port = process.env.PORT || 9000;

// GET Requests:

app.get("/", (req, res) => {
  res.send("<h1>Home Page!</h1>");
});

app.get("/api/users", (req, res) => {
  res.status(200).send({ Users: Users });
});

app.get("/api/products", (req, res) => {
  res.status(201).send({ Products: Products });
});

app.listen(port, () => `Server running on port: ${port} 🔥`);
