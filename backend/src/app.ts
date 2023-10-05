import express, { NextFunction, Request, Response } from "express";
import recipesRoutes from "./routes/recipesRouter";
import morgan from "morgan";
import createHttpError, { isHttpError } from "http-errors";
import userRouter from "./routes/userRouter";

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use("/api/recipes", recipesRoutes);

app.use("/api/users", userRouter);

app.use((req, res, next) => {
  next(createHttpError(404, "Endpoint not found"));
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  let errorMessage = "An unexpected error occurred.";
  let statusCode = 500;

  if (isHttpError(error)) {
    errorMessage = error.message;
    statusCode = error.status;
  }
  res.status(statusCode).json({ error: errorMessage });
});
export default app;
