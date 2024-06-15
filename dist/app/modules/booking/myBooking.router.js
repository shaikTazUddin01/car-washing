"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myBookingRouter = void 0;
const express_1 = require("express");
const booking_controller_1 = require("./booking.controller");
const auth_1 = require("../../middlewares/auth");
const router = (0, express_1.Router)();
router.get("/", (0, auth_1.auth)('user'), booking_controller_1.bookingController.getMyBooking);
exports.myBookingRouter = router;
