import React from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import {MovieComponent} from "../MovieComponent";
import PropTypes from "prop-types";
import { MovieListContainer } from './MovieList.styles';

export const MovieListComponent = ({movies, loading}) => {

    const renderItem = ({ item }) => (
        <MovieComponent
            genres={item.genres}
            imageUrl={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            title={item.title}
        />
    );

    if(loading){
        return <ActivityIndicator />
    }

    return (
        <MovieListContainer>
          <FlatList
              data={movies}
              renderItem={renderItem}
              keyExtractor={item => item.id}
          />
        </MovieListContainer>
    )
}

MovieListComponent.propTypes = {
    loading: PropTypes.bool.isRequired,
    movies: PropTypes.arrayOf(PropTypes.shape({
        genres: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number.isRequired, name: PropTypes.string.isRequired})),
        id: PropTypes.number.isRequired,
        poster_path: PropTypes.string.isRequired,
        title: PropTypes.string
    }))
}
