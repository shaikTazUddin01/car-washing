import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";
import bcrypt from "bcrypt";
import config from "../../config";
const UserSchema = new Schema<TUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
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
    timestamps: true,
  }
);

// middleware
UserSchema.pre("save", async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_saltRounds)
  );
  next();
});

UserSchema.post("save", function (doc, next) {
  doc.password = " ";

  next();
});

export const User = model<TUser>("user", UserSchema);
