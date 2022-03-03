export default function cleanMovieObject(movie) {
  delete movie.adult;
  delete movie.original_language;
  delete movie.overview;
  delete movie.popularity;
  delete movie.release_date;
  delete movie.video;
  delete movie.vote_average;
  delete movie.vote_count;
  delete movie.original_title;
  delete movie.backdrop_path
  return movie;
}