const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

router.post(
  "/",
  [
    body("name", "please enter minimum 3 character").isLength({ min: 3 }),
    body("email", "please enter a valid email").isEmail(),
    body("password", "please enter minimum 3 character").isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    console.log(errors.isEmpty());
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
    // res.send(req.body);
    // console.log(req.body);
    User(req.body)
      .save()
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err, "THIS IS THE ERROR");
        res.json({ error: "please enter a valid email", message: err.message });
      });

    // const user = new User(req.body);
    // user.save();
    // res.send(req.body);
    // res.json({ message: "success", file: "auth" });
  }
);

module.exports = router;
