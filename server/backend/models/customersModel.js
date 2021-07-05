import mongoose from 'mongoose'
import connectDB from '../config/db.js'

connectDB()
const schema = new mongoose.Schema({})
const Customers = mongoose.model('Customers', schema, 'Customers');

export default Customers;
