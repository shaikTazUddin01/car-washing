import { Router } from "express";
import { userRouter } from "../modules/User/user.router";
import { serviceRouter } from "../modules/service/service.router";
import { slotRouter } from "../modules/slot/slot.router";

const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: userRouter,
  },
  {
    path: "/services",
    route: serviceRouter,
  },,
  {
    path: "/slot",
    route: slotRouter,
  }
];

moduleRoutes.forEach((route) => router.use(route?.path, route?.route));

export default router;
