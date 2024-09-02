"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Booking = void 0;
const mongoose_1 = require("mongoose");
const bookingSchema = new mongoose_1.Schema({
    customer: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: "Auth" },
    service: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: "service" },
    slot: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: "slot" },
    paid: {
        type: String,
        enum: {
            values: ["paid", "pending"],
        },
        required: true,
    },
}, {
    timestamps: true,
});
exports.Booking = (0, mongoose_1.model)("booking", bookingSchema);
