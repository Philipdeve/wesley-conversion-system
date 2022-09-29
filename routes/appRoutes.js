import express from 'express'
const router = express.Router()

import {homepage, transferPage} from '../controllers/appController.js'

router.route('/').get(homepage)
router.route('/transfer').get(transferPage)


export default router