const mongoose=require('../database/db');
const Schema = mongoose.Schema

let userSchema=  new Schema({
    taskName: {
        type: String,
        trim: true,
        // required: true,
    },
    description: {
        type: String,
        trim: true,
        // required: true,
    },
    due: {
        type: Date,
       //  required: true
    },
    status: {
     type: String,
    },
   }, {
    timestamps: true
});   


const User=mongoose.model('User', userSchema);
module.exports= User;