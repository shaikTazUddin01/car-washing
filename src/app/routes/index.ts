import { Router } from "express";
import { userRouter } from "../modules/User/user.router";
import { serviceRouter } from "../modules/service/service.router";

const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: userRouter,
  },
  {
    path: "/services",
    route: serviceRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route?.path, route?.route));

export default router;
