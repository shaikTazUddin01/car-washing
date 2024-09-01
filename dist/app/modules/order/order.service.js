"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderService = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
const payment_utils_1 = require("../payment/payment.utils");
const order_model_1 = require("./order.model");
const createOrder = (data) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    const transactionId = `TXN-${Date.now()}`;
    const orderInfo = {
        customer: data === null || data === void 0 ? void 0 : data.customer,
        service: data === null || data === void 0 ? void 0 : data.service,
        slot: data === null || data === void 0 ? void 0 : data.slot,
        paymentStatus: "pending",
        status: "pending",
        paymentAmount: data === null || data === void 0 ? void 0 : data.paymentAmount,
        transactionId
    };
    // eslint-disable-next-line no-unused-vars
    const result = yield order_model_1.order.create(orderInfo);
    //  payment
    const paymentData = {
        transactionId,
        paymentAmount: data === null || data === void 0 ? void 0 : data.paymentAmount,
        customerName: (_a = data === null || data === void 0 ? void 0 : data.customer) === null || _a === void 0 ? void 0 : _a.customerName,
        customerEmail: (_b = data === null || data === void 0 ? void 0 : data.customer) === null || _b === void 0 ? void 0 : _b.customerEmail,
        customerPhone: (_c = data === null || data === void 0 ? void 0 : data.customer) === null || _c === void 0 ? void 0 : _c.customerPhone,
        customerAddress: (_d = data === null || data === void 0 ? void 0 : data.customer) === null || _d === void 0 ? void 0 : _d.customerAddress,
    };
    const paymentSection = yield (0, payment_utils_1.initiatePayment)(paymentData);
    // console.log(paymentSection);
    return paymentSection;
});
exports.orderService = {
    createOrder,
};
