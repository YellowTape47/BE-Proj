import { NextFunction, Request, Response } from "express";
import { Author } from "../models/Author";

export const getAllAuthors = async (req: Request, res: Response) => {
    try {
        const allAuthors = await Author.find().populate("books", "title");
        res.status(200).json({ allAuthors });
    } catch (error) {
        res.status(500).json("Server Error");
    }
};

export const getAuthorById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { authorID } = req.params;
        const foundAuthor = await Author.findById(authorID);
        if (foundAuthor) {
            res.status(200).json(foundAuthor);
        } else {
            res.status(404).json("Author not found");
        }
    } catch (error) {
        next(error);
    }
};

export const createAuthor = async (req: Request, res: Response) => {
    try {
        const { name, country } = req.body;
        const addAuthor = await Author.create({ name, country });
        res.status(201).json(addAuthor);
    } catch (error) {
        res.status(500).json({ message: "Error creating Author" });
    }
};

export const updateAuthor = async (req: Request, res: Response) => {
    try {
        const { authorID } = req.params;
        const { name } = req.body;
        const updateAuthor = await Author.findByIdAndUpdate(authorID, {
            name,
        });
        res.status(200).json(updateAuthor);
    } catch (error) {
        res.status(500).json({ message: "Error updating Author" });
    }
};

export const deleteAuthor = async (req: Request, res: Response) => {
    try {
        const { authorID } = req.params;
        await Author.findByIdAndDelete(authorID);
        res.status(200).json({ message: "Author deleted" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting Author" });
    }
};
