app.use("/user/:token/:userId", userAuth);
app.use("/", (req, res, next) => {
  console.log("mounting middleware");
  next();
});
app.use("/admin", adminAuth);

app.get("/test", (req, res) => {
  throw new Error("random error");
  res.send("hello");
});

app.get("/admin", (req, res) => {
  // console.log(req.body);
  res.send("inside admin");
});

app.get("/user", (req, res) => {
  // console.log(req.body);
  res.send("I got hit");
});

app.get("/", (req, res) => {
  res.send("hello to Home route");
});

app.post("/userSave", (req, res) => {
  console.log(req.query);
  res.send("save done");
});

app.get("/amazon/productList", async (req, res) => {
  const amazonApi = await fetch(url);

  console.log(amazonData);

  res.json(amazonData);
});

// console.log("Before listen");
app.use("/", errorHandler);
