import { z } from "zod";

const bookingValidationSchema = z.object({
    body: z.object({
      customer: z.string({
        required_error: "Customer ID is required",
        invalid_type_error: "Customer ID must be a string",
      }).optional(),
      service: z.string({
        required_error: "Service ID is required",
        invalid_type_error: "Service ID must be a string",
      }).optional(),
      slot: z.string({
        required_error: "Slot ID is required",
        invalid_type_error: "Slot ID must be a string",
      }).optional(),
      vehicleType: z.enum([
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
      vehicleBrand: z.string({
        required_error: "Vehicle brand is required",
        invalid_type_error: "Vehicle brand must be a string",
      }),
      vehicleModel: z.string({
        required_error: "Vehicle model is required",
        invalid_type_error: "Vehicle model must be a string",
      }),
      manufacturingYear: z.number({
        required_error: "Manufacturing year is required",
        invalid_type_error: "Manufacturing year must be a number",
      }),
      registrationPlate: z.string({
        required_error: "Registration plate is required",
        invalid_type_error: "Registration plate must be a string",
      }),
    })
  });

  export const bookingValidation={
    bookingValidationSchema
  }