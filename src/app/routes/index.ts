import { Router } from "express";

import { serviceRouter } from "../modules/service/service.router";
import { slotRouter } from "../modules/slot/slot.router";
import { bookingRouter } from "../modules/booking/booking.router";
import { authRouter } from "../modules/Auth/auth.router";
import { myBookingRouter } from "../modules/booking/myBooking.router";
import { orderRouter } from "../modules/order/order.router";
import { paymentRouter } from "../modules/payment/payment.route";

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
    path: "/slots",
    router: slotRouter,
  },
  {
    path: "/bookings",
    router: bookingRouter,
  },
  {
    path: "/my-bookings",
    router: myBookingRouter,
  },
  {
    path: "/order",
    router: orderRouter,
  },
  {
    path: "/payment",
    router: paymentRouter,
  }
]

moduleRoutes.forEach((route) => router.use(route.path, route.router));

export default router;
