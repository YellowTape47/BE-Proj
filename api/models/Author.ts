import { Schema, model } from "mongoose";

const authorSchema = new Schema({
    name: { type: String, required: true, unique: true },
    country: { type: String, required: true },
    books: { type: Schema.Types.ObjectId, ref: "Book" },
});

export const Author = model("Author", authorSchema);
