import express, { Request, Response } from "express";
import cors from "cors";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";
import router from "./app/routes";
import notFound from "./app/middlewares/notFound";
// import notFound from './app/middlewares/';

const app = express();

//api middleware
app.use(express.json());
app.use(cors({origin:['http://localhost:5173','https://carwashing-service.netlify.app'],credentials:true}));
//create api route
app.use("/api", router);
//global error handle
app.use(globalErrorHandler);
app.use(notFound)

app.get("/", (req: Request, res: Response) => {
  res.send("server is connecting");
});


export default app;
