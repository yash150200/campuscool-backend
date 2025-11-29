
// // const express = require("express");
// // const router = express.Router();
// // const Attendance = require("../models/Attendance");
// // const auth = require("../middleware/authMiddleware");

// // // Import addLog from admin.js
// // const { addLog } = require("./admin");

// // // GET all attendance records
// // router.get("/", auth, async (req, res) => {
// //   try {
// //     const records = await Attendance.find().populate("student", "name email").sort({ date: -1 });
// //     res.json(records);
// //   } catch (err) {
// //     res.status(500).json({ error: "Failed to fetch attendance records" });
// //   }
// // });

// // // MARK attendance
// // router.post("/mark", auth, async (req, res) => {
// //   try {
// //     const newRecord = new Attendance({
// //       student: req.body.student,
// //       date: new Date(),
// //       status: req.body.status,
// //     });
// //     await newRecord.save();

// //     // Log this action
// //     addLog(`✅ Attendance marked for ${req.body.student} by ${req.user.email}`);

// //     res.json(newRecord);
// //   } catch (err) {
// //     res.status(500).json({ error: "Failed to mark attendance" });
// //   }
// // });

// // // DELETE attendance record
// // router.delete("/:id", auth, async (req, res) => {
// //   try {
// //     const record = await Attendance.findById(req.params.id);
// //     if (!record) return res.status(404).json({ error: "Record not found" });

// //     await record.deleteOne();

// //     // Log this action
// //     addLog(`❌ Attendance record deleted by ${req.user.email}`);

// //     res.json({ message: "Attendance record deleted" });
// //   } catch (err) {
// //     res.status(500).json({ error: "Failed to delete attendance record" });
// //   }
// // });

// // module.exports = router;

// const express = require("express");
// const Attendance = require("../models/Attendance");
// //const { addLog } = require("./admin.js");   // ✅ Import addLog
// const { addLog } = require("./admin");   // ✅ Correct path

// const auth = require("../middleware/auth");
// const router = express.Router();

// // Mark attendance
// router.post("/mark", auth, async (req, res) => {
//   try {
//     const attendance = new Attendance({ user: req.user.id, date: new Date() });
//     await attendance.save();

//     await addLog(`✅ User ${req.user.email} marked attendance`);

//     res.json(attendance);
//   } catch (err) {
//     res.status(500).json({ msg: "Failed to mark attendance" });
//   }
// });

// // Get attendance records
// router.get("/", auth, async (req, res) => {
//   try {
//     const records = await Attendance.find().populate("user", "email").sort({ date: -1 });
//     res.json(records);
//   } catch (err) {
//     res.status(500).json({ msg: "Failed to fetch attendance records" });
//   }
// });

// module.exports = router;




const express = require("express");
const Attendance = require("../models/Attendance");
const { addLog } = require("./admin"); // ✅ Correct path
const { authMiddleware } = require("../middleware/authMiddleware"); // ✅ Correct import

const router = express.Router();

// MARK attendance
router.post("/mark", authMiddleware, async (req, res) => {
  try {
    const attendance = new Attendance({
      user: req.user.id,
      date: new Date(),
      status: req.body.status, // optional: include status if needed
    });
    await attendance.save();

    await addLog(`✅ User ${req.user.email || req.user.id} marked attendance`);

    res.json(attendance);
  } catch (err) {
    console.error("Attendance mark error:", err);
    res.status(500).json({ msg: "Failed to mark attendance" });
  }
});

// GET attendance records
router.get("/", authMiddleware, async (req, res) => {
  try {
    const records = await Attendance.find()
      .populate("user", "name email")
      .sort({ date: -1 });

    await addLog(`📊 User ${req.user.email || req.user.id} fetched attendance records`);

    res.json(records);
  } catch (err) {
    console.error("Fetch attendance error:", err);
    res.status(500).json({ msg: "Failed to fetch attendance records" });
  }
});

module.exports = router;
