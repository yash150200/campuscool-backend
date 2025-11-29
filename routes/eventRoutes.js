// // // // const express = require("express");
// // // // const Event = require("../models/Event");
// // // // const auth = require("../middleware/authMiddleware");

// // // // const router = express.Router();

// // // // // Add Event
// // // // router.post("/", auth, async (req, res) => {
// // // //   try {
// // // //     const { title, date, location } = req.body;
// // // //     const event = new Event({
// // // //       title,
// // // //       date,
// // // //       location,
// // // //       createdBy: req.user.id, // from auth middleware
// // // //     });
// // // //     await event.save();
// // // //     res.json(event);
// // // //   } catch (err) {
// // // //     res.status(500).json({ msg: "Failed to add event" });
// // // //   }
// // // // });

// // // // // Get All Events
// // // // router.get("/", async (req, res) => {
// // // //   try {
// // // //     const events = await Event.find().sort({ date: 1 });
// // // //     res.json(events);
// // // //   } catch (err) {
// // // //     res.status(500).json({ msg: "Failed to fetch events" });
// // // //   }
// // // // });

// // // // // ✅ Delete Event
// // // // router.delete("/:id", auth, async (req, res) => {
// // // //   try {
// // // //     const event = await Event.findById(req.params.id);
// // // //     if (!event) {
// // // //       return res.status(404).json({ msg: "Event not found" });
// // // //     }

// // // //     // Optional: Allow only creator to delete their event
// // // //     if (event.createdBy.toString() !== req.user.id) {
// // // //       return res.status(403).json({ msg: "Not authorized to delete this event" });
// // // //     }

// // // //     await Event.findByIdAndDelete(req.params.id);
// // // //     res.json({ msg: "Event deleted successfully" });
// // // //   } catch (err) {
// // // //     res.status(500).json({ msg: "Failed to delete event" });
// // // //   }
// // // // });

// // // // module.exports = router;
// // // const express = require("express");
// // // const Event = require("../models/Event");
// // // const auth = require("../middleware/authMiddleware");
// // // const { addLog } = require("./admin");

// // // const router = express.Router();

// // // // Add Event
// // // router.post("/", auth, async (req, res) => {
// // //   try {
// // //     const { title, date, location } = req.body;
// // //     const event = new Event({
// // //       title,
// // //       date,
// // //       location,
// // //       createdBy: req.user.id,
// // //     });
// // //     await event.save();

// // //     addLog(`${req.user.name || req.user.id} added event: ${title}`);

// // //     res.json(event);
// // //   } catch (err) {
// // //     res.status(500).json({ msg: "Failed to add event" });
// // //   }
// // // });

// // // // Get All Events
// // // router.get("/", async (req, res) => {
// // //   try {
// // //     const events = await Event.find().sort({ date: 1 });

// // //     addLog(`Events list fetched`);

// // //     res.json(events);
// // //   } catch (err) {
// // //     res.status(500).json({ msg: "Failed to fetch events" });
// // //   }
// // // });

// // // // Delete Event
// // // router.delete("/:id", auth, async (req, res) => {
// // //   try {
// // //     const event = await Event.findById(req.params.id);
// // //     if (!event) return res.status(404).json({ msg: "Event not found" });

// // //     if (event.createdBy.toString() !== req.user.id) {
// // //       return res.status(403).json({ msg: "Not authorized to delete this event" });
// // //     }

// // //     await Event.findByIdAndDelete(req.params.id);

// // //     addLog(`${req.user.name || req.user.id} deleted event: ${event.title}`);

// // //     res.json({ msg: "Event deleted successfully" });
// // //   } catch (err) {
// // //     res.status(500).json({ msg: "Failed to delete event" });
// // //   }
// // // });

// // // module.exports = router;
// // const express = require("express");
// // const router = express.Router();
// // const Event = require("../models/Event");
// // const auth = require("../middleware/authMiddleware");

// // // Import addLog from admin.js
// // const { addLog } = require("./admin");

