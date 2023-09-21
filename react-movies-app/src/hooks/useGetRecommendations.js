import { useState, useEffect } from "react";
import { RecommendationsService } from "../api/RecommendationsService";

export function useGetRecommendations(movieId) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        RecommendationsService.getRecommendationsByMovieId(movieId)
            .then(({data}) => setMovies(data.results))
    }, [movieId])

    return movies;
}