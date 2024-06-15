import { Schema, model } from "mongoose";
import { TAuth } from "./auth.interface";
const AuthSchema = new Schema<TAuth>(
  {
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
// AuthSchema.pre("save", async function (next) {
//   const Auth = this;
//   Auth.password = await bcrypt.hash(
//     Auth.password,
//     Number(config.bcrypt_saltRounds)
//   );
//   next();
// });

// AuthSchema.post("save", function(doc,next) {
//   // await Auth.findById(doc._id).select('-password')
//    delete doc._doc.password
//   next();
// });
  AuthSchema.set('toJSON', {
    transform: function(doc, ret, options) {
      delete ret?.password;
      return ret;
    }
  });
  


export const Auth = model<TAuth>("Auth", AuthSchema);

