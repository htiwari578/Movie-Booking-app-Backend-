import express from "express";
import { createMovie, deleteMovie } from "../controllers/movie.controller.js";

const movieRouter= express.Router();


movieRouter.post("/create",createMovie);
movieRouter.delete("/deleteMovie",deleteMovie);
   

export default movieRouter;




