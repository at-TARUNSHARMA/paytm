import mongoose from 'mongoose';
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/paytm");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength:30
    },
    firstname: {
        type: String,
        require: true,
        trim: true,
        maxLength: 50
    },
    lastname: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true,
        minLength: 6
    }
})

const user = new mongoose.model("User", userSchema);

module.exports = {
    user
}
