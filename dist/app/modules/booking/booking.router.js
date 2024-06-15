"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingRouter = void 0;
const express_1 = require("express");
const booking_controller_1 = require("./booking.controller");
const auth_1 = require("../../middlewares/auth");
const validationRequest_1 = __importDefault(require("../../middlewares/validationRequest"));
const bookingValidation_1 = require("./bookingValidation");
const router = (0, express_1.Router)();
router.post("/", (0, validationRequest_1.default)(bookingValidation_1.bookingValidation.bookingValidationSchema), (0, auth_1.auth)("user"), booking_controller_1.bookingController.createBooking);
router.get("/", (0, auth_1.auth)("admin"), booking_controller_1.bookingController.getBooking);
router.get("/my-bookings", (0, auth_1.auth)("user"), booking_controller_1.bookingController.getMyBooking);
exports.bookingRouter = router;
