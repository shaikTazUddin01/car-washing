import { Response } from "express";

type TResponse<T> = {
  success: boolean;
  statusCode: number;
  message?: string;
  data: T;
};

const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  //  return res.json({
  //     success: data?.success,
  //     statusCode: data?.statusCode,
  //     message: data?.message,
  //     data: data.data,
  //   });

  let isEmpty = false;

  if (data.data === null || data.data === undefined) {
    isEmpty = true;
  } else if (Array.isArray(data.data) && data.data.length === 0) {
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

export default sendResponse;
