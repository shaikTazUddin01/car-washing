"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingValidation = void 0;
const zod_1 = require("zod");
const bookingValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        customer: zod_1.z.string({
            required_error: "Customer ID is required",
            invalid_type_error: "Customer ID must be a string",
        }).optional(),
        service: zod_1.z.string({
            required_error: "Service ID is required",
            invalid_type_error: "Service ID must be a string",
        }).optional(),
        slot: zod_1.z.string({
            required_error: "Slot ID is required",
            invalid_type_error: "Slot ID must be a string",
        }).optional(),
        vehicleType: zod_1.z.enum([
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
        ], {
            required_error: "Vehicle type is required",
            invalid_type_error: "Vehicle type must be one of the predefined values",
        }),
        vehicleBrand: zod_1.z.string({
            required_error: "Vehicle brand is required",
            invalid_type_error: "Vehicle brand must be a string",
        }),
        vehicleModel: zod_1.z.string({
            required_error: "Vehicle model is required",
            invalid_type_error: "Vehicle model must be a string",
        }),
        manufacturingYear: zod_1.z.number({
            required_error: "Manufacturing year is required",
            invalid_type_error: "Manufacturing year must be a number",
        }),
        registrationPlate: zod_1.z.string({
            required_error: "Registration plate is required",
            invalid_type_error: "Registration plate must be a string",
        }),
    })
});
exports.bookingValidation = {
    bookingValidationSchema
};
