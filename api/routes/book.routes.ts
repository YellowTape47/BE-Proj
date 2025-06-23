import express from "express";
import { createBook, deleteBook, getAllBooks, getBooksById, updateBook } from "../controllers/book.controller";

const router = express.Router();

router.route("/").get(getAllBooks).post(createBook);
router.route("/:bookID").get(getBooksById).put(updateBook).delete(deleteBook);

export default router;
