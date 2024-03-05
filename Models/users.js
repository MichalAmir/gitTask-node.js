
//create user model 
const mongoose = require('mongoose')

const UsersSchema=new mongoose.Schema({
    id:Number,
    name:String,
    email:String,
    phone:String
})
module.exports=mongoose.model('Uswwer',UsersSchema)