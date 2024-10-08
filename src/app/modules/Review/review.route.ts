import { Router } from "express";

import { auth } from "../../middlewares/auth";
import { reviewController } from "./review.controller";

const router = Router();

router.post("/create", auth("user"), reviewController.createReview);
router.get("/allReviews", reviewController.getAllReview);

export const reviewRouter = router;
