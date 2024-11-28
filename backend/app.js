const dotenv = require('dotenv');
dotenv.config();
const express = require('express')
const cors = require('cors')
const app = express();
const connectToDB = require('./db/dbconnect');
const userRoutes = require('./routes/userRoutes')
connectToDB();



app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/users',userRoutes)


module.exports = app;