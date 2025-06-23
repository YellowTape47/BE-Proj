import express from "express";
import authorRouter from "./routes/author.routes";
import categoryRouter from "./routes/category.routes";

const app = express();

app.use(express.json());

app.use("/Author", authorRouter);
app.use("/Category", categoryRouter);

export default app;
