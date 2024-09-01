import { Schema, model } from "mongoose";
import { TReview } from "./review.interface";

const ReviewSchema = new Schema<TReview>(
  {
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, required: true, ref: "Auth" },
  },
  {
    timestamps: true,
  }
);

export const review = model<TReview>("review", ReviewSchema);
