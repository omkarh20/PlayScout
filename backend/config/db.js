import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://omkarhegde20:2015350199@cluster0.iewrs.mongodb.net/PlayScout').then(()=>console.log("DB Connected"));
}