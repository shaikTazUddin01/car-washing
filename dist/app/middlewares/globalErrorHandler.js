"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
// import { TErrorSources } from "../interface/error";
const globalErrorHandler = (err, req, res, next) => {
    const statusCode = 500;
    const message = err.message || "something went wrong.!";
    // let errorSources: TErrorSources = [
    //     {
    //       path: "",
    //       message: "Something is wrong",
    //     },
    //   ];
    return res.status(statusCode).json({
        success: false,
        message,
        error: err
        // errorSources,
        // stack: config.node_env === "development" ? err?.stack : null,
    });
};
exports.globalErrorHandler = globalErrorHandler;
