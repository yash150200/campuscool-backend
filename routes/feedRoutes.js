
// // // // // // // const express = require("express");
// // // // // // // const router = express.Router();
// // // // // // // const Feed = require("../models/Feed");
// // // // // // // const auth = require("../middleware/authMiddleware");

// // // // // // // // Import addLog from admin.js
// // // // // // // const { addLog } = require("./admin");

// // // // // // // // GET all feed posts
// // // // // // // router.get("/", auth, async (req, res) => {
// // // // // // //   try {
// // // // // // //     const feeds = await Feed.find().populate("user", "name email").sort({ createdAt: -1 });
// // // // // // //     res.json(feeds);
// // // // // // //   } catch (err) {
// // // // // // //     res.status(500).json({ error: "Failed to fetch feeds" });
// // // // // // //   }
// // // // // // // });

// // // // // // // // CREATE a new feed post
// // // // // // // router.post("/", auth, async (req, res) => {
// // // // // // //   try {
// // // // // // //     const newPost = new Feed({
// // // // // // //       user: req.user.id,
// // // // // // //       content: req.body.content,
// // // // // // //     });
// // // // // // //     await newPost.save();

// // // // // // //     // Log this action for Admin
// // // // // // //     addLog(`📢 New feed post by ${req.user.email}`);

// // // // // // //     res.json(newPost);
// // // // // // //   } catch (err) {
// // // // // // //     res.status(500).json({ error: "Failed to create post" });
// // // // // // //   }
// // // // // // // });

// // // // // // // // DELETE a feed post
// // // // // // // router.delete("/:id", auth, async (req, res) => {
// // // // // // //   try {
// // // // // // //     const post = await Feed.findById(req.params.id);
// // // // // // //     if (!post) return res.status(404).json({ error: "Post not found" });

// // // // // // //     // Only owner can delete
// // // // // // //     if (post.user.toString() !== req.user.id) {
// // // // // // //       return res.status(403).json({ error: "Not authorized" });
// // // // // // //     }

// // // // // // //     await post.deleteOne();

// // // // // // //     // Log this action
// // // // // // //     addLog(`❌ Feed post deleted by ${req.user.email}`);

// // // // // // //     res.json({ message: "Post deleted" });
// // // // // // //   } catch (err) {
// // // // // // //     res.status(500).json({ error: "Failed to delete post" });
// // // // // // //   }
// // // // // // // });

// // // // // // // module.exports = router;

// // // // // // const express = require("express");
// // // // // // const Feed = require("../models/Feed");
// // // // // // //const { addLog } = require("./admin.js");   // ✅ Import addLog
// // // // // // const { addLog } = require("./admin");   // ✅ Correct path

// // // // // // //const auth = require("../middleware/authMiddleware.js");
// // // // // // const router = express.Router();

// // // // // // // Create new feed post
// // // // // // router.post("/", auth, async (req, res) => {
// // // // // //   try {
// // // // // //     const { content } = req.body;
// // // // // //     const newFeed = new Feed({
// // // // // //       content,
// // // // // //       user: req.user.id,
// // // // // //       createdAt: new Date()
// // // // // //     });
// // // // // //     await newFeed.save();

// // // // // //     await addLog(`📝 User ${req.user.email} added a feed post`);

// // // // // //     res.json(newFeed);
// // // // // //   } catch (err) {
// // // // // //     res.status(500).json({ msg: "Failed to add feed" });
// // // // // //   }
// // // // // // });

// // // // // // // Get all feed posts
// // // // // // router.get("/", auth, async (req, res) => {
// // // // // //   try {
// // // // // //     const feeds = await Feed.find().populate("user", "email").sort({ createdAt: -1 });
// // // // // //     res.json(feeds);
// // // // // //   } catch (err) {
// // // // // //     res.status(500).json({ msg: "Failed to fetch feeds" });
// // // // // //   }
// // // // // // });

// // // // // // module.exports = router;
// // // // // const express = require("express");
// // // // // const router = express.Router();
// // // // // const Feed = require("../models/Feed");
// // // // // const auth = require("../middleware/authMiddleware"); // ✅ Correct import
// // // // // const { addLog } = require("./admin"); // ✅ Import admin logger

