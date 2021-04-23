import mongoose from 'mongoose';

const questionSchema = mongoose.Schema({

    question: String,
    user:String,
    id:String,
    

 
})

var Question = mongoose.model('Questions', questionSchema);

export default Question;