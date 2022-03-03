import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {MovieListComponent} from './src/components/MovieListComponent';
import {useMovies} from "./src/hooks/useMovies";
import {AppContainer} from './App.styles';

const App = () => {
  const {loading, movies} = useMovies()
  return (
    <AppContainer>
      <MovieListComponent loading={loading} movies={movies} />
      <StatusBar style="auto" />
    </AppContainer>
  );
}

export default App;
