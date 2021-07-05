import Customers from '../models/customersModel.js'
import asyncHandler from 'express-async-handler'

//getUsers function to get all users
export const getCustomers = asyncHandler(async(req, res) => {
    const customers = await Customers.find({})
    res.json(customers)
})

//getUserById function to retrieve user by id
export const getCustomerById  = asyncHandler(async(req, res) => {
    const customer = await Customers.findById(req.params.id)

    //if user id match param id send user else throw error
    if(customer){
        res.json(customer)
    }else{
        res.status(404).json({message: "User not found"})
        res.status(404)
        throw new Error('User not found')
    }
})
