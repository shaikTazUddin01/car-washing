import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";

const UserSchema = new Schema<TUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  role: {
    type: String,
    enum: { values: ["user", "admin"], message: "{VALUE} is not supported" },
    required: true,
  },
  address: { type: String, required: true },
},
{
    timestamps:true
}

);

export const User = model<TUser>("user", UserSchema);
