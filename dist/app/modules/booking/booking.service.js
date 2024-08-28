"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingService = void 0;
const auth_model_1 = require("../Auth/auth.model");
const service_model_1 = require("../service/service.model");
const slot_model_1 = require("../slot/slot.model");
const booking_model_1 = require("./booking.model");
const createBookingInToDB = (payload, customerId) => __awaiter(void 0, void 0, void 0, function* () {
    const { customer } = payload, bookingData = __rest(payload, ["customer"]);
    const keys = Object.keys(bookingData);
    const firstKey = keys[0];
    const secondKey = keys[1];
    const service = bookingData[firstKey];
    const slot = bookingData[secondKey];
    const _a = bookingData, _b = firstKey, firstValue = _a[_b], _c = secondKey, secondValue = _a[_c], data = __rest(_a, [typeof _b === "symbol" ? _b : _b + "", typeof _c === "symbol" ? _c : _c + ""]);
    //check exists or not
    const isCustomerExists = yield auth_model_1.Auth.findOne({ _id: customerId });
    if (!isCustomerExists) {
        throw new Error("Please Login frist");
    }
    const isServiceExists = yield service_model_1.Service.findOne({ _id: service });
    if (!isServiceExists) {
        throw new Error("This service is not Exists");
    }
    const isSlotExists = yield slot_model_1.Slot.findOne({ _id: slot });
    if (!isSlotExists) {
        throw new Error("This slot is not Exists");
    }
    if ((isSlotExists === null || isSlotExists === void 0 ? void 0 : isSlotExists.isBooked) == "booked") {
        throw new Error(`This slot is Already ${isSlotExists === null || isSlotExists === void 0 ? void 0 : isSlotExists.isBooked} .Please Booked Another Slot`);
    }
    const createBooking = yield booking_model_1.Booking.create(Object.assign(Object.assign({}, data), { customer: customerId, service: service, slot: slot }));
    const slotId = createBooking === null || createBooking === void 0 ? void 0 : createBooking.slot;
    yield slot_model_1.Slot.findByIdAndUpdate(slotId, { isBooked: "booked" }, {
        new: true,
    });
    const result = yield booking_model_1.Booking.findById(createBooking === null || createBooking === void 0 ? void 0 : createBooking._id)
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
});
const getBookingFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    // console.log("object");
    const result = yield booking_model_1.Booking.find()
        .populate({
        path: "customer",
        select: "-password",
    })
        .populate("service")
        .populate("slot");
    return result;
});
const getMyBookingFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log("object");
    const result = yield booking_model_1.Booking.find({ customer: id })
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
});
exports.bookingService = {
    createBookingInToDB,
    getBookingFromDB,
    getMyBookingFromDB,
};
