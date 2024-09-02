/* eslint-disable @typescript-eslint/no-unused-vars */
// import { Booking } from "../booking/booking.model";
import { Booking } from "../booking/booking.model";
import { initiatePayment } from "../payment/payment.utils";
import { TOrder } from "./order.initerface";
import { order } from "./order.model";

const createOrder = async (data: TOrder) => {
  const transactionId = `TXN-${Date.now()}`;

  const orderInfo = {
    bookingId:data?.bookingId,
    customer:data?.customer,
    service: data?.service,
    slot: data?.slot,
    paymentStatus: "pending",
    status: "pending",
    paymentAmount: data?.paymentAmount,
    transactionId
  };
  // console.log(orderInfo);

  // eslint-disable-next-line no-unused-vars
  const result = await order.create(orderInfo);
  //  payment
  const paymentData={
    transactionId,
    paymentAmount: data?.paymentAmount,
    customerName: data?.customer?.customerName,
    customerEmail: data?.customer?.customerEmail,
    customerPhone: data?.customer?.customerPhone,
    customerAddress: data?.customer?.customerAddress,


  }
 

  const paymentSection = await initiatePayment(paymentData);
  // console.log(paymentSection);
  if(paymentSection.result==true){
 await Booking.findByIdAndUpdate(data?.bookingId,{paymentStatus:"paid"})
  }
  return paymentSection;
};

export const orderService = {
  createOrder,
};
