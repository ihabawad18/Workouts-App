require("dotenv").config();
const express = require("express");
const cors = require('cors');
const morgan = require("morgan");
const mongoose = require("mongoose");
const workouts = require("./routes/workouts")
const users = require("./routes/users");

const app=express();

// db connection

const connectionString = "mongodb+srv://ihabawad18:<password>@cluster0.kurekmd.mongodb.net/Workouts?retryWrites=true&w=majority";

mongoose.connect(connectionString.replace("<password>",process.env.DB_PASSWORD))
.then(()=>{
    console.log("Connected to DB");
    app.listen(process.env.PORT||4000,
        console.log("Listening on port",process.env.PORT)
    )
})
.catch((err)=>{
    console.log("Something went wrong...");
})


// middlewares

app.use(cors());

app.use(morgan('dev'));

app.use(express.json());

// routes
app.use('/api/v1/workouts',workouts);
app.use('/api/v1/user',users);





