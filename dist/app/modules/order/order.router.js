"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouter = void 0;
const express_1 = require("express");
const auth_1 = require("../../middlewares/auth");
const order_controller_1 = require("./order.controller");
const router = (0, express_1.Router)();
router.post("/create", (0, auth_1.auth)("user"), order_controller_1.orderController.createOrder);
exports.orderRouter = router;
