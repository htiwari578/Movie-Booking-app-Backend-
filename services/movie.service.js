import Movie from "../models/movie.model.js";

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

export default { getMovieById };