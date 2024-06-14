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
const booking_model_1 = require("./booking.model");
const createBookingInToDB = (payload, customerId) => __awaiter(void 0, void 0, void 0, function* () {
    const { customer } = payload, bookingDate = __rest(payload, ["customer"]);
    const isCustomerExists = yield auth_model_1.Auth.findOne({ _id: customerId });
    if (!isCustomerExists) {
        throw new Error("Please Login frist");
    }
    const isServiceExists = yield service_model_1.Service.findOne({ _id: payload === null || payload === void 0 ? void 0 : payload.service });
    if (!isServiceExists) {
        throw new Error("This service is not Exists");
    }
    const isSlotExists = yield service_model_1.Slot.findOne({ _id: payload === null || payload === void 0 ? void 0 : payload.slot });
    if (!isSlotExists) {
        throw new Error("This slot is not Exists");
    }
    const result = yield booking_model_1.Booking.create(Object.assign(Object.assign({}, bookingDate), { customer: customerId }));
    return result;
});
const getBookingFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("object");
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
    console.log("object");
    const result = yield booking_model_1.Booking.find({ customer: id })
        .populate({
        path: "customer",
        select: "-password",
    })
        .populate("service")
        .populate("slot");
    return result;
});
exports.bookingService = {
    createBookingInToDB,
    getBookingFromDB,
    getMyBookingFromDB
};
