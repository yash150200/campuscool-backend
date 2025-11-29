// server/routes/profileRoutes.js
const express = require("express");
const router = express.Router();

// Dummy route
router.get("/", (req, res) => {
  res.json({ message: "Profile route working!" });
});

module.exports = router;
