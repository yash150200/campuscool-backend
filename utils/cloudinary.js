// // const cloudinary = require("cloudinary").v2;
// // const { CloudinaryStorage } = require("multer-storage-cloudinary");

// // cloudinary.config({
// // cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
// // api_key: process.env.CLOUDINARY_API_KEY,
// // api_secret: process.env.CLOUDINARY_API_SECRET,
// // });

// // const storage = new CloudinaryStorage({
// // cloudinary,
// // params: {
// // folder: "campus_materials",
// // allowed_formats: [
// // "jpg", "jpeg", "png", "pdf", "docx", "ppt", "pptx", "xls", "xlsx",
// // ],
// // },
// // });

// // module.exports = { cloudinary, storage };
// const cloudinary = require("cloudinary").v2;
// const { CloudinaryStorage } = require("multer-storage-cloudinary");

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: async (req, file) => {
//     return {
//       folder: "campus_materials",
//       public_id: file.originalname.split(".")[0],
//       resource_type: "auto",
//     };
//   },
// });

// module.exports = { cloudinary, storage };
require("dotenv").config(); // Load env variables at the top

const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// Debug log to verify env variables are loaded correctly
console.log("✅ Cloudinary ENV loaded:", {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY ? "✅ Present" : "❌ Missing",
  api_secret: process.env.CLOUDINARY_API_SECRET ? "✅ Present" : "❌ Missing",
});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => ({
    folder: "campus_materials",
    resource_type: "auto", // Auto-detect type (image, pdf, docx, etc)
    public_id: file.originalname.split(".")[0], // Optional: remove extension for cleaner name
  }),
});

module.exports = { cloudinary, storage };
