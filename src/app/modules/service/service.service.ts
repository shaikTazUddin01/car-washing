import { TService } from "./service.interface";
import { Service } from "./service.model";


const createServiceInToDB = async (payload: TService) => {
  const result = await Service.create(payload);

  return result;
};
const getAllServiceFromDB = async () => {
  const result = await Service.find();

  return result;
};
const getSingleServiceFromDB = async (id : string) => {
  const result = await Service.findById(id);

  return result;
};


export const CarServiceServices = {
  createServiceInToDB,
  getAllServiceFromDB,
  getSingleServiceFromDB
 
};
