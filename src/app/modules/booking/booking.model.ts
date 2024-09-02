import { Schema, model } from "mongoose";
import { TBooking } from "./booking.interface";

const bookingSchema = new Schema<TBooking>(
  {
    customer: { type: Schema.Types.ObjectId, required: true, ref: "Auth" },
    service: { type: Schema.Types.ObjectId, required: true, ref: "service" },
    slot: { type: Schema.Types.ObjectId, required: true, ref: "slot" },
    paid: {
      type: String,
      enum: {
        values: ["paid", "pending"],
      },
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Booking = model<TBooking>("booking", bookingSchema);
