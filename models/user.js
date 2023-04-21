const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: { type: String },
  last_name: { type: String },
  email: { type: String },
  phone: { type: Number  },
 
//   isBan: { type: Boolean, default: false },
//   role: {
//     type: String,
//     enum: ["client", "admin", "sitter"],
//     default: "client",
//   },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
