const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const defaultImageURL =
  "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";

const BookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: Schema.ObjectId, ref: "Author", required: true },
  summary: { type: String, required: true },
  isbn: { type: String, required: true },
  genre: [{ type: Schema.ObjectId, ref: "Genre" }],
  image: { type: String, required: false, default: defaultImageURL },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

BookSchema.virtual("url").get(function () {
  return "/books/" + this._id;
});

BookSchema.index({'$**': 'text'});

module.exports = mongoose.model("Book", BookSchema);
