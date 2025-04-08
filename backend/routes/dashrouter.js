import express from 'express'
import { bookingDetailsPage, DashData, filtering } from '../controller/DashController.js'


const router = express.Router()


router.get('/',DashData)
router.get('/:id',bookingDetailsPage)
router.get('/fil/:fil',filtering)
export default router;