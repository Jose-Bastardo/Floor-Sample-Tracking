import mongoose from 'mongoose'
import connectDB from '../config/db.js'

connectDB()
const schema = new mongoose.Schema({})
const Samples = mongoose.model('Samples', schema, 'Samples');

export default Samples;
