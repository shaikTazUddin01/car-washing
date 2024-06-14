import { Schema, model } from "mongoose";
import { TAuth } from "./auth.interface";
import bcrypt from "bcrypt";
import config from "../../config";
const AuthSchema = new Schema<TAuth>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    role: {
      type: String,
      enum: { values: ["Auth", "admin"], message: "{VALUE} is not supported" },
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
// AuthSchema.pre("save", async function (next) {
//   const Auth = this;
//   Auth.password = await bcrypt.hash(
//     Auth.password,
//     Number(config.bcrypt_saltRounds)
//   );
//   next();
// });

AuthSchema.post("save", function (doc, next) {
  doc.password = " ";

  next();
});

export const Auth = model<TAuth>("Auth", AuthSchema);

