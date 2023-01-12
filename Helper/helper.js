const mongoose = require("mongoose");
const { Schema } = mongoose;
const express = require("express");
const router = express.Router();

const userSchema = new Schema({
  name: String,
  lastName: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

const getUser = (req, res, next) => {
  const users = User.find();

  res.json(users);
};

const addUser = async (req, res, next) => {
  
  const user = await User.create({
    name: "ahmed",
    lastName: "gamal",
    age: 35,
  });

  res.json(user);
};

router.get("/user/getall", getUser);
router.post("/user/addUser", addUser);
module.exports = router;
