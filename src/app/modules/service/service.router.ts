import express from "express";
import { serviceController } from "./services.controller";
import { auth } from "../../middlewares/auth";

const router = express.Router();

router.post("/",auth('admin'), serviceController.createService);
router.get("/", serviceController.getAllService);
router.get("/:id", serviceController.getSingleService);
router.patch("/:id",auth('admin'), serviceController.updateService);
router.delete("/:id",auth('admin'), serviceController.deleteService);

//service slots
router.post("/slots", serviceController.createSlot);

export const serviceRouter = router;
