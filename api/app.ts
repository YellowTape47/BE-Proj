import express from "express";
import authorRouter from "./routes/author.routes";
import categoryRouter from "./routes/category.routes";
import bookRouter from "./routes/book.routes";
import morgan from "morgan";
import cors from "cors";
import { NotFound, ServerError } from "./middleware/ErrorHandlers";
const app = express();

app.use(express.json());
app.use(morgan("dev")); // Defines Mogran Log Level
app.use(cors()); // Enables CORS in the app

app.use("/Author", authorRouter);
app.use("/Category", categoryRouter);
app.use("/Books", bookRouter);
//404 Handler
app.use(NotFound);

//500 Handler
app.use(ServerError);

export default app;
