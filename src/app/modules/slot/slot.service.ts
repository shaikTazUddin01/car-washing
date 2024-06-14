import { Slot } from "../service/service.model";

const getSlot = async (query: Record<string, unknown>) => {
  let service = "";
  if (query?.serviceId) {
    service = query?.serviceId as string;
  }

  const result = await Slot.find().populate("service");

  return result;
};

export const slotService = {
  getSlot,
};
