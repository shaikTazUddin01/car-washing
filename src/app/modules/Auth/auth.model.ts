import { Schema, model } from "mongoose";
import { TAuth } from "./auth.interface";
import bcrypt from "bcrypt";
import config from "../../config";
const AuthSchema = new Schema<TAuth>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    role: {
      type: String,
      enum: { values: ["Auth", "admin"], message: "{VALUE} is not supported" },
      required: true,
    },
    address: { type: String, required: true },
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
