import { Schema, model } from "mongoose";
import { TService, TSlot } from "./service.interface";

const ServiceSchema = new Schema<TService>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: Number, required: true },
    isDeleted: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

export const Service = model<TService>("service", ServiceSchema);

//slot schema
const SlotSchema = new Schema<TSlot>(
  {
    service: { type: Schema.Types.ObjectId, required: true, ref: "service" },
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
  },
  {
    timestamps: true,
  }
);

export const Slot = model<TSlot>("slot", SlotSchema);