// // // // // // CREATE a new feed post
// // // // // router.post("/", auth, async (req, res) => {
// // // // //   try {
// // // // //     const { content } = req.body;

// // // // //     if (!content) {
// // // // //       return res.status(400).json({ error: "Content is required" });
// // // // //     }

// // // // //     const newFeed = new Feed({
// // // // //       content,
// // // // //       user: req.user.id,
// // // // //       createdAt: new Date(),
// // // // //     });

// // // // //     await newFeed.save();

// // // // //     // Log the action for admin panel
// // // // //     await addLog(`📝 User ${req.user.email} created a feed post`);

// // // // //     res.json(newFeed);
// // // // //   } catch (err) {
// // // // //     console.error("Error creating feed:", err);
// // // // //     res.status(500).json({ error: "Failed to create post" });
// // // // //   }
// // // // // });

// // // // // // GET all feed posts
// // // // // router.get("/", auth, async (req, res) => {
// // // // //   try {
// // // // //     const feeds = await Feed.find()
// // // // //       .populate("user", "name email")
// // // // //       .sort({ createdAt: -1 });

// // // // //     res.json(feeds);
// // // // //   } catch (err) {
// // // // //     console.error("Error fetching feeds:", err);
// // // // //     res.status(500).json({ error: "Failed to fetch feeds" });
// // // // //   }
// // // // // });

// // // // // // DELETE a feed post
// // // // // router.delete("/:id", auth, async (req, res) => {
// // // // //   try {
// // // // //     const post = await Feed.findById(req.params.id);
// // // // //     if (!post) return res.status(404).json({ error: "Post not found" });

// // // // //     // Only owner can delete
// // // // //     if (post.user.toString() !== req.user.id) {
// // // // //       return res.status(403).json({ error: "Not authorized" });
// // // // //     }

// // // // //     await post.deleteOne();

// // // // //     // Log delete action
// // // // //     await addLog(`❌ User ${req.user.email} deleted a feed post`);

// // // // //     res.json({ message: "Post deleted" });
// // // // //   } catch (err) {
// // // // //     console.error("Error deleting feed:", err);
// // // // //     res.status(500).json({ error: "Failed to delete post" });
// // // // //   }
// // // // // });

// // // // // module.exports = router;
// // // // const express = require("express");
// // // // const router = express.Router();
// // // // const Feed = require("../models/Feed");
// // // // const auth = require("../middleware/authMiddleware"); // ✅ FIXED import
// // // // const { addLog } = require("./admin"); // ✅ admin log import

// // // // // CREATE a new feed post
// // // // router.post("/", auth, async (req, res) => {
// // // //   try {
// // // //     const { content } = req.body;

// // // //     if (!content) {
// // // //       return res.status(400).json({ error: "Content is required" });
// // // //     }

// // // //     const newFeed = new Feed({
// // // //       content,
// // // //       user: req.user.id,
// // // //       createdAt: new Date(),
// // // //     });

// // // //     await newFeed.save();

// // // //     // Log the action
// // // //     await addLog(`📝 User ${req.user.email} created a feed post`);

// // // //     res.json(newFeed);
// // // //   } catch (err) {
// // // //     console.error("Error creating feed:", err);
// // // //     res.status(500).json({ error: "Failed to create post" });
// // // //   }
// // // // });

// // // // // GET all feed posts
// // // // router.get("/", auth, async (req, res) => {
// // // //   try {
// // // //     const feeds = await Feed.find()
// // // //       .populate("user", "name email")
// // // //       .sort({ createdAt: -1 });

// // // //     res.json(feeds);
// // // //   } catch (err) {
// // // //     console.error("Error fetching feeds:", err);
// // // //     res.status(500).json({ error: "Failed to fetch feeds" });
// // // //   }
// // // // });

// // // // // DELETE a feed post
// // // // router.delete("/:id", auth, async (req, res) => {
// // // //   try {
// // // //     const post = await Feed.findById(req.params.id);
// // // //     if (!post) return res.status(404).json({ error: "Post not found" });

// // // //     // Only owner can delete
// // // //     if (post.user.toString() !== req.user.id) {
// // // //       return res.status(403).json({ error: "Not authorized" });
// // // //     }

// // // //     await post.deleteOne();

// // // //     // Log delete action
// // // //     await addLog(`❌ User ${req.user.email} deleted a feed post`);

