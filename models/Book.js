const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const defaultImageURL =
  "https://www.spl.org/Seattle-Public-Library/images/books-media/default-list-icons/default-book-icon.png";

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
