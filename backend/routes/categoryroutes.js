import experss from 'express'
import { category } from '../controller/categoryController.js'

const router = experss.Router()


router.get('/catgeory/:cat',category)

export default router;