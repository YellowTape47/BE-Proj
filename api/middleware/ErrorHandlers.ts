import { NextFunction, Request, Response } from "express";

//500
export const ServerError = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.log(err.stack);
    res.status(err.status || 500).send(`500 - Something broke ${err}`);
};
//404

export const NotFound = (req: Request, res: Response, next: NextFunction) => {
    res.status(404).json(`404 - ${req.path} NOT FOUND`);
};
