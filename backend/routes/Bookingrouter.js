import express from 'express'
import { verifyToken } from '../middelware/authtoken.js'
import { Booking, getBookings } from '../controller/Bookings.js'

const router = express.Router()


router.post('/book/:id',verifyToken,Booking)
router.get('/my-bookings',verifyToken,getBookings)

export default router