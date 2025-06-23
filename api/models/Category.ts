import { Schema, model } from "mongoose";

const categorySchema = new Schema({
  name: { type: String, required: true, unique: true },
  books: { type: Schema.Types.ObjectId, ref: "Books" },
});

export const Category = model("Category", categorySchema);
