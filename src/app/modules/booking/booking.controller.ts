import httpStatus from "http-status";
import catchAsync from "../../utils/cathcAsync";
import sendResponse from "../../utils/sendResponse";
import { bookingService } from "./booking.service";
import { decodedData } from "../../middlewares/auth";

const createBooking = catchAsync(async (req, res) => {

// const token =
const {AuthId}=decodedData(req?.headers?.authorization as string)
// console.log("id:",AuthId);
  const result = await bookingService.createBookingInToDB(req.body,AuthId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Booking successful",
    data: result,
  });
});

const getBooking = catchAsync(async (req, res) => {
  console.log('booking');
  const result = await bookingService.getBookingFromDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "All bookings retrieved successfully",
    data: result,
  });
});
const getMyBooking = catchAsync(async (req, res) => {
  const {AuthId}=decodedData(req?.headers?.authorization as string)

  const result = await bookingService.getMyBookingFromDB(AuthId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User bookings retrieved successfully",
    data: result,
  });
});

export const bookingController = {
  createBooking,
  getBooking,
  getMyBooking
};
