
// // // // const express = require("express");
// // // // const multer = require("multer");
// // // // const { storage, cloudinary } = require("../utils/cloudinary");
// // // // const auth = require("../middleware/authMiddleware");
// // // // const Material = require("../models/Material");
// // // // const { addLog } = require("./admin");

// // // // const router = express.Router();
// // // // const upload = multer({ storage });

// // // // // Upload Material
// // // // router.post("/upload", auth, upload.single("file"), async (req, res) => {
// // // //   try {
// // // //     if (!req.file) return res.status(400).json({ msg: "No file uploaded" });

// // // //     const material = new Material({
// // // //       name: req.file.originalname,
// // // //       url: req.file.path,
// // // //       public_id: req.file.filename,
// // // //     });
// // // //     await material.save();
// // // //     await addLog(`${req.user.name || req.user.id} uploaded material: ${req.file.originalname}`);
// // // //     res.json({ msg: "Uploaded", material });
// // // //   } catch (err) {
// // // //     res.status(500).json({ msg: "Upload failed" });
// // // //   }
// // // // });

// // // // // Get Materials
// // // // router.get("/", auth, async (req, res) => {
// // // //   try {
// // // //     const materials = await Material.find().sort({ uploadedAt: -1 });
// // // //     await addLog(`${req.user.name || req.user.id} fetched all materials`);
// // // //     res.json(materials);
// // // //   } catch (err) {
// // // //     res.status(500).json({ msg: "Fetch failed" });
// // // //   }
// // // // });

// // // // // Delete all Materials
// // // // router.delete("/delete-all", auth, async (req, res) => {
// // // //   try {
// // // //     const materials = await Material.find();
// // // //     for (const mat of materials) {
// // // //       if (mat.public_id) await cloudinary.uploader.destroy(mat.public_id);
// // // //     }
// // // //     await Material.deleteMany();
// // // //     await addLog(`${req.user.name || req.user.id} deleted all materials`);
// // // //     res.json({ msg: "All materials deleted" });
// // // //   } catch (err) {
// // // //     res.status(500).json({ msg: "Deletion failed" });
// // // //   }
// // // // });

// // // // module.exports = router;
// // // const express = require("express");
// // // const Material = require("../models/Material");
// // // //const { addLog } = require("./admin.js");   // ✅ Import addLog
// // // const { addLog } = require("./admin");   // ✅ Correct path

// // // const auth = require("../middleware/auth");
// // // const router = express.Router();

// // // // Upload material
// // // router.post("/", auth, async (req, res) => {
// // //   try {
// // //     const { title, fileUrl } = req.body;
// // //     const newMaterial = new Material({ title, fileUrl, uploadedBy: req.user.id });
// // //     await newMaterial.save();

// // //     await addLog(`📚 User ${req.user.email} uploaded material: ${title}`);

// // //     res.json(newMaterial);
// // //   } catch (err) {
// // //     res.status(500).json({ msg: "Failed to upload material" });
// // //   }
// // // });

// // // // Get all materials
// // // router.get("/", auth, async (req, res) => {
// // //   try {
// // //     const materials = await Material.find().populate("uploadedBy", "email").sort({ createdAt: -1 });
// // //     res.json(materials);
// // //   } catch (err) {
// // //     res.status(500).json({ msg: "Failed to fetch materials" });
// // //   }
// // // });

// // // module.exports = router;
// // const express = require("express");
// // const multer = require("multer");
// // const { storage, cloudinary } = require("../utils/cloudinary");
// // const { authMiddleware } = require("../middleware/authMiddleware"); // ✅ Correct import
// // const Material = require("../models/Material");
// // const { addLog } = require("./admin"); // ✅ Correct path

// // const router = express.Router();
// // const upload = multer({ storage });

// // // Upload material
// // router.post("/upload", authMiddleware, upload.single("file"), async (req, res) => {
// //   try {
// //     if (!req.file) return res.status(400).json({ msg: "No file uploaded" });

// //     const newMaterial = new Material({
// //       name: req.file.originalname,
// //       url: req.file.path,
// //       public_id: req.file.filename,
// //       uploadedBy: req.user.id,
// //     });

// //     await newMaterial.save();

// //     await addLog(`📚 User ${req.user.email || req.user.id} uploaded material: ${req.file.originalname}`);

// //     res.json({ msg: "Uploaded successfully", material: newMaterial });
// //   } catch (err) {
// //     console.error("Upload error:", err);
// //     res.status(500).json({ msg: "Failed to upload material" });
// //   }
// // });

// // // Get all materials
// // router.get("/", authMiddleware, async (req, res) => {
// //   try {
// //     const materials = await Material.find()
// //       .populate("uploadedBy", "name email")
// //       .sort({ createdAt: -1 });

// //     await addLog(`📚 User ${req.user.email || req.user.id} fetched all materials`);

// //     res.json(materials);
// //   } catch (err) {
// //     console.error("Fetch materials error:", err);
// //     res.status(500).json({ msg: "Failed to fetch materials" });
// //   }
// // });

// // // Delete all materials
// // router.delete("/delete-all", authMiddleware, async (req, res) => {
// //   try {
// //     const materials = await Material.find();
// //     for (const mat of materials) {
// //       if (mat.public_id) await cloudinary.uploader.destroy(mat.public_id);
// //     }

