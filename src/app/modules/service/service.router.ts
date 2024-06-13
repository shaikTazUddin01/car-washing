import express from 'express'
import { serviceController } from './services.controller';


const router=express.Router()

router.post('/services',serviceController.createService)


export const serviceRouter= router;