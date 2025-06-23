import express from "express";
import authorRouter from "./routes/author.routes";
const app = express();

app.use(express.json());

app.use("/Author", authorRouter);

export default app;
