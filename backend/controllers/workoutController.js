const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

// get all workouts

const getAllWorkouts = async (req,res) => {
    try{
        const workouts = await Workout.find({user_id:req.user}).sort({createdAt: -1});
        res.status(200).json(workouts);
    }
    catch(err){
        res.status(404).json({error:err.message});
    }
}

// get a single workout

const getWorkout = async (req,res) => {
    try{
        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            res.status(404).json({error:"Invalid Id"});
        }
        const workoutDoc = await Workout.findById(req.params.id);
        if(!workoutDoc){
            throw new Error("No such workout");            
        }
        res.status(200).json(workoutDoc);
    }
    catch(err){
        res.status(404).json({error:err.message});
    }
}
// update a single workout

const updateWorkout = async (req,res) => {
    try{
        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            res.status(404).json({error:"Invalid Id"});
        }
        const workoutDoc = await Workout.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});
        if(!workoutDoc){
            throw new Error("No such workout");            
        }
        res.status(201).json(workoutDoc);
    }
    catch(err){
        res.status(400).json({error:err.message});
    }

}

// delete a single workout

const deleteWorkut = async (req,res) => {
    try{
        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            res.status(404).json({error:"Invalid Id"});
        }
        const workoutDoc = await Workout.findByIdAndDelete(req.params.id);
        if(!workoutDoc){
            throw new Error("No such Workout");
        }
        res.status(204).json();
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
}

// add a new workout
const addWorkout = async (req,res) => {
    try{
        const {title,load,reps} = req.body;
        let emptyFields = [];
        if(!title){
            emptyFields.push('title');
        }
        if(!load){
            emptyFields.push('load');
        }
        if(!reps){
            emptyFields.push('reps');
        }
        if(emptyFields.length > 0){
            return res.status(400).json({error:"Please fill all input fields",emptyFields});
        }
        if(Number(load)<0 || Number(reps)<0){
            return res.status(400).json({error:"Please enter positive value in load and reps",emptyFields});
        }
        
        const user_id = req.user;
        const workoutDoc = await Workout.create({title,load,reps,user_id});
        res.status(201).json(workoutDoc);
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
}
module.exports={
    getAllWorkouts,
    getWorkout,
    addWorkout,
    deleteWorkut,
    updateWorkout
}