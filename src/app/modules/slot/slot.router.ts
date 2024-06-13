import express from "express";
import { slotController } from "./slot.controlle";

const router = express.Router();

router.get("/availability", slotController.getSlot);

export const slotRouter = router;
