const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_KEY = "sameer";

router.post(
  "/",
  [
    body("name", "please enter minimum 3 character").isLength({ min: 3 }),
    body("email", "please enter a valid email").isEmail(),
    body("password", "please enter minimum 3 character").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    console.log(errors.isEmpty());
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
    // res.send(req.body);
    // console.log(req.body);

    //checking user's email is exist or not\
    try {
      let user = await User.findOne({ email: req.body.email });
      console.log(user, "after");
      if (user) {
        return res.status(400).json({ error: "this email is already exist" });
      }

      const salt = await bcrypt.genSalt(10);
      let secPass = await bcrypt.hash(req.body.password, salt);

      //create a new user
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });
      const jwtToken = jwt.sign(req.body.email, JWT_KEY);

      res.json({ jwtToken });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("some error happen");
    }

    // const user = new User(req.body);
    // user.save();
    // res.send(req.body);
    // res.json({ message: "success", file: "auth" });
  }
);

module.exports = router;
