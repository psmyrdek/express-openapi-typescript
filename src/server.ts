import "reflect-metadata";
import express, {Request, Response, NextFunction} from "express";
import userRoutes from "./routes/user-routes";

const app = express();
const port = process.env.PORT || 3000;

app.use("/users", userRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({error: "Something went wrong!"});
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
