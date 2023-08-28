import {api} from "../config/http"

export class MoviesService{
    //Busca de Filmes Populares
    static getMovies(){
        return api.get("movie/popular");
    }

    //Busca do detalhes de um filmes
    static getMovieDetail(movieId){
        return api.get(`movie/${movieId}`)
    }
}