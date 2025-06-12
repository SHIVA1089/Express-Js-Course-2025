import express from "express";
import dotenv from "dotenv";
import Users from "../Sample Data/Users.js";
import Products from "../Sample Data/Products.js";

const app = express();
dotenv.config();
const port = process.env.PORT || 5000;

// Basic Routing:
app.get("/", (request, response) => {
  response.send("<hh1>Hello World!</hh1>");
});

app.get("/api/users", (req, res) => {
  res.json(Users);
});

app.get("/api/products", (req, res) => {
  res.json(Products);
});

app.listen(port, console.log(`Server listening on port: ${port}`));
