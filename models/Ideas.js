const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ideaSchema = new Schema(
  {
    ideas: String,
    desc: String,
    url: String
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  }
);

const ideas = mongoose.model("ideas", ideaSchema);

module.exports = ideas;
