import { Auth } from "../Auth/auth.model";
import { Service, Slot } from "../service/service.model";
import { TBooking } from "./booking.interface";
import { Booking } from "./booking.model";

const createBookingInToDB = async (payload: TBooking, customerId: string) => {
  const { customer, ...bookingDate } = payload;

  const isCustomerExists = await Auth.findOne({ _id: customerId });
  if (!isCustomerExists) {
    throw new Error("Please Login frist");
  }
  const isServiceExists = await Service.findOne({ _id: payload?.service });
  if (!isServiceExists) {
    throw new Error("This service is not Exists");
  }
  const isSlotExists = await Slot.findOne({ _id: payload?.slot });
  if (!isSlotExists) {
    throw new Error("This slot is not Exists");
  }
  if (isSlotExists?.isBooked !== "available") {
    throw new Error(`This slot is Already ${isSlotExists?.isBooked} .Please Booked Another Slot`);
  }

  const createBooking = await Booking.create({
    ...bookingDate,
    customer: customerId,
  });

  const slotId = createBooking?.slot;

  await Slot.findByIdAndUpdate(
    slotId,
    { isBooked: "booked" },
    {
      new: true,
    }
  );

  const result = await Booking.findById(createBooking?._id)
    .populate({
      path: "customer",
      select: "_id name email phone address",
    })
    .populate({
      path: "service",
      select: "_id name description price duration isDeleted",
    })
    .populate({
      path: "slot",
      select: "_id service date startTime endTime isBooked",
    });

  return result;
};
const getBookingFromDB = async () => {
  console.log("object");

  const result = await Booking.find()
    .populate({
      path: "customer",
      select: "-password",
    })
    .populate("service")
    .populate("slot");
  return result;
};
const getMyBookingFromDB = async (id: String) => {
  console.log("object");

  const result = await Booking.find({ customer: id })
    .populate({
      path: "customer",
      select: "_id name email phone address",
    })
    .populate({
      path: "service",
      select: "_id name description price duration isDeleted",
    })
    .populate({
      path: "slot",
      select: "_id service date startTime endTime isBooked",
    });
  return result;
};

export const bookingService = {
  createBookingInToDB,
  getBookingFromDB,
  getMyBookingFromDB,
};
