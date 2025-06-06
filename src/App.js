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

// Route Params:

app.get("/api/users/:id", (req, res) => {
  const { id } = req.params;
  console.log(`ID: ${id}`);
  console.log(`Type of ID: ${typeof id}`);

  const parsedID = parseInt(id);
  console.log(`ID: ${parsedID}`);
  console.log(`Type of ID: ${typeof parsedID}`);

  if (isNaN(parsedID))
    return res.status(400).send({ msg: "Bad Request!(Invalid ID)" });

  const findUser = Users.find((user) => user.id === parsedID);
  console.log(findUser);

  if (!findUser) return res.sendStatus(404);

  return res.status(200).send(findUser);
});

// Query Strings or Query Params:

app.get("/api/sortUsers", (req, res) => {
  console.log(req.query);
  const {
    query: { filter, value },
  } = req;

  // console.log(`${filter}  ${value}`);

  // if (filter && value)
  //   return res.send(
  //     Users.filter((user) => {
  //       return user[filter].includes(value); // <-- added return
  //     })
  //   );

  if (filter && value)
    return res.send(Users.filter((u) => u[filter].includes(value)));
  res.send(Users);
}); // http://localhost:1089/api/sortUsers?filter=name&value=C

app.listen(port, () => `Server running on port: ${port} 🔥`);
