import express, { Request, Response } from "express";
import cors from "cors";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";
import router from "./app/routes";

const app = express();

//api middleware
app.use(express.json());
app.use(cors());
//create api route
app.use("/api", router);
//global error handle
app.use(globalErrorHandler);

app.get("/", (req: Request, res: Response) => {
  res.send("server is connecting");
});

export default app;
