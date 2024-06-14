"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceRouter = void 0;
const express_1 = __importDefault(require("express"));
const services_controller_1 = require("./services.controller");
const auth_1 = require("../../middlewares/auth");
const router = express_1.default.Router();
router.post("/", (0, auth_1.auth)('admin'), services_controller_1.serviceController.createService);
router.get("/", services_controller_1.serviceController.getAllService);
router.get("/:id", services_controller_1.serviceController.getSingleService);
router.put("/:id", (0, auth_1.auth)('admin'), services_controller_1.serviceController.updateService);
router.delete("/:id", (0, auth_1.auth)('admin'), services_controller_1.serviceController.deleteService);
//service slots
router.post("/slots", (0, auth_1.auth)('admin'), services_controller_1.serviceController.createSlot);
exports.serviceRouter = router;
