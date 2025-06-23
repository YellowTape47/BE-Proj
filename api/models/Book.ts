import { Schema, model } from "mongoose";

const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "Author", required: true },
    categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
    image: { type: String },
});

export const Book = model("Book", bookSchema);
