const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema(
    {
        title:{
            type : String,
            required : true,
            unique : true,
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