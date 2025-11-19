import Movie from "../models/movie.model.js";
import movieService from "../services/movie.service.js";
import { errorResponseBody, successResponseBody } from "../utils/responsebody.js";



export const createMovie = async (req, res) => {
    try {
      
        const movie = await movieService.createMovie(req.body);
       

        successResponseBody.data = movie;
        successResponseBody.message = "Movie created successfully";
        return res.status(201).json(successResponseBody);
    } catch (error) {
        console.error("Error creating movie:", error);
        return res.status(500).json(errorResponseBody);
    }
}

export const deleteMovie = async (req, res) => {
    try {
        const response = await movieService.deleteMovie(req.params.id);
        successResponseBody.data = response;
        successResponseBody.message = "Movie deleted successfully";
        return res.status(200).json(successResponseBody);
       
    } catch (error) {
        console.error("Error deleting movie:", error);
        return res.status(500).json(errorResponseBody);
    }
}
export const getMovie = async(req,res)=>{
    try {
        const response = await movieService.getMovieById(req.params.id);
        if(response.err){
            errorResponseBody.err = response.err;
            return res.status(response.code).json(errorResponseBody);
        }
        successResponseBody.data = response;
        return res.status(200).json(successResponseBody);
    } catch (error) {
        console.error("Error fetching movie:", error);
        return res.status(500).json(
            errorResponseBody
        );
    }
}

