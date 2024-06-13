import express from "express";
import { serviceController } from "./services.controller";

const router = express.Router();

router.post("/", serviceController.createService);
router.get("/", serviceController.getAllService);
router.get("/:id", serviceController.getSingleService);
router.patch("/:id", serviceController.updateService);
router.delete("/:id", serviceController.deleteService);

//service slots
router.post("/slots", serviceController.createSlot);

export const serviceRouter = router;
