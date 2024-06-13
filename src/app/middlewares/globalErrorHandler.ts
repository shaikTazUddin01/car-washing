import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
// import { TErrorSources } from "../interface/error";

export const globalErrorHandler: ErrorRequestHandler = (err:any, req:Request, res :Response, next :NextFunction) => {
  const statusCode =  500;
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
    error:err
    // errorSources,
    // stack: config.node_env === "development" ? err?.stack : null,
  });
};
