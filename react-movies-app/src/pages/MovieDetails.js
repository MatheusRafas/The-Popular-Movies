import { useParams } from "react-router-dom";

export function MovieDetails(){
    const params = useParams();
    
    return (
        <>
            <h2>O id da Página é: {params.movieId}</h2>
        </>
    )
}