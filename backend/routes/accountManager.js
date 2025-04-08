import express from 'express'
import { getProfile, signIn, signUp, userData } from '../controller/AccountManageController.js'
import { verifyToken } from '../middelware/authtoken.js'


const router = express.Router()


router.post('/signup',signUp)
router.post('/login',signIn)
router.get('/profile',verifyToken, getProfile);

export default router;