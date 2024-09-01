import { TReview } from "./review.interface";
import { review } from "./review.model"

const createReviewInFoDB=async(data:TReview)=>{

    const result=await review.create(data);
    return result
}

export const reviewService={
createReviewInFoDB,
}