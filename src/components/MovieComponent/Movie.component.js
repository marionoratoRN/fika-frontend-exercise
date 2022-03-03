import React from 'react';
import PropTypes from 'prop-types';
import {MovieContentContainer, MovieImage, MovieTitle} from './Movie.styles'
import {GenresComponent} from "../GenresComponent";

export const MovieComponent = ({imageUrl, title, genres}) => {
    return (
        <MovieImage source={{uri: `https://image.tmdb.org/t/p/w500/${imageUrl}`}}>
            <MovieContentContainer>
            <MovieTitle>{title}</MovieTitle>
                <GenresComponent genres={genres} />
            </MovieContentContainer>
        </MovieImage>

    )
}

MovieComponent.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number.isRequired, name: PropTypes.string.isRequired})),
}
