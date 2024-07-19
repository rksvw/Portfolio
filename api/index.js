const express = require("express");
const app = express();
const userRoutes = require("./routes/user.route");
const bodyParser = require("body-parser");

app.get("/", (req, res) => {
  res.send("Hello world!");
});


app.use('/api/user', userRoutes);
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use("/api/v1", userRoutes);
// app.use(express.json());

app.listen(3500, () => {
  console.log("Server is listening on port 3000");
});
