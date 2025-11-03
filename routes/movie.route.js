import express from "express";
import { createMovie, deleteMovie, getMovie } from "../controllers/movie.controller.js";

const movieRouter= express.Router();


movieRouter.post("/create",createMovie);
movieRouter.delete("/deleteMovie",deleteMovie);
movieRouter.get("/getMovie/:id",getMovie);

export default movieRouter;




