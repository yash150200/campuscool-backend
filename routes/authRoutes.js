// // const express = require("express");
// // const bcrypt = require("bcryptjs");
// // const jwt = require("jsonwebtoken");
// // const User = require("../models/User");

// // const router = express.Router();

// // // ========================
// // // Register Route
// // // ========================
// // router.post("/register", async (req, res) => {
// //   const { email, password, name } = req.body;
// //   try {
// //     if (!email || !password || !name) {
// //       return res.status(400).json({ msg: "Please fill all fields" });
// //     }

// //     const existingUser = await User.findOne({ email });
// //     if (existingUser) {
// //       console.log("Register failed: Email already in use");
// //       return res.status(400).json({ msg: "User already exists" });
// //     }

// //     const hashedPassword = await bcrypt.hash(password, 10);
// //     const newUser = new User({ email, password: hashedPassword, name });
// //     await newUser.save();

// //     console.log("User registered successfully:", email);
// //     res.status(201).json({ msg: "User registered successfully" });
// //   } catch (err) {
// //     console.error("Registration Error:", err);
// //     res.status(500).json({ msg: "Server error during registration" });
// //   }
// // });

// // // ========================
// // // Login Route
// // // ========================
// // router.post("/login", async (req, res) => {
// //   const { email, password } = req.body;
// //   try {
// //     if (!email || !password) {
// //       return res.status(400).json({ msg: "Please enter both email and password" });
// //     }

// //     const user = await User.findOne({ email });
// //     if (!user) {
// //       console.log("Login failed: No user found for email:", email);
// //       return res.status(401).json({ msg: "Invalid credentials (email)" });
// //     }

// //     const isMatch = await bcrypt.compare(password, user.password);
// //     if (!isMatch) {
// //       console.log("Login failed: Wrong password for", email);
// //       return res.status(401).json({ msg: "Invalid credentials (password)" });
// //     }

// //     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
// //       expiresIn: "7d",
// //     });

// //     console.log("Login successful:", email);
// //     res.json({
// //       token,
// //       user: {
// //         id: user._id,
// //         email: user.email,
// //         name: user.name,
// //       },
// //     });
// //   } catch (err) {
// //     console.error("Login Error:", err);
// //     res.status(500).json({ msg: "Server error during login" });
// //   }
// // });

// // module.exports = router;
// // routes/authRoutes.js
// const express = require("express");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// const router = express.Router();

// // ========================
// // Register Route
// // ========================
// router.post("/register", async (req, res) => {
//   const { email, password, name } = req.body;
//   try {
//     if (!email || !password || !name) {
//       return res.status(400).json({ msg: "Please fill all fields" });
//     }

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       console.log("Register failed: Email already in use");
//       return res.status(400).json({ msg: "User already exists" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ email, password: hashedPassword, name });
//     await newUser.save();

//     console.log("User registered successfully:", email);
//     res.status(201).json({ msg: "User registered successfully" });
//   } catch (err) {
//     console.error("Registration Error:", err);
//     res.status(500).json({ msg: "Server error during registration" });
//   }
// });

// // ========================
// // Login Route
// // ========================
// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     if (!email || !password) {
//       return res.status(400).json({ msg: "Please enter both email and password" });
//     }

//     const user = await User.findOne({ email });
//     if (!user) {
//       console.log("Login failed: No user found for email:", email);
//       return res.status(401).json({ msg: "Invalid credentials (email)" });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       console.log("Login failed: Wrong password for", email);
//       return res.status(401).json({ msg: "Invalid credentials (password)" });
//     }

//     const token = jwt.sign(
//       { id: user._id, role: user.role, name: user.name },
//       process.env.JWT_SECRET,
//       { expiresIn: "7d" }
//     );

//     console.log("Login successful:", email);
//     res.json({
//       token,
//       user: {
//         id: user._id,
//         email: user.email,
//         name: user.name,
//         role: user.role,
//       },
//     });
//   } catch (err) {
//     console.error("Login Error:", err);
//     res.status(500).json({ msg: "Server error during login" });
//   }
// });

// module.exports = router;
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// ========================
// Register Route
// ========================
router.post("/register", async (req, res) => {
  try {
    const { email, password, name } = req.body;

    // Validate input
    if (!email || !password || !name) {
      return res.status(400).json({ msg: "Please fill all fields" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.warn(`Register failed: Email already in use -> ${email}`);
      return res.status(400).json({ msg: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save user
    const newUser = new User({
      email,
      password: hashedPassword,
      name,
    });
    await newUser.save();

    console.info(`User registered successfully -> ${email}`);
    return res.status(201).json({ msg: "User registered successfully" });
  } catch (err) {
    console.error("Registration Error:", err.message);
    return res.status(500).json({ msg: "Server error during registration" });
  }
});

// ========================
// Login Route
// ========================
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res
        .status(400)
        .json({ msg: "Please enter both email and password" });
    }

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      console.warn(`Login failed: No user found -> ${email}`);
      return res.status(401).json({ msg: "Invalid credentials" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.warn(`Login failed: Wrong password -> ${email}`);
      return res.status(401).json({ msg: "Invalid credentials" });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    console.info(`Login successful -> ${email}`);
    return res.json({
      token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (err) {
    console.error("Login Error:", err.message);
    return res.status(500).json({ msg: "Server error during login" });
  }
});

module.exports = router;
