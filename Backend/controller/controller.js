
/** question and result schema */
import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";

/** import questions data */
import questions, {answers} from '../database/data.js';

/** function to get questions */
export async function getQuestions(req,res){
    try {
        const q = await Questions.find();
        res.json(q)
    } catch (error) {
        res.json({error})
        
    }
}

/** function to insert questions */
export async function insertQuestions(req, res) {
    try {
        await Questions.insertMany({ questions: questions, answers: answers });
        res.json({ msg: "Data saved" });
    } catch (error) {
        res.json({ error });
    }
}

/** function to delete questions */
export async function dropQuestions(req, res){
    try {
        await Questions.deleteMany();
        res.json({msg: "Questions deleted"})
    } catch (error) {
        res.json({error})
        
    }
    
}

/** function get results */
export async function getResult(req,res){
    try {
        const r = await Results.find()
        res.json(r)
        
    
    } catch (error) {
        res.json({error})
    }
}


/** function to post results to DB*/
export async function storeResult(req, res){
    try {
        const {username, result, points, achieved}=req.body;
        /** if there is no username or result */
        if(!username && !result) throw Error('No data provided');
        
        await Results.create({username, result, points, achieved});
        res.json({ msg: "Result saved" });
    } catch (error) {
        res.json({error})
        
    }
}

/** function to delete results */
export async function dropResult(req, res){
    try {
       await Results.deleteMany();
       res.json({ msg: "Result deleted"})
    } catch (error) {
        res.json({error})
        
    }
}