import { model, Schema } from "mongoose";
import { TSlot } from "./slot.interface";

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
  