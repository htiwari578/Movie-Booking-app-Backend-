import Movie from "../models/movie.model.js";
import movieService from "../services/movie.service.js";

const errorResponseBody = {
    err: {},
    data: {},
    message: "Something went wrong,unable to fetch movie",
    success: false
}
const successResponseBody = {
    data: {},
    message: "Movie fetched successfully",
    success: true
}

export const createMovie = async (req, res) => {
    try {
      
        const movie = await Movie.create(req.body);
       

        return res.status(201).json({
            success: true,
            message: "Movie created successfully",
            data: movie
        });
    } catch (error) {
        console.error("Error creating movie:", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

export const deleteMovie = async (req, res) => {
    try {
        const response = await Movie.deleteOne({_id: req.params.id});
        return res.status(200).json({
            success: true,
            message: "Movie deleted successfully",
            data: response
        });
    } catch (error) {
        console.error("Error deleting movie:", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
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

