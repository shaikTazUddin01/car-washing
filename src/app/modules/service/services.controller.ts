import httpStatus from "http-status";
import catchAsync from "../../utils/cathcAsync";
import sendResponse from "../../utils/sendResponse";
import { CarServiceServices } from "./service.service";


const createService = catchAsync(async (req, res) => {
  const result = await CarServiceServices.createServiceInToDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Service created successfully",
    data: result,
  });
});


export const serviceController = {
  createService
};
