import mongoose from "mongoose";

export const connectDB = async () => {
    const mongoURI = process.env.MONGO_URI;
    if (!mongoURI) {
        console.error("MongoDB URI is missing");
        process.exit(1);
    }
    console.log(mongoURI);
    
    await mongoose.connect(mongoURI).then(()=>console.log("DB Connected"));
}