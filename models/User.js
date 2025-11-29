// // const mongoose = require("mongoose");

// // const userSchema = new mongoose.Schema({
// //   email: { type: String, required: true, unique: true },
// //   password: { type: String, required: true },
// //   name: String,
// // });

// // module.exports = mongoose.model("User", userSchema);
// // models/User.js
// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   name: String,
//   role: {
//     type: String,
//     enum: ["user", "faculty", "admin"],
//     default: "user",
//   },
// }, { timestamps: true });

// module.exports = mongoose.model("User", userSchema);
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
}, {
  timestamps: true, // optional: adds createdAt and updatedAt fields
});

module.exports = mongoose.model("User", userSchema);
