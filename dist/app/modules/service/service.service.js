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
exports.CarServiceServices = void 0;
const service_model_1 = require("./service.model");
const slot_utils_1 = require("./slot.utils");
//create service
const createServiceInToDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_model_1.Service.create(payload);
    return result;
});
//get all service
const getAllServiceFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_model_1.Service.find({ isDeleted: "false" });
    return result;
});
//get single service
const getSingleServiceFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_model_1.Service.findOne({ _id: id, isDeleted: false });
    return result;
});
//update service
const updateServiceInToDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_model_1.Service.findByIdAndUpdate(id, payload, {
        new: true,
    });
    return result;
});
//soft delete
const DeleteServiceFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_model_1.Service.findByIdAndUpdate(id, { isDeleted: true }, {
        new: true,
    });
    return result;
});
//create slot
const createSlotInToDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { startTime, endTime } = payload, slotData = __rest(payload, ["startTime", "endTime"]);
    //check service is exists or not
    const serviceInFo = yield service_model_1.Service.findById(payload.service);
    const serviceDuration = serviceInFo === null || serviceInFo === void 0 ? void 0 : serviceInFo.duration;
    if (!serviceInFo) {
        throw new Error("This service is not Exists..!");
    }
    // time convertion process
    const startTimeToNumber = (0, slot_utils_1.convartToNumber)(startTime);
    const endTimeToNumber = (0, slot_utils_1.convartToNumber)(endTime);
    const timeSlot = (0, slot_utils_1.createSolt)(startTimeToNumber, endTimeToNumber, serviceDuration);
    let numberToStartTime = (0, slot_utils_1.convertToTime)(startTimeToNumber);
    const result = [];
    for (let i = 0; i < timeSlot; i++) {
        const endTime = (0, slot_utils_1.convartToNumber)(numberToStartTime) + serviceDuration;
        const numberToendTime = (0, slot_utils_1.convertToTime)(endTime);
        result.push(yield service_model_1.Slot.create(Object.assign(Object.assign({}, slotData), { startTime: numberToStartTime, endTime: numberToendTime })));
        numberToStartTime = numberToendTime;
    }
    return result;
});
exports.CarServiceServices = {
    createServiceInToDB,
    getAllServiceFromDB,
    getSingleServiceFromDB,
    updateServiceInToDB,
    DeleteServiceFromDB,
    createSlotInToDB,
};
