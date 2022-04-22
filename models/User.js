const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true, maxLength: 100 },
  password: { type: String, required: true, maxLength: 100 },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", UserSchema);
