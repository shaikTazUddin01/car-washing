import { TBooking } from "./booking.interface";
import { Booking } from "./booking.model";

const createBookingInToDB = async (payload: TBooking) => {
  const { customer, ...bookingDate } = payload;
  const newCustomer: string = "666b03a49ec9ba46a4b26efb";

  const result = await Booking.create({
    ...bookingDate,
    customer: newCustomer,
  });

  return result;
};
const getBookingFromDB = async () => {
 
  const result = await Booking.find().populate('customer').populate('service').populate('slot');

  return result;
};

export const bookingService = {
  createBookingInToDB,
  getBookingFromDB
};
