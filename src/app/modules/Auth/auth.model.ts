/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from "mongoose";
import { TAuth } from "./auth.interface";
import config from "../../config";
import bcrypt from "bcrypt";
const AuthSchema = new Schema<TAuth>(
  {
    image: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    role: {
      type: String,
      enum: { values: ["user", "admin"], message: "{VALUE} is not supported" },
      required: true,
      trim: true,
    },
    address: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  }
);

// middleware
AuthSchema.pre("save", async function (next) {
  
  const Auth = this;
  Auth.password = await bcrypt.hash(
    Auth.password,
    Number(config.bcrypt_saltRounds)
  );
  next();
});


AuthSchema.set("toJSON", {
  transform: function (doc, ret) {
    delete ret?.password;
    return ret;
  },
});

export const Auth = model<TAuth>("Auth", AuthSchema);
