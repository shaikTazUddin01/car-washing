"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.slotRouter = void 0;
const express_1 = __importDefault(require("express"));
const slot_controlle_1 = require("./slot.controlle");
const router = express_1.default.Router();
router.get("/availability", slot_controlle_1.slotController.getSlot);
exports.slotRouter = router;
