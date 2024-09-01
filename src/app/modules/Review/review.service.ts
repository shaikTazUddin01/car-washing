// import { Auth } from "../Auth/auth.model";
import { TReview } from "./review.interface";
import { review } from "./review.model";

const createReviewInFoDB = async (data: TReview, id: string) => {
  const userReview = {
    rating: data?.rating,
    comment: data?.comment,
    user: id,
  };
  const result=await review.create(userReview);
  return result;
};
const getAllReview = async () => {
  const result=await review.find().populate('user');
//   console.log(result);
  return result;
};

export const reviewService = {
  createReviewInFoDB,
  getAllReview
};
