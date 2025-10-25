const express = require("express");

const app = express();

console.log("Start of app");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello to Home route");
});

app.post("/user", (req, res) => {
  console.log(req.body);
  res.send("I got hit");
});

app.get("/amazon/productList", async (req, res) => {
  const amazonApi = await fetch(url);

  console.log(amazonData);

  res.json(amazonData);
});

console.log("Before listen");

app.listen(8000, () => {
  console.log(">> Server is listening on 8000");
});

console.log("End of app");
