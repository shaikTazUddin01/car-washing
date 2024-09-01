"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const service_router_1 = require("../modules/service/service.router");
const slot_router_1 = require("../modules/slot/slot.router");
const booking_router_1 = require("../modules/booking/booking.router");
const auth_router_1 = require("../modules/Auth/auth.router");
const myBooking_router_1 = require("../modules/booking/myBooking.router");
const order_router_1 = require("../modules/order/order.router");
const payment_route_1 = require("../modules/payment/payment.route");
const review_route_1 = require("../modules/Review/review.route");
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
        path: "/slots",
        router: slot_router_1.slotRouter,
    },
    {
        path: "/bookings",
        router: booking_router_1.bookingRouter,
    },
    {
        path: "/my-bookings",
        router: myBooking_router_1.myBookingRouter,
    },
    {
        path: "/order",
        router: order_router_1.orderRouter,
    },
    {
        path: "/payment",
        router: payment_route_1.paymentRouter,
    },
    {
        path: "/review",
        router: review_route_1.reviewRouter,
    }
];
moduleRoutes.forEach((route) => router.use(route.path, route.router));
exports.default = router;
