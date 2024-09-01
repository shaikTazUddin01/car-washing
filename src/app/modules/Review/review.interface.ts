import { Types } from "mongoose";

export type TReview={
    rating:number;
    comment:string;
    user:Types.ObjectId
}