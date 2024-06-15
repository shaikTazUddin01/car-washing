import jwt from "jsonwebtoken";
// import { Types } from "mongoose";

export const cteateToken = (
  jwtpayload: { AuthId: string; email: string; role: string },
  secret: string,
  expiresIn: string
) => {
  return jwt.sign(jwtpayload, secret, {
    expiresIn: expiresIn,
  });
};
