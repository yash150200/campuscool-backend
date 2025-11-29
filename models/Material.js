// // // const mongoose = require("mongoose");

// // // const materialSchema = new mongoose.Schema({
// // // name: String,
// // // url: String,
// // // uploadedAt: {
// // // type: Date,
// // // default: Date.now,
// // // },
// // // });

// // // module.exports = mongoose.model("Material", materialSchema);
// // const mongoose = require("mongoose");

// // const materialSchema = new mongoose.Schema({
// //   name: String,
// //   url: String,
// //   public_id: String, // Added for Cloudinary deletion
// //   uploadedAt: {
// //     type: Date,
// //     default: Date.now,
// //   },
// // });

// // module.exports = mongoose.model("Material", materialSchema);
// const mongoose = require("mongoose");

// const materialSchema = new mongoose.Schema({
//   name: String,
//   url: String,
//   public_id: String, // ✅ required to delete from Cloudinary
//   uploadedAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// module.exports = mongoose.model("Material", materialSchema);
const mongoose = require("mongoose");

const materialSchema = new mongoose.Schema({
  name: String,
  url: String,
  public_id: String, // for Cloudinary deletion
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Match your User model name
    required: true,
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Material", materialSchema);
