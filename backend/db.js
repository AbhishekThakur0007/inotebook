const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/?directConnection=true"

const connectToMongo =async ()=>{
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to Mongo server');
    } catch (error) {
        console.error('Error connecting to Mongo:', error);
    }
}

module.exports = connectToMongo;