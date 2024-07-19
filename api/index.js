const express = require("express");
const app = express();
const userRoutes = require("./routes/user.route");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth.route");
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.listen(3500, () => {
  console.log("Server is listening on port 3000");
});
