"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slot = void 0;
const mongoose_1 = require("mongoose");
//slot schema
const SlotSchema = new mongoose_1.Schema({
    service: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: "service" },
    date: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    isBooked: {
        type: String,
        enum: {
            values: ["available", "booked", "canceled"],
            message: "{VALUE} is not supported",
        },
        required: true,
        default: "available",
    },
}, {
    timestamps: true,
});
exports.Slot = (0, mongoose_1.model)("slot", SlotSchema);
