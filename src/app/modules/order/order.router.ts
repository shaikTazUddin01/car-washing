import { Router } from "express";

import { auth } from "../../middlewares/auth";
import { orderController } from "./order.controller";


const router = Router();

router.post(
  "/create",
  auth("user"),
  orderController.createOrder
);


export const orderRouter = router;
