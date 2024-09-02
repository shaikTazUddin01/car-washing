import { order } from "../order/order.model";
import { verifyPayment } from "./payment.utils";
// import { join } from "path";
// import { readFileSync } from "fs";
const confirmationService = async (transactionId: string, status: string) => {
  const verifyResponse = await verifyPayment(transactionId);
  // console.log(verifyResponse);
  // let res;
  let message = "";
  if (verifyResponse && verifyResponse.pay_status == "Successful") {
     await order.findOneAndUpdate(
      { transactionId: transactionId },
      {
        paymentStatus: "paid",
        status: status,
      }
    );
    message = "Successfully Paid!";
  } else {
    message = "Payment Failed!";
  }
  // const filePath = join(__dirname, "../../views/confirmation.html");
  // let template = readFileSync(filePath, "utf-8");

  // template = template.replace("{{message}}", message);

  return message;
};

export const paymentService = {
  confirmationService,
};
