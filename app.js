const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("CI/CD Pipeline Working VERSION 2");
});

app.listen(3000);
