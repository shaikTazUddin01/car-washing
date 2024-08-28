import { Types } from "mongoose";

 
export type TOrder={
    customer: Types.ObjectId;
    service: Types.ObjectId;
    slot: Types.ObjectId;
    paymentStatus:'payment clear'|'not payment';
    paymentAmount:number;
}