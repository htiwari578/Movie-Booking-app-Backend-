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
        const movie=await Movie.findById(req.params.id);
        return res.status(200).json({
            success:true,
            message:"Movie fetched successfully",
            data:movie
        });
    } catch (error) {
        console.error("Error fetching movie:", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}