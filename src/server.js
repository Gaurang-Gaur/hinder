const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("i am response");
  res.send({ name: "gaurang" });
});

app.listen(8000, () => {
  console.log("server is listening on 8000");
});
