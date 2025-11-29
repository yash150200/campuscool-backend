// const mongoose = require("mongoose");

// const attendanceSchema = new mongoose.Schema({
//   studentId: { type: String, required: true },
//   className: { type: String, required: true },
//   department: { type: String, required: true },
//   date: { type: Date, default: Date.now },
//   present: { type: Boolean, required: true }
// });

// module.exports = mongoose.model("Attendance", attendanceSchema);
const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  present: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Attendance", attendanceSchema);
