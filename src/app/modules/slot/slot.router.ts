import express from "express";
import { slotController } from "./slot.controlle";
import { auth } from "../../middlewares/auth";

const router = express.Router();

router.get("/availability", slotController.getSlot);
router.put("/updateSlot/:id",auth('admin'), slotController.updateSlot);

export const slotRouter = router;
