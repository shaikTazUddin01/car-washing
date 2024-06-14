"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse = (res, data) => {
    res.json({
        success: data === null || data === void 0 ? void 0 : data.success,
        statusCode: data === null || data === void 0 ? void 0 : data.statusCode,
        message: data === null || data === void 0 ? void 0 : data.message,
        data: data.data,
    });
};
exports.default = sendResponse;
