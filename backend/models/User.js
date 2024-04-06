const mongoose = require('mongoose');


const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    emali: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required:true
    }
});
module.exports = mongoose.model('user',UserSchema)