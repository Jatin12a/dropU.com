const mongoose = require('mongoose');


function connect(){
    mongoose.connect(process.env.DB, {
        }).then(()=>{
            console.log('Connect to Database')
        }).catch(err=>console.log(err))
        
}
module.exports = connect;