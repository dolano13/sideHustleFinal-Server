const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    desc: String,
    date: Date,
    priority: { possibleValues: ["Low", "Medium", "High"] },
    completed: Boolean
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  }
);

const tdList = mongoose.model("Todo", todoSchema);

module.exports = tdList;
