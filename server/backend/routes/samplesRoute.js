import { getSamples, getSampleById } from "../controllers/samplesController.js"
import express from 'express'
const router = express.Router()


// express router method to create route for getting all users
router.route('/').get(getSamples)

// express router method to create route for getting users by id
router.route('/:id').get(getSampleById)

export default router
