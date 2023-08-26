import { useEffect, useState } from "react";
import { MoviesList } from "../components/MoviesList/MoviesList";
import { MoviesService } from "../api/MoviesService";

export function Home(){
    const [movies, setMovies] = useState([]);
    
    /*async function fetchMovies() {
        const {data} = await MoviesServices.getMovies();
        setMovies(data.results)
    }

    useEffect(() => {
        fetchMovies();
    }, [])*/

    useEffect(() => {
        MoviesService.getMovies()
        .then(({data}) => setMovies(data.results));
    }, [])

    return(
        <>
            <MoviesList movies={movies}/>
        </>
    )
}