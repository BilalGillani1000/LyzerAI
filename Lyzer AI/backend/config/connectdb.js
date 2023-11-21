const mongoose=require('mongoose')

const connectDB=async (DATABASE_URL)=>{
    try {

        const DB_OPTIONS = {
            dbName: "Lyris-AI"
        }

        await mongoose.connect(DATABASE_URL,DB_OPTIONS)
        console.log("db connection successful")
        
    } catch (error) {
        console.log(error)
        
    }
}

module.exports = connectDB; // Export the connectDB function
