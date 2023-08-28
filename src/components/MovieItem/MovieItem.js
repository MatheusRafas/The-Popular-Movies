import { Link } from "react-router-dom";
import styles from "./MovieItem.module.css";
import { MovieImage } from "../MovieImage/MovieImage";

export function MovieItem({movie}){
    return(
        <div className={styles.movie}>
            <h3>{movie.title}</h3>

            <MovieImage path={movie.poster_path}/>

            <div className={styles.movieInfo}>
                <div>
                    <strong>Data de Lançamento:</strong> {movie.release_date}
                </div>
            </div>
            <div className={styles.movieFooter}>
                <Link to={`/movie/${movie.id}`}>Ver Detalhes</Link>
            </div>
        </div>
    )
}