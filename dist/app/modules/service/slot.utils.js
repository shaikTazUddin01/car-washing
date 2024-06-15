"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToTime = exports.createSolt = exports.convartToNumber = void 0;
const convartToNumber = (time) => {
    const [hours, minuts] = time.split(":").map(Number);
    const convert = hours * 60 + minuts;
    return convert;
};
exports.convartToNumber = convartToNumber;
const createSolt = (startTime, endTime, serviceDuration) => {
    const totalSlot = (endTime - startTime) / serviceDuration;
    return Math.floor(totalSlot);
};
exports.createSolt = createSolt;
const convertToTime = (time) => {
    var hours = time / 60;
    var rhours = Math.floor(hours).toString().padStart(2, '0');
    var minutes = (hours - parseInt(rhours)) * 60;
    var rminutes = Math.round(minutes).toString().padStart(2, '0');
    return rhours + ":" + rminutes;
};
exports.convertToTime = convertToTime;
