import express from "express";
import { createCategory, deleteCategory, getAllCategories, getCategoryById, updateCategory } from "../controllers/category.controller";

const router = express.Router();

router.route("/").get(getAllCategories).post(createCategory);
router.route("/:categoryID").get(getCategoryById).put(updateCategory).delete(deleteCategory);

export default router;
