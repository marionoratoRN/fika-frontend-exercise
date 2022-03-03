export default async function fetchGenres(){
  try {
    const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US')
    const genres = await response.json();
    return genres.genres;
  } catch (error) {
    throw new Error(error);
  }
}