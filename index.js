import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import movieRouter from "./routes/movie.route.js";
import { deleteMovie } from "./controllers/movie.controller.js";

dotenv.config();
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

// test route
app.get("/test", (req, res) => {
  console.log("✅ /test route hit");
  res.json({ message: "Server is working fine!" });
});

//apis
app.use("/api/movies", movieRouter);
app.use("/api/movies/:id", deleteMovie);

const PORT = process.env.PORT || 3000;


app.listen(3000,()=>{
    connectDB();
    console.log(`server started at port ${PORT} `);
})