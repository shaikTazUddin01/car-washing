"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceValidation = void 0;
const zod_1 = require("zod");
const serviceValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: "Name is required",
            invalid_type_error: "Name must be a string",
        }),
        description: zod_1.z.string({
            required_error: "Description is required",
            invalid_type_error: "Description must be a string",
        }),
        price: zod_1.z.number({
            required_error: "Price is required",
            invalid_type_error: "Price must be a number",
        }),
        duration: zod_1.z.number({
            required_error: "Duration is required",
            invalid_type_error: "Duration must be a number",
        }),
        isDeleted: zod_1.z
            .boolean({
            required_error: "isDeleted is required",
            invalid_type_error: "isDeleted must be a boolean",
        })
            .default(false),
    }),
});
//time formate
const timeFormat = /^([01]\d|2[0-3]):([0-5]\d)$/;
const slotValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        service: zod_1.z.string({
            required_error: "Service id is required",
            invalid_type_error: "Service id must be a string",
        }),
        date: zod_1.z.string({
            required_error: "Date is required",
            invalid_type_error: "Date must be a string",
        }),
        startTime: zod_1.z
            .string({
            required_error: "Start time is required",
            invalid_type_error: "Start time must be a string",
        })
            .regex(timeFormat, {
            message: "Start time must be in HH:MM format",
        }),
        endTime: zod_1.z
            .string({
            required_error: "End time is required",
            invalid_type_error: "End time must be a string",
        })
            .regex(timeFormat, {
            message: "Start time must be in HH:MM format",
        }),
        isBooked: zod_1.z
            .enum(["available", "booked", "canceled"], {
            required_error: "Booking status is required",
            invalid_type_error: "Booking status must be one of 'available', 'booked', or 'canceled'",
        })
            .default("available"),
    }),
});
exports.serviceValidation = {
    serviceValidationSchema,
    slotValidationSchema,
};
