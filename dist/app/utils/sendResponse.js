"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse = (res, data) => {
    //  return res.json({
    //     success: data?.success,
    //     statusCode: data?.statusCode,
    //     message: data?.message,
    //     data: data.data,
    //   });
    let isEmpty = false;
    if (data.data === null || data.data === undefined) {
        isEmpty = true;
    }
    else if (Array.isArray(data.data) && data.data.length === 0) {
        isEmpty = true;
    }
    if (!isEmpty) {
        return res.json({
            success: data.success,
            statusCode: data.statusCode,
            message: data.message,
            data: data.data,
        });
    }
    return res.json({
        success: false,
        statusCode: 404,
        message: "No Data Found",
        data: [],
    });
};
exports.default = sendResponse;
