import mongoose from "mongoose";


const commentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
}, { timestamps: true });



const Comment = mongoose.model("Comment", commentSchema);


export default Comment;