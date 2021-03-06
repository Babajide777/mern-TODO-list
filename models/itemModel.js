const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const ItemSchema = new Schema({
  name: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = Item = mongoose.model("Item", ItemSchema);
