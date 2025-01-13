const dotenv = require('dotenv');
dotenv.config();
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const app = express();
const connectToDB = require('./db/dbconnect');
const userRoutes = require('./routes/userRoutes')
const driverRoutes= require('./routes/driverRoutes')
const mapsRoutes = require('./routes/mapRoutes')

connectToDB();



app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());


app.use('/users',userRoutes)
app.use('/driver',driverRoutes)
app.use('/maps',mapsRoutes)

module.exports = app;