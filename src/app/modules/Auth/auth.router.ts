import express from 'express'
import { AuthController } from './auth.controller';
import validateRequest from '../../middlewares/validationRequest';
import { AuthValidation } from './auth.validation';



const router=express.Router()

router.post('/signup',validateRequest(AuthValidation.signUpValidationSchema),AuthController.signUpAuth)
router.post('/login',validateRequest(AuthValidation.logInValidationSchema),AuthController.loginAuth)

export const authRouter= router;