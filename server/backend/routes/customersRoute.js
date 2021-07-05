import { getCustomers, getCustomerById } from "../controllers/customersController.js"
import express from 'express'
const router = express.Router()


// express router method to create route for getting all users
router.route('/').get(getCustomers)

// express router method to create route for getting users by id
router.route('/:id').get(getCustomerById)

export default router
