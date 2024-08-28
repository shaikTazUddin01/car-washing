import { Schema, model } from "mongoose";
import { TCustomer, TOrder } from "./order.initerface";

const customerSchema = new Schema<TCustomer>({
  customerName: { type: String, required: true },
  customerEmail: { type: String, required: true },
  customerPhone: { type: String, required: true },
  customerAddress: { type: String, required: true },
});


const OrderSchema = new Schema<TOrder>(
  {
    customer:{ type: customerSchema, required: true },
    service: { type: Schema.Types.ObjectId, required: true, ref: "service" },
    slot: { type: Schema.Types.ObjectId, required: true, ref: "slot" },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid"],
      required: true,
    },
    status: { type: String, enum: ["pending", "success","failed"], required: true },
    paymentAmount: { type: Number, required: true },
    transactionId: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const order = model<TOrder>("order", OrderSchema);
