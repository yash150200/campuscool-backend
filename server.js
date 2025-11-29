
// // const express = require("express");
// // const mongoose = require("mongoose");
// // const dotenv = require("dotenv");
// // const cors = require("cors");

// // // Import admin router
// // const { router: adminRoutes } = require("./routes/admin");

// // // Route imports
// // const authRoutes = require("./routes/authRoutes");
// // const feedRoutes = require("./routes/feedRoutes");
// // const eventRoutes = require("./routes/eventRoutes");
// // const materialRoutes = require("./routes/materialRoutes");
// // const profileRoutes = require("./routes/profileRoutes");
// // const attendanceRoutes = require("./routes/attendanceRoutes");
// // const aiRoutes = require("./routes/aiRoutes");

// // // Import auth middleware (just in case needed in server-level middleware)
// // const { authMiddleware, adminMiddleware } = require("./middleware/authMiddleware");

// // dotenv.config();
// // const app = express();
// // const PORT = process.env.PORT || 5000;

// // // ✅ Middleware
// // app.use(cors());
// // app.use(express.json());

// // // ✅ API Routes
// // app.use("/api/auth", authRoutes);
// // app.use("/api/feed", feedRoutes);
// // app.use("/api/events", eventRoutes);
// // app.use("/api/materials", materialRoutes);
// // app.use("/api/profile", profileRoutes);
// // app.use("/api/attendance", attendanceRoutes);
// // app.use("/api/ai", aiRoutes);
// // app.use("/api/admin", adminRoutes);

// // // ✅ Static file serving (uploads)
// // app.use("/uploads", express.static("uploads"));

// // // ✅ MongoDB Connection
// // mongoose
// //   .connect(process.env.MONGO_URI, {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// //   })
// //   .then(() => {
// //     console.log("✅ MongoDB connected successfully");

// //     app.listen(PORT, () => {
// //       console.log(`🚀 Server running at http://localhost:${PORT}`);
// //     });
// //   })
// //   .catch((err) => {
// //     console.error("❌ MongoDB connection failed:", err.message);
// //     process.exit(1); // Exit process if DB fails
// //   });

// // // ✅ Fallback route for invalid endpoints
// // app.use((req, res) => {
// //   res.status(404).json({ message: "API route not found" });
// // });
// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const cors = require("cors");

// // Import admin router (✅ FIXED)
// const adminRoutes = require("./routes/admin");

// // Route imports
// const authRoutes = require("./routes/authRoutes");
// const feedRoutes = require("./routes/feedRoutes");
// const eventRoutes = require("./routes/eventRoutes");
// const materialRoutes = require("./routes/materialRoutes");
// const profileRoutes = require("./routes/profileRoutes");
// const attendanceRoutes = require("./routes/attendanceRoutes");
// const aiRoutes = require("./routes/aiRoutes");

// // Import auth middleware (if needed globally)
// const { authMiddleware, adminMiddleware } = require("./middleware/authMiddleware");

// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 5000;

// // ✅ Middleware
// app.use(cors());
// app.use(express.json());

// // ✅ API Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/feed", feedRoutes);
// app.use("/api/events", eventRoutes);
// app.use("/api/materials", materialRoutes);
// app.use("/api/profile", profileRoutes);
// app.use("/api/attendance", attendanceRoutes);
// app.use("/api/ai", aiRoutes);
// app.use("/api/admin", adminRoutes); // ✅ fixed admin route

// // ✅ Static file serving (uploads)
// app.use("/uploads", express.static("uploads"));

// // ✅ MongoDB Connection
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("✅ MongoDB connected successfully");

//     app.listen(PORT, () => {
//       console.log(`🚀 Server running at http://localhost:${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error("❌ MongoDB connection failed:", err.message);
//     process.exit(1);
//   });

// // ✅ Fallback route
// app.use((req, res) => {
//   res.status(404).json({ message: "API route not found" });
// });


const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// Import routers
const adminRoutes = require("./routes/admin");
const authRoutes = require("./routes/authRoutes");
const feedRoutes = require("./routes/feedRoutes");
const eventRoutes = require("./routes/eventRoutes");
const materialRoutes = require("./routes/materialRoutes");
const profileRoutes = require("./routes/profileRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");
const aiRoutes = require("./routes/aiRoutes");
const lockRoutes = require("./routes/lockRoutes"); // ✅ NEW for lock system

//dotenv.config();
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ API Routes
app.use("/api/auth", authRoutes);
app.use("/api/feed", feedRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/materials", materialRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/locks", lockRoutes); // ✅ Lock routes

// ✅ Static file serving (uploads)
app.use("/uploads", express.static("uploads"));

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  });

// ✅ Fallback route
app.use((req, res) => {
  res.status(404).json({ message: "API route not found" });
});
