import { Schema, model } from "mongoose";

const bookSchema = new Schema({
  title: { type: String, required: true, unique: true },
  author: { type: Schema.Types.ObjectId, ref: "Author", required: true },
  categories: { type: Schema.Types.ObjectId, ref: "Category" },
});

export const Book = model("Book", bookSchema);
