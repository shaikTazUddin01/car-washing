import { Router } from "express";
import { userRouter } from "../modules/User/user.router";
import { serviceRouter } from "../modules/service/service.router";
import { slotRouter } from "../modules/slot/slot.router";
import { bookingRouter } from "../modules/booking/booking.router";

const router = Router();

const moduleRoutes =[
  {
    path: "/auth",
    router: userRouter,
  },
  {
    path: "/services",
    router: serviceRouter,
  },
  {
    path: "/slot",
    router: slotRouter,
  },
  {
    path: "/bookings",
    router: bookingRouter,
  }
]

moduleRoutes.forEach((route) => router.use(route.path, route.router));

export default router;
