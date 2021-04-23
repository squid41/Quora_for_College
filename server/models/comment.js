import mongoose from 'mongoose';

const commentSchema = mongoose.Schema({

    message: String,
    id:String,
    name: String, 
    creator: String,

 
})

var Comment = mongoose.model('Comments', commentSchema);

export default Comment;