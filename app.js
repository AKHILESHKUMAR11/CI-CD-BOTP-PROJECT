const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("CI/CD Pipeline Working VERSION 4");
});

app.listen(3000);