// // // GET all events
// // router.get("/", auth, async (req, res) => {
// //   try {
// //     const events = await Event.find().populate("createdBy", "name email").sort({ date: 1 });
// //     res.json(events);
// //   } catch (err) {
// //     res.status(500).json({ error: "Failed to fetch events" });
// //   }
// // });

// // // CREATE new event
// // router.post("/", auth, async (req, res) => {
// //   try {
// //     const newEvent = new Event({
// //       title: req.body.title,
// //       date: req.body.date,
// //       location: req.body.location,
// //       createdBy: req.user.id,
// //     });
// //     await newEvent.save();

// //     // Log this action
// //     addLog(`📅 Event "${req.body.title}" created by ${req.user.email}`);

// //     res.json(newEvent);
// //   } catch (err) {
// //     res.status(500).json({ error: "Failed to create event" });
// //   }
// // });

// // // DELETE event
// // router.delete("/:id", auth, async (req, res) => {
// //   try {
// //     const event = await Event.findById(req.params.id);
// //     if (!event) return res.status(404).json({ error: "Event not found" });

// //     if (event.createdBy.toString() !== req.user.id) {
// //       return res.status(403).json({ error: "Not authorized" });
// //     }

// //     await event.deleteOne();

// //     // Log this action
// //     addLog(`❌ Event "${event.title}" deleted by ${req.user.email}`);

// //     res.json({ message: "Event deleted" });
// //   } catch (err) {
// //     res.status(500).json({ error: "Failed to delete event" });
// //   }
// // });

// // module.exports = router;
// const express = require("express");
// const Event = require("../models/Event");
// //const { addLog } = require("./admin.js");   // ✅ Import addLog
// const { addLog } = require("./admin");   // ✅ Correct path

// const auth = require("../middleware/auth");
// const router = express.Router();

// // Create new event
// router.post("/", auth, async (req, res) => {
//   try {
//     const { title, date, location } = req.body;
//     const newEvent = new Event({ title, date, location, createdBy: req.user.id });
//     await newEvent.save();

//     await addLog(`📅 User ${req.user.email} created event: ${title}`);

//     res.json(newEvent);
//   } catch (err) {
//     res.status(500).json({ msg: "Failed to create event" });
//   }
// });

// // Get all events
// router.get("/", auth, async (req, res) => {
//   try {
//     const events = await Event.find().populate("createdBy", "email").sort({ date: 1 });
//     res.json(events);
//   } catch (err) {
//     res.status(500).json({ msg: "Failed to fetch events" });
//   }
// });

// module.exports = router;
const express = require("express");
const Event = require("../models/Event");
const { addLog } = require("./admin"); // ✅ Import addLog
const { authMiddleware } = require("../middleware/authMiddleware"); // ✅ Correct auth import

const router = express.Router();

// CREATE new event
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { title, date, location } = req.body;
    const newEvent = new Event({
      title,
      date,
      location,
      createdBy: req.user.id,
    });
    await newEvent.save();

    await addLog(`📅 User ${req.user.email || req.user.id} created event: ${title}`);

    res.json(newEvent);
  } catch (err) {
    console.error("Error creating event:", err);
    res.status(500).json({ msg: "Failed to create event" });
  }
});

// GET all events
router.get("/", authMiddleware, async (req, res) => {
  try {
    const events = await Event.find()
      .populate("createdBy", "name email")
      .sort({ date: 1 });
    res.json(events);
  } catch (err) {
    console.error("Error fetching events:", err);
    res.status(500).json({ msg: "Failed to fetch events" });
  }
});

// DELETE an event (optional: only creator can delete)
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ msg: "Event not found" });

    if (event.createdBy.toString() !== req.user.id) {
      return res.status(403).json({ msg: "Not authorized to delete this event" });
    }

    await event.deleteOne();

    await addLog(`❌ User ${req.user.email || req.user.id} deleted event: ${event.title}`);

    res.json({ msg: "Event deleted successfully" });
  } catch (err) {
    console.error("Error deleting event:", err);
    res.status(500).json({ msg: "Failed to delete event" });
  }
});

module.exports = router;
