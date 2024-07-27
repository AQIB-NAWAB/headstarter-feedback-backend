import mongoose from "mongoose";


const commentSchema = new mongoose.Schema({
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