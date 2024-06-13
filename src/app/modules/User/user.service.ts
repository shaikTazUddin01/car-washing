import { TUser } from "./user.interface";
import { User } from "./user.model";

const signUpUser = async (payload: TUser) => {
  const result = await User.create(payload);

  return result;
};
const loginUser= async (payload: TUser) => {
  const result = await User.create(payload);

  return result;
};

export const UserServices = {
  signUpUser,
  loginUser
};
