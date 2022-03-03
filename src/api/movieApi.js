import cleanMovieObject from './helpers/movieHelper';

export default async function fetchMovies() {
  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1')
    let movies = await response.json();
    movies = movies.results.map(movie => cleanMovieObject(movie));
    return movies;
  } catch (error) {
    throw new Error(error);
  }
}