import express from 'express'
import { serviceController } from './services.controller';


const router=express.Router()

router.post('/',serviceController.createService)
router.get('/',serviceController.getAllService)
router.get('/:id',serviceController.getSingleService)


export const serviceRouter= router;