// //     await Material.deleteMany();

// //     await addLog(`🗑️ User ${req.user.email || req.user.id} deleted all materials`);

// //     res.json({ msg: "All materials deleted" });
// //   } catch (err) {
// //     console.error("Delete materials error:", err);
// //     res.status(500).json({ msg: "Failed to delete materials" });
// //   }
// // });

// // module.exports = router;
// const express = require("express");
// const multer = require("multer");
// const { storage, cloudinary } = require("../utils/cloudinary");
// const { authMiddleware } = require("../middleware/authMiddleware");
// const Material = require("../models/Material");
// const { addLog } = require("./admin");

// const router = express.Router();
// const upload = multer({ storage });

// // ✅ Upload material
// router.post("/upload", authMiddleware, upload.single("file"), async (req, res) => {
//   try {
//     if (!req.file) return res.status(400).json({ msg: "No file uploaded" });

//     const newMaterial = new Material({
//       name: req.file.originalname,
//       url: req.file.path, // Full Cloudinary URL
//       public_id: req.file.filename,
//       uploadedBy: req.user.id,
//     });

//     await newMaterial.save();
//     await addLog(`📚 User ${req.user.email || req.user.id} uploaded material: ${req.file.originalname}`);

//     res.json({ msg: "Uploaded successfully", material: newMaterial });
//   } catch (err) {
//     console.error("Upload error:", err);
//     res.status(500).json({ msg: "Failed to upload material" });
//   }
// });

// // ✅ Get all materials
// router.get("/", authMiddleware, async (req, res) => {
//   try {
//     const materials = await Material.find()
//       .populate("uploadedBy", "name email")
//       .sort({ createdAt: -1 });

//     await addLog(`📚 User ${req.user.email || req.user.id} fetched all materials`);

//     res.json(materials);
//   } catch (err) {
//     console.error("Fetch materials error:", err);
//     res.status(500).json({ msg: "Failed to fetch materials" });
//   }
// });

// // ✅ Delete all materials
// router.delete("/delete-all", authMiddleware, async (req, res) => {
//   try {
//     const materials = await Material.find();

//     for (const mat of materials) {
//       if (mat.public_id) await cloudinary.uploader.destroy(mat.public_id);
//     }

//     await Material.deleteMany();
//     await addLog(`🗑️ User ${req.user.email || req.user.id} deleted all materials`);

//     res.json({ msg: "All materials deleted" });
//   } catch (err) {
//     console.error("Delete materials error:", err);
//     res.status(500).json({ msg: "Failed to delete materials" });
//   }
// });

// module.exports = router;
const express = require("express");
const multer = require("multer");
const { storage, cloudinary } = require("../utils/cloudinary");
const { authMiddleware } = require("../middleware/authMiddleware");
const Material = require("../models/Material");
const { addLog } = require("./admin");

const router = express.Router();
const upload = multer({ storage });

// ✅ Upload material
router.post("/upload", authMiddleware, upload.single("file"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ msg: "No file uploaded" });

    const newMaterial = new Material({
      name: req.file.originalname,
      url: req.file.path, // Full Cloudinary URL
      public_id: req.file.filename,
      uploadedBy: req.user.id,
    });

    await newMaterial.save();
    await addLog(`📚 User ${req.user.email || req.user.id} uploaded material: ${req.file.originalname}`);

    res.json({ msg: "Uploaded successfully", material: newMaterial });
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ msg: "Failed to upload material" });
  }
});

// ✅ Get all materials
router.get("/", authMiddleware, async (req, res) => {
  try {
    const materials = await Material.find()
      .populate("uploadedBy", "name email")
      .sort({ createdAt: -1 });

    await addLog(`📚 User ${req.user.email || req.user.id} fetched all materials`);

    res.json(materials);
  } catch (err) {
    console.error("Fetch materials error:", err);
    res.status(500).json({ msg: "Failed to fetch materials" });
  }
});

// ✅ Delete a single material
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const material = await Material.findById(req.params.id);
    if (!material) return res.status(404).json({ msg: "Material not found" });

    // Delete from Cloudinary
    if (material.public_id) await cloudinary.uploader.destroy(material.public_id);

    // Delete from MongoDB
    await material.deleteOne();

    await addLog(`🗑️ User ${req.user.email || req.user.id} deleted material: ${material.name}`);

    res.json({ msg: "Material deleted successfully" });
  } catch (err) {
    console.error("Delete material error:", err);
    res.status(500).json({ msg: "Failed to delete material" });
  }
});

// ✅ Delete all materials
router.delete("/delete-all", authMiddleware, async (req, res) => {
  try {
    const materials = await Material.find();

    for (const mat of materials) {
      if (mat.public_id) await cloudinary.uploader.destroy(mat.public_id);
    }

    await Material.deleteMany();
    await addLog(`🗑️ User ${req.user.email || req.user.id} deleted all materials`);

    res.json({ msg: "All materials deleted" });
  } catch (err) {
    console.error("Delete materials error:", err);
    res.status(500).json({ msg: "Failed to delete materials" });
  }
});

module.exports = router;
