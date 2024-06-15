"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const zod_1 = require("zod");
const handleValidationError_1 = __importDefault(require("../errors/handleValidationError"));
const handleCastError_1 = __importDefault(require("../errors/handleCastError"));
const handleZodError_1 = require("../errors/handleZodError");
// import { TErrorSources } from "../interface/error";
const globalErrorHandler = (err, req, res, next) => {
    let statusCode = 500;
    let message = err.message || "something went wrong.!";
    let errorSources = [
        {
            path: "",
            message: "Something is wrong",
        },
    ];
    if (err instanceof zod_1.ZodError) {
        const simplefieldError = (0, handleZodError_1.handleZodError)(err);
        message = simplefieldError === null || simplefieldError === void 0 ? void 0 : simplefieldError.message;
        statusCode = simplefieldError === null || simplefieldError === void 0 ? void 0 : simplefieldError.statusCode;
        errorSources = simplefieldError === null || simplefieldError === void 0 ? void 0 : simplefieldError.errorSources;
        // console.log(simplefieldError);
    }
    else if ((err === null || err === void 0 ? void 0 : err.name) === "ValidationError") {
        const simplefieldError = (0, handleValidationError_1.default)(err);
        message = simplefieldError === null || simplefieldError === void 0 ? void 0 : simplefieldError.message;
        statusCode = simplefieldError === null || simplefieldError === void 0 ? void 0 : simplefieldError.statusCode;
        errorSources = simplefieldError === null || simplefieldError === void 0 ? void 0 : simplefieldError.errorSources;
    }
    else if ((err === null || err === void 0 ? void 0 : err.name) === "CastError") {
        const simplefieldError = (0, handleCastError_1.default)(err);
        message = simplefieldError === null || simplefieldError === void 0 ? void 0 : simplefieldError.message;
        statusCode = simplefieldError === null || simplefieldError === void 0 ? void 0 : simplefieldError.statusCode;
        errorSources = simplefieldError === null || simplefieldError === void 0 ? void 0 : simplefieldError.errorSources;
    }
    return res.status(statusCode).json({
        success: false,
        message,
        errorSources,
        stack: err === null || err === void 0 ? void 0 : err.stack
    });
    next();
};
exports.globalErrorHandler = globalErrorHandler;
