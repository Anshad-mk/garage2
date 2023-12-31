import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
    at: {type: Date, required: true}
})

const Category = mongoose.model("categories", categorySchema);
export default Category;