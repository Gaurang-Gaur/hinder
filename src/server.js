const express = require("express");
const { adminAuth, userAuth } = require("./middleware/adminAuth");
const { errorHandler } = require("./middleware/errorHandler");
const { User } = require("./models/user");
const app = express();

// ?Middleware
// require("dotenv").config();
app.use(express.json());

const { connectToDb } = require("./config/database");

// api

// app.get("/user", async (req, res) => {
//   const userEmailId = req.body.emailId;

//   try {
//     let obj = await User.findOne({ emailId: userEmailId });
//     if (obj == null) {
//       res.status(404).send("User not found");
//     } else res.status(200).send(obj);
//   } catch (ex) {
//     console.log(ex.message);
//   }
// });

app.get("/feed", async (req, res) => {
  try {
    let obj = await User.find({});
    if (obj == null) {
      res.status(404).send("Users not found");
    } else res.status(200).send(obj);
  } catch (ex) {
    res.status(400).send("something went wrong");
    console.log(ex.message);
  }
});

app.get("/user/:id", async (req, res) => {
  // res.send("to");
  const { id } = req.params;
  console.log(id);
  try {
    const obj = await User.findById({ _id: id });
    if (obj != null) {
      res.status(200).send(obj);
    } else {
      res.status(404).send("No User found");
    }
  } catch (ex) {
    console.log(ex);
  }
});

app.patch("/user", async (req, res) => {
  const data = req.body;

  try {
    const ALLOWED_FIELDS = ["age", "skills", "password", "photoUrl", "about"];
    const isUpdateAllowed = Object.keys(data).every((k) =>
      ALLOWED_FIELDS.includes(k)
    );
    if (data.skills.length > 11) {
      throw new Error("Skills should be less than 11");
    }

    if (!isUpdateAllowed) {
      throw new Error("This field is not allowed to update");
    }
    const obj = await User.findByIdAndUpdate(
      { _id: "694514bf7bde113e1699e203" },
      data,
      {
        runValidators: true,
      }
    );
    res.status(200).send(obj);
  } catch (ex) {
    console.log(ex);
  }
  // res.send("hello");
});
app.delete("/user/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const obj = await User.findByIdAndDelete({ _id: id });
    if (obj != null) {
      res.status(200).send(obj);
    } else {
      res.status(404).send("No User found");
    }
  } catch (ex) {
    console.log(ex);
  }
});
app.post("/signup", async (req, res) => {
  // console.log(req.body);
  const data = req.body;

  try {
    const ALLOWED_FIELDS = [
      "firstName",
      "lastName",
      "emailId",
      "age",
      "skills",
      "password",
      "photoUrl",
      "about",
      "gender",
    ];
    if (data.skills.length > 11) {
      throw new Error("Skills should be less than 11");
    }
    const isUpdateAllowed = Object.keys(data).every((k) =>
      ALLOWED_FIELDS.includes(k)
    );

    if (!isUpdateAllowed) {
      throw new Error("This field is not allowed to be added");
    }
    const userObj = new User(data);

    await userObj.save();
    res.send("User Added");
  } catch (ex) {
    console.log(ex);
  }
});

connectToDb()
  .then(() => {
    console.log("I am connect to DB");

    app.listen(8000, () => {
      console.log(">> Server is listening on 8000");
    });
  })
  .catch((e) => {
    console.log(e.message);
    console.error("I am not able to connect to db");
  });
