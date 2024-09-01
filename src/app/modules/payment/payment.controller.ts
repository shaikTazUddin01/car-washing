import catchAsync from "../../utils/cathcAsync";
import { paymentService } from "./payment.service";

const confirmationController = catchAsync(async (req, res) => {
  const {transactionId,status} = req.query;
  // console.log(transactionId);
 

  const result = await paymentService.confirmationService(
    transactionId as string,
    status as string
  );
 res.send(result)
});

export const paymentController = {
  confirmationController,
};
