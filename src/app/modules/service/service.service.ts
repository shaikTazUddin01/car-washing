import { TService, TSlot } from "./service.interface";
import { Service, Slot } from "./service.model";
import { createSolt, convartToNumber, convertToTime } from "./slot.utils";

//create service
const createServiceInToDB = async (payload: TService) => {
  const result = await Service.create(payload);

  return result;
};
//get all service
const getAllServiceFromDB = async () => {
  const result = await Service.find({isDeleted:'false'});

  return result;
};
//get single service
const getSingleServiceFromDB = async (id: string) => {
  const result = await Service.findOne({_id:id , isDeleted:false});

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

//create slot
const createSlotInToDB = async (payload: TSlot) => {
  const { startTime, endTime, ...slotData } = payload;
  //check service is exists or not
  const serviceInFo = await Service.findById(payload.service);
  const serviceDuration = serviceInFo?.duration;

  if (!serviceInFo) {
    throw new Error("This service is not Exists..!");
  }
  // time convertion process
  const startTimeToNumber: number = convartToNumber(startTime);
  const endTimeToNumber: number = convartToNumber(endTime);

  const timeSlot = createSolt(
    startTimeToNumber,
    endTimeToNumber,
    serviceDuration as number
  );

  let numberToStartTime = convertToTime(startTimeToNumber);

  const result = [];

  for (let i = 0; i < timeSlot; i++) {
    const endTime =
      convartToNumber(numberToStartTime) + (serviceDuration as number);

    const numberToendTime = convertToTime(endTime);

    result.push(
      await Slot.create({
        ...slotData,
        startTime: numberToStartTime,
        endTime: numberToendTime,
      })
    );

    numberToStartTime = numberToendTime;
  }

  return result;
};

export const CarServiceServices = {
  createServiceInToDB,
  getAllServiceFromDB,
  getSingleServiceFromDB,
  updateServiceInToDB,
  DeleteServiceFromDB,
  createSlotInToDB,
};
