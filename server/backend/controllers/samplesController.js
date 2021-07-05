import Samples from '../models/samplesModel.js'
import asyncHandler from 'express-async-handler'

//getUsers function to get all users
export const getSamples = asyncHandler(async(req, res) => {
    const samples = await Samples.find({})
    res.json(samples)
})

//getUserById function to retrieve user by id
export const getSampleById  = asyncHandler(async(req, res) => {
    const sample = await Samples.findById(req.params.id)

    //if user id match param id send user else throw error
    if(sample){
        res.json(sample)
    }else{
        res.status(404).json({message: "User not found"})
        res.status(404)
        throw new Error('User not found')
    }
})
