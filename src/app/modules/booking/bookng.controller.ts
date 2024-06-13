import httpStatus from "http-status";
import catchAsync from "../../utils/cathcAsync";
import sendResponse from "../../utils/sendResponse";
import { bookingService } from "./booking.service";

const createBooking = catchAsync(async (req, res) => {
  const result = await bookingService.createBookingInToDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "create booking successfully",
    data: result,
  });
});

const getBooking = catchAsync(async (req, res) => {
  const result = await bookingService.getBookingFromDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "booking retrieved successfully",
    data: result,
  });
});

export const bookingController = {
  createBooking,
  getBooking
};
