import { Request, Response, NextFunction } from "express";
import { Book } from "../models/Book";
import { Author } from "../models/Author";
import { Category } from "../models/Category";

export const getAllBooks = async (req: Request, res: Response) => {
    try {
        const allBooks = await Book.find().populate("author", "name").populate("categories", "name");
        res.status(200).json(allBooks);
    } catch (error) {
        res.status(500).json("Server Error");
    }
};

export const getBooksById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { bookID } = req.params;
        const foundBook = await Book.findById(bookID).populate("Author", "name").populate("Category", "name");
        if (foundBook) {
            res.status(200).json(foundBook);
        } else {
            res.status(404).json("Book not found");
        }
    } catch (error) {
        next(error);
    }
};

export const createBook = async (req: Request, res: Response) => {
    try {
        const { title, authorID, categoryID, image } = req.body;
        let imagePath;
        if (req.file) {
            imagePath = req.file.path;
        }
        const addBook = await Book.create({ title, author: authorID, categories: [categoryID], image: imagePath });
        await Author.findByIdAndUpdate(authorID, { $push: { books: addBook._id } });
        await Category.findByIdAndUpdate(categoryID, { $push: { books: addBook._id } });
        res.status(201).json(addBook);
    } catch (error) {
        res.status(500).json("Error creating Book");
    }
};

export const updateBook = async (req: Request, res: Response) => {
    try {
        const { bookID } = req.params;
        const { title, authorID, categoryID } = req.body;
        const updateBook = await Book.findByIdAndUpdate(bookID, { title, author: authorID, categories: [categoryID] });
        await Author.findByIdAndUpdate(authorID, { $push: { books: bookID } });
        await Category.findByIdAndUpdate(categoryID, { $push: { books: bookID } });
        res.status(200).json(updateBook);
    } catch (error) {
        res.status(500).json({ message: "Error updating Book" });
    }
};

export const deleteBook = async (req: Request, res: Response) => {
    try {
        const { bookID } = req.params;
        await Book.findByIdAndDelete(bookID);
        res.status(200).json({ message: "Book deleted" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting Book" });
    }
};
