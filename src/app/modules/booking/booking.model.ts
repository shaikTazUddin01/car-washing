import { Schema, model } from "mongoose";
import { TBooking } from "./booking.interface";


const bookingSchema = new Schema<TBooking>(
  {
    customer: { type: Schema.Types.ObjectId, required: true, ref: "user" },
    service: { type: Schema.Types.ObjectId, required: true, ref: "service" },
    slot: { type: Schema.Types.ObjectId, required: true, ref: "slot" },
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
  },
  {
    timestamps: true,
  }
);

export const Booking = model<TBooking>("booking", bookingSchema);
