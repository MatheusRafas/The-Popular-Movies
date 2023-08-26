import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MoviesService } from "../api/MoviesService"
import { MovieImage } from "../components/MovieImage/MovieImage";

export function MovieDetails(){
    const [movie, setMovie] = useState({})
    const params = useParams();

    useEffect(() => {
        MoviesService.getMovieDetail(params.movieId)
            .then(({data}) => setMovie(data))
    }, [params.movieId])
    
    return (
        <article>
            <h1>{movie.title}</h1>
            <MovieImage path={movie.poster_path} size={500}/>
        </article>
    )
}