import {api} from "../config/http"

export class MoviesService{
    //Busca de Filmes Populares
    static getMovies(){
        return api.get("movie/popular");
    }

    //Busca do detalhes de um filmes
    static getMoviesDetail(movieId){
        return api.get(`movie/${movieId}`)
    }
}