import { TSlot } from "../slot/slot.interface";
import { Slot } from "../slot/slot.model";
import { TService } from "./service.interface";
import { Service } from "./service.model";
import { createSolt, convartToNumber, convertToTime } from "./slot.utils";

//create service
const createServiceInToDB = async (payload: TService) => {

  payload.isDeleted=false;

  const result = await Service.create(payload);

  return result;
};
//get all service
const getAllServiceFromDB = async (queries:any) => {
let sortedProduct='-createdAt'
  console.log(queries);
const searchProduct:any={}
if (queries && queries?.searchInfo) {
  searchProduct.name={$regex:queries?.searchInfo,$options:'i'}
}
if (queries && queries?.sortByPrice) {
  const sortByPrice=queries?.sortByPrice
  if (sortByPrice=='dsc') {
    sortedProduct="-price"
  }
  if (sortByPrice=='asc') {
    sortedProduct="price"
  }
}
 // Filter by price range
 if (queries?.filterByPrice) {
  const [minPrice, maxPrice] = queries.filterByPrice.split(' - ').map(Number);
  searchProduct.price = { $gte: minPrice, $lte: maxPrice };
}


  const result = await Service.find({isDeleted: "false",...searchProduct}).sort(sortedProduct);

  return result;
};
//get single service
const getSingleServiceFromDB = async (id: string) => {
  const result = await Service.findOne({ _id: id, isDeleted: false });

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
