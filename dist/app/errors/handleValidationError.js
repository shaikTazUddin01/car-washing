"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const handleValidationError = (err) => {
    const errorSources = Object.values(err.errors).map((val) => {
        if (val instanceof mongoose_1.default.Error.ValidatorError || val instanceof mongoose_1.default.Error.CastError) {
            return {
                path: val.path,
                message: val.message,
            };
        }
        else {
            return {
                path: '',
                message: 'Unknown error type',
            };
        }
    });
    const statusCode = 400;
    return {
        statusCode,
        message: "validation error",
        errorSources,
    };
};
exports.default = handleValidationError;
