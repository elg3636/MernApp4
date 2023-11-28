import mongoose from "mongoose";
const {Schema} = mongoose;

/** mongoDB question model structure */
const questionModel= new Schema({
    questions : { type : Array, default: []},
    answers : { type: Array, default:[]},
    createdAt : {type : Date, default: Date.now}
});

export default  mongoose.model('Question', questionModel)

