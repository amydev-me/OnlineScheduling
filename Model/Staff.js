const mongoose=require('mongoose');

const StaffSchema=new mongoose.Schema({
    staff_name:{
        type: String,
        required: true
    },
    postal_code:{
        type: String,
        required: true
    },
    unit_no :{
        type : String,
        required : true
    },
    street_name :{
        type : String,
        required : true
    },
    status : {  
        type : String,
        required : true,
        default : 'FB'
    }
});

module.exports=new mongoose.model("staff", StaffSchema);