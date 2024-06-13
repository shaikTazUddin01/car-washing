
import { TUser } from "./user.interface";
import { User } from "./user.model";

const signUpUser = async (payload: TUser) => {
 
  const result = await User.create(payload);

  return result;
};

// login user
const loginUser = async (payload: TUser) => {

const {email,password}=payload

  const result = await User.findOne({email:email}).select('-password');

  return result;
};

export const UserServices = {
  signUpUser,
  loginUser,
};
