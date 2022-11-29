const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "success", file: "notes" });
});

module.exports = router;
