const express = require("express");
const routes = require("./routes");

var app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));


//Connecting to database
require("./db");

app.use("/", routes);

app.use(function (req, res, next) {
  res.send("Page not Found");
})

app.listen(3000);