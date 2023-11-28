import mongoose from "mongoose";
const {Schema} = mongoose;

/** mongoDB result model structure */
const resultModel= new Schema({
    username : {type: String},
    result : {type: Array, default: []},
    points : {type: Number, default: 0},
    achieved: {type: String, default : ''},
    createdAt: {type: Date, default: Date.now}
})

export default mongoose.model('result', resultModel);