import Movie from "../models/movie.model.js";

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