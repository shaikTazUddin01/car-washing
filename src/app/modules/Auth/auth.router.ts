import express from "express";
import { AuthController } from "./auth.controller";
import validateRequest from "../../middlewares/validationRequest";
import { AuthValidation } from "./auth.validation";
import { auth } from "../../middlewares/auth";

const router = express.Router();

router.post(
  "/signup",
  // validateRequest(AuthValidation.signUpValidationSchema),
  AuthController.signUpAuth
);
router.post(
  "/login",
  validateRequest(AuthValidation.logInValidationSchema),
  AuthController.loginAuth
);

router.get(
  "/myAccountInFo/:id",
  auth("user", "admin"),
  AuthController.getMyAccountInFo
);
router.get(
  "/users",
  auth("admin"),
  AuthController.getUserFromDB
);
router.put(
  "/myAccountInFo/:id",
  auth("user", "admin"),
  AuthController.updateMyAccountInFo
);
router.put(
  "/userRole/:id",
  auth("admin"),
  AuthController.updateUserRole
);

export const authRouter = router;
