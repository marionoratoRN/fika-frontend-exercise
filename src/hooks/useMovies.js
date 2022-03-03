import {useEffect, useState} from "react";
import fetchMovies from "../api/movieApi";
import fetchGenres from "../api/genresApi";

const getFormattedMovies = (formattedMovies, genres) => {
    return formattedMovies.map(movie => {
        const movieGenres = movie.genre_ids.map(genre => {
            return genres.find(g => g.id === genre);
        })
        const movieToReturn = {...movie, genres: movieGenres}
        delete movieToReturn.genre_ids;
        return movieToReturn;
    });
}

export const useMovies = () => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const getData = async () => {
            try {
                const movies = await fetchMovies();
                const genres = await fetchGenres();
                const formattedMovies = getFormattedMovies(Object.values({...movies}), genres)
                setMovies(formattedMovies);
                setLoading(false);
            } catch(e){
                console.log(e);
            }
        }
        getData()
    }, [])
    return {loading, movies};
}
