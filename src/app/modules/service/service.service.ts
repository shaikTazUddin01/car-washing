import { TService } from "./service.interface";
import { Service } from "./service.model";

//create service
const createServiceInToDB = async (payload: TService) => {
  const result = await Service.create(payload);

  return result;
};
//get all service
const getAllServiceFromDB = async () => {
  const result = await Service.find();

  return result;
};
//get single service
const getSingleServiceFromDB = async (id: string) => {
  const result = await Service.findById(id);

  return result;
};

//update service
const updateServiceInToDB = async (id: string, payload: Partial<TService>) => {
  const result = await Service.findByIdAndUpdate(id, payload, {
    new: true,
  });

  return result;
};
//soft delete
const DeleteServiceFromDB = async (id: string) => {
  const result = await Service.findByIdAndUpdate(
    id,
    { isDeleted: true },
    {
      new: true,
    }
  );

  return result;
};

export const CarServiceServices = {
  createServiceInToDB,
  getAllServiceFromDB,
  getSingleServiceFromDB,
  updateServiceInToDB,
  DeleteServiceFromDB,
};
