import { Schema, model } from "mongoose";
import { TOrder } from "./order.initerface";



const OrderSchema = new Schema<TOrder>(
  {
    customer: { type: Schema.Types.ObjectId, required: true, ref: "Auth" },
    service: { type: Schema.Types.ObjectId, required: true, ref: "service" },
    slot: { type: Schema.Types.ObjectId, required: true, ref: "slot" },
    paymentStatus:{type:String,enum:['payment cleat','not payment'],required:true},
    paymentAmount:{type:Number,required:true}

  },
  {
    timestamps: true,
  }
);

export const order = model<TOrder>("order", OrderSchema);
