import httpStatus from "http-status";
import catchAsync from "../../utils/cathcAsync";
import sendResponse from "../../utils/sendResponse";
import { CarServiceServices } from "./service.service";

//create service
const createService = catchAsync(async (req, res) => {
  const result = await CarServiceServices.createServiceInToDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Service created successfully",
    data: result,
  });
});

//get all service
const getAllService = catchAsync(async (req, res) => {
  const queries=req.query
  
  const result = await CarServiceServices.getAllServiceFromDB(queries);

//  console.log(result);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Service retrieved successfully",
    data: result,
  });



});

//get single service
const getSingleService = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CarServiceServices.getSingleServiceFromDB(id);
console.log(result);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Service retrieved successfully",
    data: result,
  });
});
//update service
const updateService = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CarServiceServices.updateServiceInToDB(id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Service updated successfully",
    data: result,
  });
});
//soft delete service
const deleteService = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CarServiceServices.DeleteServiceFromDB(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Service deleted successfully",
    data: result,
  });
});
//create slot
const createSlot = catchAsync(async (req, res) => {
  const result = await CarServiceServices.createSlotInToDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Slots created successfully",
    data: result,
  });
});

export const serviceController = {
  createService,
  getAllService,
  getSingleService,
  updateService,
  deleteService,
  createSlot,
};
