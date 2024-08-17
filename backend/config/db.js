import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://thanhdever:06012002@cluster0.ii7ca.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}