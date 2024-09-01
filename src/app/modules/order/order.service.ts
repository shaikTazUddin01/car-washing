/* eslint-disable @typescript-eslint/no-unused-vars */
import { initiatePayment } from "../payment/payment.utils";
import { TOrder } from "./order.initerface";
import { order } from "./order.model";

const createOrder = async (data: TOrder) => {
  const transactionId = `TXN-${Date.now()}`;

  const orderInfo = {
    customer:data?.customer,
    service: data?.service,
    slot: data?.slot,
    paymentStatus: "pending",
    status: "pending",
    paymentAmount: data?.paymentAmount,
    transactionId
  };

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
  
  return paymentSection;
};

export const orderService = {
  createOrder,
};
