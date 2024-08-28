import { NextFunction, Request, Response } from "express";
import { TUserRole } from "../modules/Auth/auth.interface";
import catchAsync from "../utils/cathcAsync";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import { Auth } from "../modules/Auth/auth.model";

export const auth = (...requiredRole: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const decoded = decodedData(req?.headers?.authorization as string);
   
    // console.log(decoded);
    const { AuthId, email, role } = decoded;

    const isUserExists = await Auth.findOne({
      _id: AuthId,
      email,
      role,
    });

    if (!isUserExists) {
      // throw new Error("You are not authorized");
      res.json({
        success: false,
        statusCode: 401,
        message: "You have no access to this route",
      });
    }

    if (requiredRole && !requiredRole.includes(role)) {
      res.json({
        success: false,
        statusCode: 401,
        message: "You have no access to this route",
      });
      // throw new Error("you are not authorized");
    }
    // return decoded;
    next();
  });
};

export const decodedData = (header: string) => {
  let token = header;

  token = token?.split(" ")[1];

  // console.log(token);

  if (!token) {
    throw new Error("You are not authorizes.!");
  }

  const decoded = jwt.verify(
    token,
    config.access_token_secret as string
  ) as JwtPayload;

  return decoded;
};
