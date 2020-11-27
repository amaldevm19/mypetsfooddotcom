const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CategorySchema = new Schema({
    name:{type: String, required:true},
    image:{type: String, required:true},
    show:{type:Boolean, default:true},
    description:{type: String},
},  { timestamps: true })