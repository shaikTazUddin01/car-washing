import { Router } from "express";
import { bookingController } from "./bookng.controller";

const router = Router();

router.post("/", bookingController.createBooking);
router.get("/", bookingController.getBooking);

export const bookingRouter = router;
