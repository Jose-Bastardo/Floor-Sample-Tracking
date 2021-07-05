import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        //database Name
        const con = await mongoose.connect(`mongodb+srv://employee:employeepassword@cluster0.fiiqv.mongodb.net/Database?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
        console.log(`Database connected : ${con.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB;
