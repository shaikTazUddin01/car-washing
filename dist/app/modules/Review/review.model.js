"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.review = void 0;
const mongoose_1 = require("mongoose");
const ReviewSchema = new mongoose_1.Schema({
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: "Auth" },
}, {
    timestamps: true,
});
exports.review = (0, mongoose_1.model)("review", ReviewSchema);
