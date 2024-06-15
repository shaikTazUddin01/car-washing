import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { TErrorSources } from "../interface/error";
import { ZodError } from "zod";
import handleValidationError from "../errors/handleValidationError";
import handleCastError from "../errors/handleCastError";
import { handleZodError } from "../errors/handleZodError";
// import { TErrorSources } from "../interface/error";

export const globalErrorHandler: ErrorRequestHandler = (err:any, req:Request, res :Response, next :NextFunction) => {
  let statusCode =  500;
  let message = err.message || "something went wrong.!";

  let errorSources: TErrorSources = [
      {
        path: "",
        message: "Something is wrong",
      },
    ];

  
    if (err instanceof ZodError) {
      const simplefieldError = handleZodError(err);
      message = simplefieldError?.message;
      statusCode = simplefieldError?.statusCode;
      errorSources = simplefieldError?.errorSources;
      // console.log(simplefieldError);
    } else if (err?.name === "ValidationError") {
      const simplefieldError = handleValidationError(err);
      message = simplefieldError?.message;
      statusCode = simplefieldError?.statusCode;
      errorSources = simplefieldError?.errorSources;
    }else if(err?.name === "CastError"){
      const simplefieldError = handleCastError(err);
      message = simplefieldError?.message;
      statusCode = simplefieldError?.statusCode;
      errorSources = simplefieldError?.errorSources;
    }
  
    return res.status(statusCode).json({
      success: false,
      message,
      errorSources,
      stack: err?.stack 
    });
  };
  

