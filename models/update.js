import mongoose from "mongoose";


const updateSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
}, { timestamps: true });

const Update = mongoose.model("Update", updateSchema);


export default Update;

