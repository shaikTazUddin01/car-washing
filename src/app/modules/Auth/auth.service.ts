import { TAuth, TAuthLogin, TJwtpayload } from "./auth.interface";
import { Auth } from "./auth.model";
import { cteateToken } from "./auth.utils";
import config from "../../config";
// import bcrypt from "bcrypt";

const signUpAuth = async (payload: TAuth) => {
  const user = await Auth.create(payload);

  return user;
};

// login Auth
const loginAuth = async (payload: TAuthLogin) => {
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

  const jwtpayload: TJwtpayload = {
    AuthId: user?._id.toString(),
    email: user?.email,
    role: user?.role,
  };
  const token = cteateToken(
    jwtpayload,
    config.access_token_secret as string,
    config.access_token_expires_in as string
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
