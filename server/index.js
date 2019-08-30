const express = require("express");
const app = express();
const massive = require("massive");
require("dotenv").config();

const { CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING);

app.use(express.json());

const port = 4000;
app.listen(port, () => console.log(`server listening on ${port}`));
