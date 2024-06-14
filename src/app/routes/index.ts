import { Router } from "express";

import { serviceRouter } from "../modules/service/service.router";
import { slotRouter } from "../modules/slot/slot.router";
import { bookingRouter } from "../modules/booking/booking.router";
import { authRouter } from "../modules/Auth/auth.router";
import { myBookingRouter } from "../modules/booking/myBooking.router";

const router = Router();

const moduleRoutes =[
  {
    path: "/auth",
    router: authRouter,
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
  },
  {
    path: "/my-bookings",
    router: myBookingRouter,
  }
]

moduleRoutes.forEach((route) => router.use(route.path, route.router));

export default router;