// // // //     res.json({ message: "Post deleted" });
// // // //   } catch (err) {
// // // //     console.error("Error deleting feed:", err);
// // // //     res.status(500).json({ error: "Failed to delete post" });
// // // //   }
// // // // });

// // // // module.exports = router;
// // // // server/routes/feedRoutes.js
// // // const express = require("express");
// // // const router = express.Router();
// // // const Feed = require("../models/Feed");
// // // const auth = require("../middleware/authMiddleware"); // ✅ Correct import
// // // const { addLog } = require("./admin"); // ✅ Log actions for admin

// // // // ✅ CREATE a new feed post
// // // router.post("/", auth, async (req, res) => {
// // //   try {
// // //     const { content } = req.body;

// // //     const newFeed = new Feed({
// // //       content,
// // //       user: req.user.id,
// // //       createdAt: new Date(),
// // //     });

// // //     await newFeed.save();

// // //     // Log action for admin dashboard
// // //     await addLog(`📝 User ${req.user.email} created a feed post`);

// // //     res.json(newFeed);
// // //   } catch (err) {
// // //     console.error("Error creating feed:", err.message);
// // //     res.status(500).json({ msg: "Failed to create post" });
// // //   }
// // // });

// // // // ✅ GET all feed posts
// // // router.get("/", auth, async (req, res) => {
// // //   try {
// // //     const feeds = await Feed.find()
// // //       .populate("user", "name email")
// // //       .sort({ createdAt: -1 });

// // //     res.json(feeds);
// // //   } catch (err) {
// // //     console.error("Error fetching feeds:", err.message);
// // //     res.status(500).json({ msg: "Failed to fetch feeds" });
// // //   }
// // // });

// // // // ✅ DELETE a feed post
// // // router.delete("/:id", auth, async (req, res) => {
// // //   try {
// // //     const post = await Feed.findById(req.params.id);
// // //     if (!post) return res.status(404).json({ msg: "Post not found" });

// // //     // Only post owner can delete
// // //     if (post.user.toString() !== req.user.id) {
// // //       return res.status(403).json({ msg: "Not authorized" });
// // //     }

// // //     await post.deleteOne();

// // //     // Log delete action
// // //     await addLog(`❌ User ${req.user.email} deleted a feed post`);

// // //     res.json({ msg: "Post deleted successfully" });
// // //   } catch (err) {
// // //     console.error("Error deleting post:", err.message);
// // //     res.status(500).json({ msg: "Failed to delete post" });
// // //   }
// // // });

// // // module.exports = router;
// // // server/routes/feedRoutes.js
// // const express = require("express");
// // const router = express.Router();
// // const Feed = require("../models/Feed");
// // const { authMiddleware } = require("../middleware/authMiddleware"); // ✅ Correct import
// // const { addLog } = require("./admin"); // ✅ Log actions for admin

// // // CREATE a new feed post
// // router.post("/", authMiddleware, async (req, res) => {
// //   try {
// //     const { content } = req.body;

// //     const newFeed = new Feed({
// //       content,
// //       user: req.user.id,
// //       createdAt: new Date(),
// //     });

// //     await newFeed.save();

// //     await addLog(`📝 User ${req.user.email} created a feed post`);

// //     res.json(newFeed);
// //   } catch (err) {
// //     console.error("Error creating feed:", err.message);
// //     res.status(500).json({ msg: "Failed to create post" });
// //   }
// // });

// // // GET all feed posts
// // router.get("/", authMiddleware, async (req, res) => {
// //   try {
// //     const feeds = await Feed.find()
// //       .populate("user", "name email")
// //       .sort({ createdAt: -1 });

// //     res.json(feeds);
// //   } catch (err) {
// //     console.error("Error fetching feeds:", err.message);
// //     res.status(500).json({ msg: "Failed to fetch feeds" });
// //   }
// // });

// // // DELETE a feed post
// // router.delete("/:id", authMiddleware, async (req, res) => {
// //   try {
// //     const post = await Feed.findById(req.params.id);
// //     if (!post) return res.status(404).json({ msg: "Post not found" });

// //     if (post.user.toString() !== req.user.id) {
// //       return res.status(403).json({ msg: "Not authorized" });
// //     }

