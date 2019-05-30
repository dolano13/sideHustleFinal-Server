const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: String,
    password: String,
    businessPlan: {
      type: Schema.Types.ObjectId,
      ref: "Answer"
    },
    todoList: {
      type: [{ type: Schema.Types.ObjectId, ref: "Todo" }]
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
