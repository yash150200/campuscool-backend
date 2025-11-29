// // // server/routes/lockRoutes.js
// // import express from "express";
// // import PageLock from "../models/PageLock.js";

// // const router = express.Router();

// // // you can override via env; default remains "yash"
// // const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "yash";

// // async function ensurePages() {
// //   const pages = ["feed", "events", "materials", "profile", "attendance"];
// //   const existing = await PageLock.find({}).lean();
// //   const have = new Set(existing.map(d => d.page));
// //   const toInsert = pages.filter(p => !have.has(p)).map(p => ({ page: p, locked: false }));
// //   if (toInsert.length) await PageLock.insertMany(toInsert);
// // }

// // // GET all locks
// // router.get("/", async (req, res) => {
// //   try {
// //     await ensurePages();
// //     const docs = await PageLock.find({}).lean();
// //     const out = {};
// //     docs.forEach(d => { out[d.page] = !!d.locked; });
// //     res.json(out);
// //   } catch (e) {
// //     console.error("locks:get", e);
// //     res.status(500).json({ error: "Failed to fetch locks" });
// //   }
// // });

// // // POST set lock/unlock for a page (requires x-admin-pass header)
// // router.post("/:page", async (req, res) => {
// //   try {
// //     const pass = req.header("x-admin-pass");
// //     if (pass !== ADMIN_PASSWORD) return res.status(401).json({ error: "Unauthorized" });

// //     const { page } = req.params;
// //     const { locked } = req.body;

// //     if (!["feed", "events", "materials", "profile", "attendance"].includes(page)) {
// //       return res.status(400).json({ error: "Invalid page" });
// //     }

// //     const doc = await PageLock.findOneAndUpdate(
// //       { page },
// //       { $set: { locked: !!locked } },
// //       { new: true, upsert: true }
// //     ).lean();

// //     res.json({ page: doc.page, locked: !!doc.locked });
// //   } catch (e) {
// //     console.error("locks:post", e);
// //     res.status(500).json({ error: "Failed to update lock" });
// //   }
// // });

// // export default router;
// // server/routes/lockRoutes.js
// const express = require("express");
// const router = express.Router();
// const fs = require("fs");
// const path = require("path");

// // Path to a JSON file that stores lock states
// const lockFile = path.join(__dirname, "../locks.json");

// // Ensure lock file exists
// if (!fs.existsSync(lockFile)) {
//   fs.writeFileSync(
//     lockFile,
//     JSON.stringify({
//       feed: false,
//       events: false,
//       materials: false,
//       profile: false,
//       attendance: false,
//     }, null, 2)
//   );
// }

// // Helper to read locks
// const readLocks = () => {
//   return JSON.parse(fs.readFileSync(lockFile, "utf-8"));
// };

// // Helper to write locks
// const writeLocks = (data) => {
//   fs.writeFileSync(lockFile, JSON.stringify(data, null, 2));
// };

// // ✅ Get all locks
// router.get("/", (req, res) => {
//   const locks = readLocks();
//   res.json(locks);
// });

// // ✅ Toggle a lock
// router.post("/:page", (req, res) => {
//   const { page } = req.params;
//   const { locked } = req.body;

//   const locks = readLocks();

//   if (!(page in locks)) {
//     return res.status(400).json({ msg: "Invalid page" });
//   }

//   locks[page] = locked;
//   writeLocks(locks);

//   res.json({ msg: `Lock updated for ${page}`, locks });
// });

// module.exports = router;
const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

// Path to a JSON file that stores lock states
const lockFile = path.join(__dirname, "../locks.json");

// ✅ Ensure lock file exists with all pages
if (!fs.existsSync(lockFile)) {
  fs.writeFileSync(
    lockFile,
    JSON.stringify(
      {
        feed: false,
        events: false,
        materials: false,
        profile: false,
        attendance: false,
        fees: false,
        result: false,
        "career-choice": false,
        achievements: false,
        timetable: false,
        quiz: false,
      },
      null,
      2
    )
  );
}

// Helper to read locks
const readLocks = () => {
  return JSON.parse(fs.readFileSync(lockFile, "utf-8"));
};

// Helper to write locks
const writeLocks = (data) => {
  fs.writeFileSync(lockFile, JSON.stringify(data, null, 2));
};

// ✅ Get all locks
router.get("/", (req, res) => {
  const locks = readLocks();
  res.json(locks);
});

// ✅ Toggle a lock
router.post("/:page", (req, res) => {
  const { page } = req.params;
  const { locked } = req.body;

  const locks = readLocks();

  if (!(page in locks)) {
    return res.status(400).json({ msg: "Invalid page" });
  }

  locks[page] = locked;
  writeLocks(locks);

  res.json({ msg: `Lock updated for ${page}`, locks });
});

module.exports = router;
