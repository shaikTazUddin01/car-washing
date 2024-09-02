"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.order = void 0;
const mongoose_1 = require("mongoose");
const customerSchema = new mongoose_1.Schema({
    customerName: { type: String, required: true },
    customerEmail: { type: String, required: true },
    customerPhone: { type: String, required: true },
    customerAddress: { type: String, required: true },
});
const OrderSchema = new mongoose_1.Schema({
    customer: { type: customerSchema, required: true },
    service: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: "service" },
    bookingId: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: "booking" },
    slot: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: "slot" },
    paymentStatus: {
        type: String,
        enum: ["pending", "paid"],
        required: true,
    },
    status: { type: String, enum: ["pending", "success", "failed"], required: true },
    paymentAmount: { type: Number, required: true },
    transactionId: { type: String, required: true },
}, {
    timestamps: true,
});
exports.order = (0, mongoose_1.model)("order", OrderSchema);
