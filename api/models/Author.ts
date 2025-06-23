import { Schema, model } from "mongoose";

const authorSchema = new Schema({
  name: { type: String, required: true, unique: true },
  country: { type: String, required: true },
  books: { type: Schema.Types.ObjectId, ref: "Books" },
});

export const Author = model("Author", authorSchema);
