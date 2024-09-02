import { Types } from "mongoose";

export type TCustomer={
  customerName:string;
  customerEmail:string;
  customerPhone:string;
  customerAddress:string
}
 
export type TOrder={
    customer:TCustomer;
    service: Types.ObjectId;
    slot: Types.ObjectId;
    bookingId:Types.ObjectId;
    paymentStatus:'pending'|'paid';
    status:'pending'|'success'|'failed'
    paymentAmount:number;
    transactionId:string;
}