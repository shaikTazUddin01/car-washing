import { TSlot } from "./slot.interface";
import { Slot } from "./slot.model";


const getSlot = async (query: Record<string, unknown>) => {
  const filter: any = {};

  if (query?.serviceId) {
    filter["service"] = query.serviceId;
  }

  if (query?.date) {
    filter["date"] = query.date;
  }
  // console.log(filter);
  const result = await Slot.find(filter).populate("service");
  return result;
};

const updateSlot=async(id:string,data:Partial<TSlot>)=>{
// console.log(id,data);
// console.log(data);
  const result =await Slot.findByIdAndUpdate(id,data);

  return result
}

export const slotService = {
  getSlot,
  updateSlot
};
