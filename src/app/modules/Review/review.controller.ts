import httpStatus from "http-status";
import catchAsync from "../../utils/cathcAsync";
import sendResponse from "../../utils/sendResponse";
import { reviewService } from "./review.service";

const createReview = catchAsync(async (req, res) => {

      const result = await reviewService.createReviewInFoDB(req.body,req.user?.AuthId);
    
      sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "review create success",
        data: result,
      });
    });
    
const getAllReview = catchAsync(async (req, res) => {
      const result = await reviewService.getAllReview();
      sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "All Review Retrieve success",
        data: result,
      });
    });

    export const reviewController={
        createReview,
        getAllReview
    }