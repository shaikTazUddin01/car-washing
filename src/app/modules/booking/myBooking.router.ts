import { Router } from "express";
import { bookingController } from "./booking.controller";
import { auth } from "../../middlewares/auth";

const router = Router();

router.get("/",auth('user'), bookingController.getMyBooking);

export const myBookingRouter = router;