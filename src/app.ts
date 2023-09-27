import express, { NextFunction, Request, Response } from "express";
import recipesRoutes from "./routes/recipesRouter";

const app = express();

app.use(express.json());

app.use("/api/recipes", recipesRoutes);

app.use((req, res, next) => {
  next(Error("Endpoint not found"));
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  let errorMessage = "An unexpected error occurred.";
  if (error instanceof Error) errorMessage = error.message;
  res.status(500).json({ error: errorMessage });
});
export default app;