// //     await post.deleteOne();

// //     await addLog(`❌ User ${req.user.email} deleted a feed post`);

// //     res.json({ msg: "Post deleted successfully" });
// //   } catch (err) {
// //     console.error("Error deleting post:", err.message);
// //     res.status(500).json({ msg: "Failed to delete post" });
// //   }
// // });

// // module.exports = router;
// const express = require("express");
// const router = express.Router();
// const Feed = require("../models/Feed");
// const { authMiddleware } = require("../middleware/authMiddleware");
// const { addLog } = require("./admin");
// const multer = require("multer");
// const path = require("path");

// // Configure multer for file uploads
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/"); // Ensure this folder exists
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });
// const upload = multer({ storage });

// // CREATE a new feed post
// router.post("/", authMiddleware, upload.single("image"), async (req, res) => {
//   try {
//     const { content } = req.body;
//     if (!content && !req.file) {
//       return res.status(400).json({ msg: "Text or image is required" });
//     }

//     const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

//     const newFeed = new Feed({
//       content,
//       image: imagePath,
//       user: req.user.id,
//       createdAt: new Date(),
//     });

//     await newFeed.save();
//     await addLog(`📝 User ${req.user.email} created a feed post`);

//     res.json(newFeed);
//   } catch (err) {
//     console.error("Error creating feed:", err.message);
//     res.status(500).json({ msg: "Failed to create post" });
//   }
// });

// // GET all feed posts
// router.get("/", authMiddleware, async (req, res) => {
//   try {
//     const feeds = await Feed.find()
//       .populate("user", "name email")
//       .sort({ createdAt: -1 });
//     res.json(feeds);
//   } catch (err) {
//     console.error("Error fetching feeds:", err.message);
//     res.status(500).json({ msg: "Failed to fetch feeds" });
//   }
// });

// // DELETE a feed post
// router.delete("/:id", authMiddleware, async (req, res) => {
//   try {
//     const post = await Feed.findById(req.params.id);
//     if (!post) return res.status(404).json({ msg: "Post not found" });

//     if (post.user.toString() !== req.user.id) {
//       return res.status(403).json({ msg: "Not authorized" });
//     }

//     await post.deleteOne();
//     await addLog(`❌ User ${req.user.email} deleted a feed post`);

//     res.json({ msg: "Post deleted successfully" });
//   } catch (err) {
//     console.error("Error deleting post:", err.message);
//     res.status(500).json({ msg: "Failed to delete post" });
//   }
// });

// module.exports = router;
const express = require("express");
const router = express.Router();
const Feed = require("../models/Feed");
const { authMiddleware } = require("../middleware/authMiddleware");
const { addLog } = require("./admin");
const multer = require("multer");
const path = require("path");

// Configure multer for image upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// CREATE a new feed post
router.post("/", authMiddleware, upload.single("image"), async (req, res) => {
  try {
    const { content } = req.body;
    const newFeed = new Feed({
      content,
      image: req.file ? `/uploads/${req.file.filename}` : null,
      user: req.user.id,
      createdAt: new Date(),
    });

    await newFeed.save();
    await addLog(`📝 User ${req.user.email} created a feed post`);

    res.json(newFeed);
  } catch (err) {
    console.error("Error creating feed:", err.message);
    res.status(500).json({ msg: "Failed to create post" });
  }
});

// GET all feed posts
router.get("/", authMiddleware, async (req, res) => {
  try {
    const feeds = await Feed.find()
      .populate("user", "name email")
      .sort({ createdAt: -1 });

    res.json(feeds);
  } catch (err) {
    console.error("Error fetching feeds:", err.message);
    res.status(500).json({ msg: "Failed to fetch feeds" });
  }
});

// DELETE a feed post
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const post = await Feed.findById(req.params.id);
    if (!post) return res.status(404).json({ msg: "Post not found" });

    if (post.user.toString() !== req.user.id) {
      return res.status(403).json({ msg: "Not authorized" });
    }

    await post.deleteOne();
    await addLog(`❌ User ${req.user.email} deleted a feed post`);

    res.json({ msg: "Post deleted successfully" });
  } catch (err) {
    console.error("Error deleting post:", err.message);
    res.status(500).json({ msg: "Failed to delete post" });
  }
});

module.exports = router;
