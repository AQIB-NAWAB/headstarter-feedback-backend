import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import { connectDB } from "./connectDB.js"
import Update from "./models/update.js"
import Comment from "./models/comment.js"


const app = express()
app.use(express.json());

app.use(cors(
    {
        origin: "https://headstarter-feedback.vercel.app"
    }
));

dotenv.config()


connectDB();




app.get("/api/comments",async (req,res) => {

    const comments = await Comment.find({}).sort({createdAt: -1});
    
    res.json(comments);
});

app.get("/api/updates",async (req,res) => {
    const updates = await Update.find({}).sort({createdAt: -1}).limit(10);
    res.json(updates);
})


app.post("/api/comments",async (req,res) => {

    const { comment, type,title } = req.body;

    const newComment = new Comment({
        comment,
        type,
        title
    })
    ;


    const savedComment = await newComment.save();


    res.json(savedComment);

});



app.post("/api/updates",async (req,res) => {

    const { heading, description } = req.body;

    const newUpdate = new Update({
        heading,
        description
    });

    const savedUpdate = await newUpdate.save();


    res.json(savedUpdate);

});





app.listen(5000, () => {
    console.log("Server is running on port 5000")
})



