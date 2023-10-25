const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const userSchema = new mongoose.Schema(
    {
        email:{
            type: String,
            required: true,
            unique: true
        },
        password:{
            type: String,
            required: true,
        }
    }
)

userSchema.statics.signup = async function ( email , password ) {
    if(!email || !password){
        throw new Error('Email and password are needed!');
    }
    if(!validator.isEmail(email)){
        throw new Error("Please enter a valid email!");
    }

    if(!validator.isStrongPassword(password)){
        throw new Error("Please enter a strong password!");
    }

    const exists = await this.find({email});

    if(exists.length > 0){
        throw new Error('Email address already used!');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await this.create({email,password:hashedPassword});

    return user;
}


userSchema.statics.login = async function ( email , password) {
    if(!email || !password){
        throw new Error('Email and password are needed!');
    }
    
    const user = await this.findOne({email});
    
    
    if(!user){
        throw new Error("Email or Password is wrong!");    
    }

    console.log(user);

    const checkPassword = await bcrypt.compare(password,user.password);

    if(!checkPassword){
        throw new Error("Email or Password is wrong!");    
    }
    return user;
}


module.exports = mongoose.model('User',userSchema);