import { Slot } from "../service/service.model";

const getSlot = async (query: Record<string, unknown>) => {
  const filter: any = {};

  if (query?.serviceId) {
    filter["service"] = query.serviceId;
  }

  if (query?.date) {
    filter["date"] = query.date;
  }
console.log(filter);
  const result = await Slot.find(filter).populate("service");
  return result;
};

export const slotService = {
  getSlot,
};
