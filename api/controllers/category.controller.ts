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
