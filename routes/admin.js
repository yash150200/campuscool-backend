
// //  const express = require("express");
// //  const Log = require("../models/Log");
// //  const router = express.Router();

// //  // Helper: add new log
// //  const addLog = async (message) => {
// //    try {
// //      const log = new Log({ message });
// //      await log.save();
// //    } catch (err) {
// //      console.error("Failed to save log:", err.message);
// //    }
// //  };

// // // // GET /api/admin/logs → latest 50 logs
// //  router.get("/logs", async (req, res) => {
// //    try {
// //      const logs = await Log.find().sort({ time: -1 }).limit(50);
// //      res.json(
// //        logs.map((log) => ({
// //          message: log.message,
// //          time: new Date(log.time).toLocaleString()
// //        }))
// //      );
// //    } catch (err) {
// //      res.status(500).json({ msg: "Failed to fetch logs" });
// //    }
// //  });

// //  module.exports = { router, addLog };
// const express = require("express");
// const Log = require("../models/Log");
// const router = express.Router();

// // ✅ Helper: add new log entry
// const addLog = async (message) => {
//   try {
//     console.log("🟢 Adding log:", message); // Debug
//     const log = new Log({ message });
//     await log.save();
//   } catch (err) {
//     console.error("❌ Failed to save log:", err.message);
//   }
// };

// // ✅ GET /api/admin/logs → fetch latest 50 logs
// router.get("/logs", async (req, res) => {
//   try {
//     const logs = await Log.find().sort({ time: -1 }).limit(50);
//     res.json(
//       logs.map((log) => ({
//         _id: log._id,
//         message: log.message,
//         time: new Date(log.time).toLocaleString(),
//       }))
//     );
//   } catch (err) {
//     console.error("❌ Error fetching logs:", err.message);
//     res.status(500).json({ msg: "Failed to fetch logs" });
//   }
// });

// // ✅ DELETE /api/admin/logs/:id → delete single log
// router.delete("/logs/:id", async (req, res) => {
//   try {
//     await Log.findByIdAndDelete(req.params.id);
//     res.json({ msg: "Log deleted successfully" });
//   } catch (err) {
//     console.error("❌ Delete log error:", err.message);
//     res.status(500).json({ msg: "Failed to delete log" });
//   }
// });

// // ✅ DELETE /api/admin/logs → delete all logs
// router.delete("/logs", async (req, res) => {
//   try {
//     await Log.deleteMany({});
//     res.json({ msg: "All logs cleared successfully" });
//   } catch (err) {
//     console.error("❌ Clear logs error:", err.message);
//     res.status(500).json({ msg: "Failed to clear logs" });
//   }
// });

// // ✅ Export both router and helper
// module.exports = router;
// module.exports.addLog = addLog;
const express = require("express");
const Log = require("../models/Log");
const router = express.Router();

// ✅ Helper: add new log entry
const addLog = async (message) => {
  try {
    console.log("🟢 Adding log:", message);
    const log = new Log({ message });
    await log.save();
  } catch (err) {
    console.error("❌ Failed to save log:", err.message);
  }
};

// ✅ GET /api/admin/logs → fetch latest 50 logs
router.get("/logs", async (req, res) => {
  try {
    const logs = await Log.find().sort({ time: -1 }).limit(50);
    res.json(
      logs.map((log) => ({
        _id: log._id,
        message: log.message,
        time: new Date(log.time).toLocaleString(),
      }))
    );
  } catch (err) {
    console.error("❌ Error fetching logs:", err.message);
    res.status(500).json({ msg: "Failed to fetch logs" });
  }
});

// ✅ DELETE /api/admin/logs/:id → delete single log
router.delete("/logs/:id", async (req, res) => {
  try {
    await Log.findByIdAndDelete(req.params.id);
    res.json({ msg: "Log deleted successfully" });
  } catch (err) {
    console.error("❌ Delete log error:", err.message);
    res.status(500).json({ msg: "Failed to delete log" });
  }
});

// ✅ DELETE /api/admin/logs → delete all logs
router.delete("/logs", async (req, res) => {
  try {
    await Log.deleteMany({});
    res.json({ msg: "All logs cleared successfully" });
  } catch (err) {
    console.error("❌ Clear logs error:", err.message);
    res.status(500).json({ msg: "Failed to clear logs" });
  }
});

// ✅ Export router + helper
module.exports = router;
module.exports.addLog = addLog;
