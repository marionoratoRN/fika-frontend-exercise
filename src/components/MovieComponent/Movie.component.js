import React from 'react';
import PropTypes from 'prop-types';
import {MovieImage, MovieTitle, ItemContainer} from './Movie.styles'
import {Text, View} from "react-native";

export const MovieComponent = ({imageUrl, title, genres}) => {
    return (
            <MovieImage source={{uri: `https://image.tmdb.org/t/p/w500/${imageUrl}`}}>
                <View style={{backgroundColor: '#000000AA', padding: 5}}>
                <MovieTitle>{title}</MovieTitle>
                    <View style={{flexWrap: 'wrap', flexDirection:  'row'}}>
                    {genres.map((genre) => {
                        return (
                            <View style={{backgroundColor: 'grey', padding: 4, marginRight: 5, borderRadius: 5, marginBottom: 5}}>
                                <Text style={{color: 'white', fontSize: 12}}>{genre.name}</Text>
                            </View>
                        )
                    })}
                    </View>
                </View>
            </MovieImage>

    )
}

MovieComponent.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired
}
