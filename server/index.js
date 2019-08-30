const express = require("express");
const app = express();
const massive = require("massive");
require("dotenv").config();

const controller = require("./controller");

const { CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING);

app.use(express.json());

app.get("/api/inventory", controller.getAll);
app.post("/api/product", controller.newProduct);
app.delete("/api/product/:id", controller.removeProduct);
app.get("/api/product/:id", controller.getProduct);

const port = 4000;
app.listen(port, () => console.log(`server listening on ${port}`));
