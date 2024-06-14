import { TAuth, TAuthLogin } from "./auth.interface";
import { Auth } from "./auth.model";
import jwt, { JwtPayload } from "jsonwebtoken";
import { cteateToken } from "./auth.utils";
import config from "../../config";
// import bcrypt from "bcrypt";

const signUpAuth = async (payload: TAuth) => {
  const user = await Auth.create(payload);

  return user;
};

// login Auth
const loginAuth = async (payload:TAuthLogin) => {
  const { email, password } = payload;

  const user = await Auth.findOne({ email: email });

  const isEmailMatch = user?.email === email;
  if (!isEmailMatch) {
    throw new Error("You are not authorized");
  }
  const isPasswordMatch = user?.password === password;
  if (!isPasswordMatch) {
    throw new Error("You are not authorized");
  }

  const jwtpayload = {
    AuthId: user?._id,
    email: user?.email,
    role: user?.role,
  };
  const token = cteateToken(
    jwtpayload,
    config.access_token_secret,
    config.access_token_expires_in
  );
  // const decoded = jwt.verify(token, "shhhhh");

  const loginInfo = {
    user,
    token,
  };

  return loginInfo;
};

export const AuthServices = {
  signUpAuth,
  loginAuth,
};
