import httpStatus from "http-status";
import catchAsync from "../../utils/cathcAsync";
import sendResponse from "../../utils/sendResponse";
import { reviewService } from "./review.service";

const createReview = catchAsync(async (req, res) => {

    // const token =
    
    // console.log("id:",AuthId);
    // console.log(req.body);
      const result = await reviewService.createReviewInFoDB(req.body);
    
      sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Order successful",
        data: result,
      });
    });

    export const reviewController={
        createReview
    }