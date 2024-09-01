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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyPayment = exports.initiatePayment = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = __importDefault(require("../../config"));
const initiatePayment = (paymentData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.post(config_1.default.payment_url, {
            store_id: config_1.default.store_id,
            signature_key: config_1.default.signature_key,
            tran_id: paymentData === null || paymentData === void 0 ? void 0 : paymentData.transactionId,
            success_url: `http://localhost:5000/api/payment/confirmation?transactionId=${paymentData === null || paymentData === void 0 ? void 0 : paymentData.transactionId}&status=success`,
            fail_url: `http://localhost:5000/api/payment/confirmation?status=failed`,
            cancel_url: "http://localhost:5173/booking",
            amount: paymentData === null || paymentData === void 0 ? void 0 : paymentData.paymentAmount,
            currency: "BDT",
            desc: "Merchant Registration Payment",
            cus_name: paymentData === null || paymentData === void 0 ? void 0 : paymentData.customerName,
            cus_email: paymentData === null || paymentData === void 0 ? void 0 : paymentData.customerEmail,
            cus_add1: paymentData === null || paymentData === void 0 ? void 0 : paymentData.customerAddress,
            cus_add2: "N/A",
            cus_city: "N/A",
            cus_state: "N/A",
            cus_postcode: "N/A",
            cus_country: "Bangladesh",
            cus_phone: paymentData === null || paymentData === void 0 ? void 0 : paymentData.customerPhone,
            type: "json",
        });
        return response.data;
    }
    catch (error) {
        throw new Error("Payment initiation failed");
    }
});
exports.initiatePayment = initiatePayment;
const verifyPayment = (transactionId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(config_1.default.payment_verify_url, {
            params: {
                store_id: config_1.default.store_id,
                signature_key: config_1.default.signature_key,
                type: "json",
                request_id: transactionId
            }
        });
        return response.data;
    }
    catch (error) {
        throw new Error("Payment validation failed!");
    }
});
exports.verifyPayment = verifyPayment;
