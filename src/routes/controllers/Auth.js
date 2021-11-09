const auth = require("../../middleware/auth");
const express = require("express");
const router = express.Router();

router.post("/", auth, (req, res) => {
  res.status(200).send("Welcome");
});

module.exports = router;
