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


const getAllService = catchAsync(async (req, res) => {

  const result = await CarServiceServices.getAllServiceFromDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Service retrieved successfully",
    data: result,
  });
});


const getSingleService = catchAsync(async (req, res) => {
  const{id}=req.params
  const result = await CarServiceServices.getSingleServiceFromDB(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Service retrieved successfully",
    data: result,
  });
});


export const serviceController = {
  createService,
  getAllService,
  getSingleService
};
