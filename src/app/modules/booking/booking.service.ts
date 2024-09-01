/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { Auth } from "../Auth/auth.model";
import { Service } from "../service/service.model";
import { Slot } from "../slot/slot.model";
import { TBooking } from "./booking.interface";
import { Booking } from "./booking.model";

const createBookingInToDB = async (payload: TBooking, customerId: string) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { customer, ...bookingData } = payload;

  const keys = Object.keys(bookingData);
  const firstKey = keys[0];
  const secondKey = keys[1];

  const service = (bookingData as any)[firstKey];
  const slot = (bookingData as any)[secondKey];

  const {
    [firstKey]: firstValue,
    [secondKey]: secondValue,
    ...data
  } = bookingData as any;

  //check exists or not
  const isCustomerExists = await Auth.findOne({ _id: customerId });
  if (!isCustomerExists) {
    throw new Error("Please Login frist");
  }
  const isServiceExists = await Service.findOne({ _id: service });
  if (!isServiceExists) {
    throw new Error("This service is not Exists");
  }
  const isSlotExists = await Slot.findOne({ _id: slot });
  if (!isSlotExists) {
    throw new Error("This slot is not Exists");
  }
  if (isSlotExists?.isBooked == "booked") {
    throw new Error(
      `This slot is Already ${isSlotExists?.isBooked} .Please Booked Another Slot`
    );
  }

  const createBooking = await Booking.create({
    ...data,
    customer: customerId,
    service: service,
    slot: slot,
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
  // console.log("object");

  const result = await Booking.find()
    .populate({
      path: "customer",
      select: "-password",
    })
    .populate("service")
    .populate("slot");
  return result;
};
const getMyBookingFromDB = async (id: string) => {
  // console.log("object");

  const result = await Booking.find({ customer: id })
    .populate({
      path: "customer",
      select: "_id name email phone address",
    })
    .populate('service')
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
