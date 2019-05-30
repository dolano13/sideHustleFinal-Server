const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bizSchema = new Schema(
  {
    pt1a: String,
    pt1b: String,
    pt1c: String,
    pt2a: String,
    pt2b: String,
    pt2c: String,
    pt2d: String,
    pt3a: String,
    pt3b: String,
    pt3c: String,
    pt4a: String,
    pt4b: String,
    pt4c: String,
    pt5a: String,
    pt5b: String,
    pt5c: String,
    pt5d: String
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  }
);

const bizPlan = mongoose.model("Answer", bizSchema);

module.exports = bizPlan;
