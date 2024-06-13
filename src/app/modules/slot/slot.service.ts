import { Slot } from "../service/service.model";

const getSlot = async () => {
  const result = await Slot.find().populate("service");

  return result;
};

export const slotService = {
  getSlot,
};
