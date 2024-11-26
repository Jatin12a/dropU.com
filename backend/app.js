const dotenv = require('dotenv');
dotenv.config();
const expresss = require('express')
const cors = require('cors')
const app = expresss();

app.use(cors())

app.get("/",(req,res)=>{
    res.send("Hello World");
})

module.exports = app;