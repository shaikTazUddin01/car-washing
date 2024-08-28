import httpStatus from "http-status";
import catchAsync from "../../utils/cathcAsync";
import sendResponse from "../../utils/sendResponse";
import { slotService } from "./slot.service";

//get all slot
const getSlot = catchAsync(async (req, res) => {
  // console.log(req.query);
  const result = await slotService.getSlot(req?.query);
// console.log(result);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "slot retrieved successfully",
    data: result,
  });
});

export const slotController = {
  getSlot,
};
