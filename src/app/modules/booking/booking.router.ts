import { Router } from "express";
import { bookingController } from "./booking.controller";
import { auth } from "../../middlewares/auth";
import validateRequest from "../../middlewares/validationRequest";
import { bookingValidation } from "./bookingValidation";

const router = Router();

router.post(
  "/",
  validateRequest(bookingValidation.bookingValidationSchema),
  auth("user"),
  bookingController.createBooking
);
router.get("/", auth("admin"), bookingController.getBooking);
router.get("/my-bookings", auth("user"), bookingController.getMyBooking);

export const bookingRouter = router;
