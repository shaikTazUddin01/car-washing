import express from 'express'
import { AuthController } from './auth.controller';



const router=express.Router()

router.post('/signup',AuthController.signUpAuth)
router.post('/login',AuthController.loginAuth)

export const authRouter= router;