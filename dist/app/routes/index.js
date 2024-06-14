"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const service_router_1 = require("../modules/service/service.router");
const slot_router_1 = require("../modules/slot/slot.router");
const booking_router_1 = require("../modules/booking/booking.router");
const auth_router_1 = require("../modules/Auth/auth.router");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/auth",
        router: auth_router_1.authRouter,
    },
    {
        path: "/services",
        router: service_router_1.serviceRouter,
    },
    {
        path: "/slot",
        router: slot_router_1.slotRouter,
    },
    {
        path: "/bookings",
        router: booking_router_1.bookingRouter,
    }
];
moduleRoutes.forEach((route) => router.use(route.path, route.router));
exports.default = router;
