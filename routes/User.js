const express = require("express");
const router = express.Router();
const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");

// get config vars
dotenv.config();

// access config var
process.env.TOKEN_SECRET;

const generateToken = (id) => {
  return jwt.sign(id, process.env.TOKEN_SECRET);
};

// return every users.
router.get("/", async (req, res) => {
  const data = await User.findAll();
  res.json(data);
});

// register user.
router.post("/add", async (req, res) => {
  try {
    const { firstName, lastName, password } = req.body;
    user = new User({
      firstName,
      lastName,
      password,
    });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    const token = generateToken(user.id);
    res.json(token);
  } catch (err) {
    res.json({ msg: err.message });
  }
});

// deletes user.
router.delete("/delete/:id", async (req, res) => {
  try {
    User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({ msg: "Deleted Successfully." });
  } catch (err) {
    res.json({ msg: err.message });
  }
});

module.exports = router;
