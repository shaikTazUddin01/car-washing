import { Types } from "mongoose";

export type TService = {
  image:string;
    name: string;
    description: string;
    price: number;
    duration: number;
    isDeleted: boolean;
  };
 