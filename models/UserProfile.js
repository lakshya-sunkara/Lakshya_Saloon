const mongoose=require('mongoose')

const createUserProfile=new mongoose.Schema({
        username:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        name:{
            type:String,
            required:true,
        },
        phone:{
            type:Number,
            required:true,
        },
        address:{
            type:String,
            
        },
        gender:{
            type:String,
            
        },
        dob:{
            type:Date,
        }

})
module.exports=mongoose.model('UserProfile',createUserProfile)