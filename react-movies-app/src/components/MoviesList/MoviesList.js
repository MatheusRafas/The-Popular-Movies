import { MovieItem } from "../MovieItem/MovieItem";
import styles from "./MoviesList.Module.css";

export function MoviesList({movies}){
    return(
        <section className={styles.movies}>
            {movies.map((movie) => <MovieItem key={movie.id} movie={movie} />)}
        </section>
    )
}