import { AuthServices } from "./auth.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/cathcAsync";

const signUpAuth = catchAsync(async (req, res) => {
  // const { password, ...signUpInfo } = req.body;
  console.log(req.body);
  const result = await AuthServices.signUpAuth(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User registered successfully",
    data: result,
  });
});


const loginAuth = catchAsync(async (req, res) => {
  const data= await AuthServices.loginAuth(req.body);

  res.json({
    success: true,
    statusCode: httpStatus.OK,
    message: "User logged in successfully",
   
    data: {data:data.user,token:data.token},
  });
});

export const AuthController = {
  signUpAuth,
  loginAuth,
};
