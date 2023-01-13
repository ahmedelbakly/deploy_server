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

const getUser = async(req, res, next) => {
  const users = await User.find();

  res.json(users);
};

const addUser = async (req, res, next) => {
try {
  const user = await User.create({
    name: "ahmed",
    lastName: "gamal",
    age: 35,
  });

  res.json(user);
} catch (error) {
console.log(error)
}
  
};
const deleteUser = async (req, res, next) => {
  const {id}=req.params;
try {
 await User.deleteOne({_id:id})

  res.json("user is delete now form db");
} catch (error) {
console.log(error)
}
  
};

router.get("/user/getall", getUser);
router.post("/user/addUser", addUser);
router.delete("/user/deleteUser/:id", deleteUser);
module.exports = router;
