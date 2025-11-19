import Movie from "../models/movie.model.js";

const createMovie = async (data) => {
    const movie = await Movie.create(data);
    return movie;
}

const deleteMovie = async (id) => {
    const response =await Movie.findByIdAndDelete(id);
    return response;
}

const getMovieById = async(id) => {
    const movie = Movie.findById(id);
    if(!movie){
        return{
            err: "Movie not found",
            code: 404,
          
        }
    };
    return movie;

}

export default { getMovieById, createMovie , deleteMovie };