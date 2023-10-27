const mongoose = require("mongoose");




const workoutSchema = new mongoose.Schema(
    {
        title:{
            type : String,
            required : true,
            minLength : [4,'The title should have a minimum of 4 characters'],
            maxLength :[20,'The title should have a maximum of 20 characters']
        },
        reps:{
            type : Number,
            required : true,
        },
        load:{
            type : Number,
            required : true,
        },
        user_id:{
            type:String,
            required:true,
        },
        createdAt:{
            type:Number,
            default:Date.now()
        }
    }
)
workoutSchema.pre('save',function (next) {
    if (this.isNew) {
        this.createdAt = Date.now();
    }
    next();
});

module.exports = mongoose.model('Workout',workoutSchema);