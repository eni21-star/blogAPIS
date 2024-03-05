const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://eniolaolagbegi:3dThbH1PUhEpF4jD@nodes.rjnswvt.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("connected to database successfully");
})
.catch(()=>{
  console.log("error while connecting to the database");
})

const schema = new mongoose.Schema({
    blogText: {
        type: String,
        required: true
    },
    blogTitle: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    url: {
        type: String

    }
})

const model =  mongoose.model("myblog", schema);

module.exports = model;