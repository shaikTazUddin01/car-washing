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

const getMyAccountInFo = catchAsync(async (req, res) => {
  const {id}=req.params
  const data= await AuthServices.getMyAccountInFo(id);

  res.json({
    success: true,
    statusCode: httpStatus.OK,
    message: "Retrieve My Account InFo",
   
    data: data,
  });
});
const getUserFromDB = catchAsync(async (req, res) => {
  
  const data= await AuthServices.getUserFromDB();

  res.json({
    success: true,
    statusCode: httpStatus.OK,
    message: "user retrieve success",
   
    data: data,
  });
});
const updateMyAccountInFo = catchAsync(async (req, res) => {
  const {id}=req.params
  const data= await AuthServices.updateMyAccountInFo(id,req.body);

  res.json({
    success: true,
    statusCode: httpStatus.OK,
    message: "Profile updated",
   
    data: data,
  });
});

export const AuthController = {
  signUpAuth,
  loginAuth,
  getMyAccountInFo,
  updateMyAccountInFo,
  getUserFromDB
};
