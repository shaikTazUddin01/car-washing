import httpStatus from "http-status";
import catchAsync from "../../utils/cathcAsync";
import sendResponse from "../../utils/sendResponse";
import { decodedData } from "../../middlewares/auth";
import { orderService } from "./order.service";

const createOrder = catchAsync(async (req, res) => {

// const token =

// console.log("id:",AuthId);
// console.log(req.body);
  const result = await orderService.createOrder(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Order successful",
    data: result,
  });
});

export const orderController = {
  createOrder,
  
};
