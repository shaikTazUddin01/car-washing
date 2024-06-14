"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Booking = void 0;
const mongoose_1 = require("mongoose");
const bookingSchema = new mongoose_1.Schema({
    customer: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: "Auth" },
    service: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: "service" },
    slot: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: "slot" },
    vehicleType: {
        type: String,
        enum: {
            values: [
                "car",
                "truck",
                "SUV",
                "van",
                "motorcycle",
                "bus",
                "electricVehicle",
                "hybridVehicle",
                "bicycle",
                "tractor",
            ],
            message: "{VALUE} is not supported",
        },
        required: true,
    },
    vehicleBrand: { type: String, required: true },
    vehicleModel: { type: String, required: true },
    manufacturingYear: { type: Number, required: true },
    registrationPlate: { type: String, required: true },
}, {
    timestamps: true,
});
exports.Booking = (0, mongoose_1.model)("booking", bookingSchema);
