const express = require("express");
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require("./config/connectdb.js");
const fileRoutes = require('./Routes/fileRoutes.js'); 
const cors = require('cors');
const app = express();


const port=process.env.PORT
const DATABASE_URL=process.env.DATABASE_URL

console.log(DATABASE_URL)
connectDB(DATABASE_URL)
// app.use('/', (req,res,next)=>{
//     app.send("hello")
// })

app.use(cors())
app.use(express.json());

app.use('/api', fileRoutes);



app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})