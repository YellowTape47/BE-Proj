import { NextFunction, Request, Response } from "express";
import { Category } from "../models/Category";

export const getAllCategories = async (req: Request, res: Response) => {
    try {
        const allCategories = await Category.find();
        res.status(200).json({ allCategories });
    } catch (error) {
        res.status(500).json("Server Error");
    }
};

export const getCategoryById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { categoryID } = req.params;
        const foundCategory = await Category.findById(categoryID);
        if (foundCategory) {
            res.status(200).json(foundCategory);
        } else {
            res.status(404).json("Category not found");
        }
    } catch (error) {
        next(error);
    }
};

export const createCategory = async (req: Request, res: Response) => {
    try {
        const { name, books } = req.body;
        const addCategory = await Category.create({ name, books });
        res.status(201).json(addCategory);
    } catch (error) {
        res.status(500).json({ message: "Error creating Category" });
    }
};

export const updateCategory = async (req: Request, res: Response) => {
    try {
        const { categoryID } = req.params;
        const { name } = req.body;
        const updateCategory = await Category.findByIdAndUpdate(categoryID, {
            name,
        });
        res.status(200).json(updateCategory);
    } catch (error) {
        res.status(500).json({ message: "Error updating Category" });
    }
};

export const deleteCategory = async (req: Request, res: Response) => {
    try {
        const { categoryID } = req.params;
        await Category.findByIdAndDelete(categoryID);
        res.status(200).json({ message: "Category deleted" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting Category" });
    }
};
