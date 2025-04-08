import express from 'express'
import { bookingDetailsPage, DashData } from '../controller/DashController.js'


const router = express.Router()


router.get('/',DashData)
router.get('/:id',bookingDetailsPage)

export default router;