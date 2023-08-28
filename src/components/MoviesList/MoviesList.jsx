import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { MovieList } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  return (
    <MovieList>
      {movies.map(({ id, poster_path, title }) => (
        <MovieCard
          key={id}
          poster_path={poster_path}
          title={title}
          id={id}
        ></MovieCard>
      ))}
    </MovieList>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ).isRequired,
};
