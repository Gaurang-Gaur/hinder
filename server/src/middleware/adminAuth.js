const adminAuth = (req, res, next) => {
  //   console.log("runing admin auth");
  console.log(req.query);

  if (req.query.token === "xyz") {
    console.log("Admin is authenicated");
    next();
  } else {
    console.log("Admin is not authenicated");
    res.send("unable to auth");
  }
};

const userAuth = (req, res, next) => {
  const token = req.params.token;
  const userId = req.params.userId;
  console.log(`Token is ${token} and userId is ${userId}`);
  next();
};

module.exports = {
  adminAuth,
  userAuth,
};
