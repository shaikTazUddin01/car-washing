import { NextFunction, Request, Response } from "express";
import { TUserRole } from "../modules/Auth/auth.interface";
import catchAsync from "../utils/cathcAsync";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import { Auth } from "../modules/Auth/auth.model";

export const auth = (...requiredRole: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req?.headers?.authorization;

    if (!token) {
      throw new Error("You are not authorizes.!");
    }

    const decoded = jwt.verify(
      token,
      config.access_token_secret as string
    ) as JwtPayload;

    const { AuthId, email, role, iat } = decoded;

    const isUserExists = await Auth.findOne({
      _id: AuthId,
      email,
      role,
    });

    if (!isUserExists) {
      throw new Error("You are not authorized");
    }

    if (requiredRole && !requiredRole.includes(role)) {
      throw new Error("you are not authorized");
    }
    // return decoded;
    next();
  });
};
