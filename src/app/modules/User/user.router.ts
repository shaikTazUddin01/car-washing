import express from 'express'
import { userController } from './user.controller';

const router=express.Router()

router.post('/auth/signup',userController.signUpUser)
router.post('/auth/login',userController.loginUser)

export const userRouter= router;