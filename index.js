import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT = process.env.PORT || 3000;


app.listen(3000,()=>{
    connectDB();
    console.log(`server started at port ${PORT} `);
})