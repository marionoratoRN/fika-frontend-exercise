import React from 'react';
import PropTypes from "prop-types";
import {GenreTagContainer, GenresContainer, GenreLabel} from './Genres.styles';

export const GenresComponent = ({genres}) => {
    return (
        <GenresContainer>
            {genres.map((genre) => {
                return (
                    <GenreTagContainer id={genre.id}>
                        <GenreLabel>{genre.name}</GenreLabel>
                    </GenreTagContainer>
                )
            })}
        </GenresContainer>
    )
}

GenresComponent.propTypes = {
    genres: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number.isRequired, name: PropTypes.string.isRequired})),
}
