import { TService } from "./service.interface";
import { Service } from "./service.model";


const createServiceInToDB = async (payload: TService) => {
  const result = await Service.create(payload);

  return result;
};


export const CarServiceServices = {
  createServiceInToDB,
 
};
