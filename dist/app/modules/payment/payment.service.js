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
exports.paymentService = void 0;
const order_model_1 = require("../order/order.model");
const payment_utils_1 = require("./payment.utils");
// import { join } from "path";
// import { readFileSync } from "fs";
const confirmationService = (transactionId, status) => __awaiter(void 0, void 0, void 0, function* () {
    const verifyResponse = yield (0, payment_utils_1.verifyPayment)(transactionId);
    // console.log(verifyResponse);
    // let res;
    let message = "";
    if (verifyResponse && verifyResponse.pay_status == "Successful") {
        const successOrder = yield order_model_1.order.findOneAndUpdate({ transactionId: transactionId }, {
            paymentStatus: "paid",
            status: status,
        });
        console.log("object--->");
        console.log(successOrder);
        message = "Successfully Paid!";
    }
    else {
        message = "Payment Failed!";
    }
    // const filePath = join(__dirname, "../../views/confirmation.html");
    // let template = readFileSync(filePath, "utf-8");
    // template = template.replace("{{message}}", message);
    return message;
});
exports.paymentService = {
    confirmationService,
};
