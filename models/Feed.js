// const mongoose = require("mongoose");

// const feedSchema = new mongoose.Schema({
//   text: { type: String, required: true },
//   image: { type: String }, // store image URL
//   user: { type: String },
//   timestamp: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model("Feed", feedSchema);
const mongoose = require("mongoose");

const feedSchema = new mongoose.Schema({
  content: { type: String },       // text content
  image: { type: String },         // optional image URL
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Feed", feedSchema);
