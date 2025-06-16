const mongoose=require('mongoose')

const createAppointment=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        
    },
    category:{
        type:String,
        required:true
    },
    style:{
        type:String,
        required:true
    },
    appointment_date:{
        type:Date,
        required:true   
        },
        time_slot:{
            type:String,
            required:true
            },
            status: {
  type: String,
  enum: ['Pending', 'Done', 'Rejected'],
  default: 'Pending'
}

})

createAppointment.index({ email: 1, appointment_date: 1, time_slot: 1 }, { unique: true });
module.exports=mongoose.model('Appointment',createAppointment)