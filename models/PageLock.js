// server/models/PageLock.js
import mongoose from "mongoose";

const PageLockSchema = new mongoose.Schema(
  {
    page: {
      type: String,
      required: true,
      unique: true,
      enum: ["feed", "events", "materials", "profile", "attendance"],
    },
    locked: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("PageLock", PageLockSchema);
