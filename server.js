const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
var cookieParser = require("cookie-parser");
const user = require("./Routers/user");
const app = express();
const mongoose = require("mongoose");

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use("/user", user);
const userModel = require("./Schema/User");

mongoose.connect(
  "mongodb+srv://firstapp:OzDYeqeWwP7YJKPA@cluster0.33buyfe.mongodb.net/myfurstapp",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("we are connected to DB");
});

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log("listen on port: ", port);
});
