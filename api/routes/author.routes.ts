import express from "express";
import { createAuthor, deleteAuthor, getAllAuthors, getAuthorById, updateAuthor } from "../controllers/author.controller";

const router = express.Router();

router.route("/").get(getAllAuthors).post(createAuthor);
router.route("/:authorID").get(getAuthorById).put(updateAuthor).delete(deleteAuthor);

export default router;
