import { z } from "zod";

const serviceValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    }),
    description: z.string({
      required_error: "Description is required",
      invalid_type_error: "Description must be a string",
    }),
    price: z.number({
      required_error: "Price is required",
      invalid_type_error: "Price must be a number",
    }),
    duration: z.number({
      required_error: "Duration is required",
      invalid_type_error: "Duration must be a number",
    }),
    isDeleted: z
      .boolean({
        required_error: "isDeleted is required",
        invalid_type_error: "isDeleted must be a boolean",
      })
      .default(false),
  }),
});

//time formate
const timeFormat = /^([01]\d|2[0-3]):([0-5]\d)$/;

const slotValidationSchema = z.object({
  body: z.object({
    service: z.string({
      required_error: "Service id is required",
      invalid_type_error: "Service id must be a string",
    }),
    date: z.string({
      required_error: "Date is required",
      invalid_type_error: "Date must be a string",
    }),
    startTime: z
      .string({
        required_error: "Start time is required",
        invalid_type_error: "Start time must be a string",
      })
      .regex(timeFormat, {
        message: "Start time must be in HH:MM format",
      }),
    endTime: z
      .string({
        required_error: "End time is required",
        invalid_type_error: "End time must be a string",
      })
      .regex(timeFormat, {
        message: "Start time must be in HH:MM format",
      }),
    isBooked: z
      .enum(["available", "booked", "canceled"], {
        required_error: "Booking status is required",
        invalid_type_error:
          "Booking status must be one of 'available', 'booked', or 'canceled'",
      })
      .default("available"),
  }),
});

export const serviceValidation = {
  serviceValidationSchema,
  slotValidationSchema,
};
