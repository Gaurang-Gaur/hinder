const mongoose = require("mongoose");

const { Schema } = require("mongoose");
const validator = require("validator");
const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      maxLength: 50,
      minLength: 3,
    },
    lastName: {
      type: String,
    },
    emailId: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
      index: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Enter correct emailId");
        }
      },
    },
    password: {
      type: String,
      minLength: 5,
      maxLength: 20,
    },
    gender: {
      type: String,
      lowercase: true,
      validate(value) {
        if (!["male", "female", "others"].includes(value)) {
          throw new Error("Invalid Gender");
        }
      },
    },
    age: {
      type: Number,
      min: 18,
    },
    photoUrl: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_M4wMFN1yfKuYtjd6gy1EIw3PxWGeEoVB6g&s",
      validate(value) {
        if (!validator.isURL(value)) {
          throw new Error("Enter correct URL");
        }
      },
    },
    about: {
      type: String,
      default: "This default about me",
    },
    skills: {
      type: [String],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = { User };
