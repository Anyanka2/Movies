import React from 'react';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, poster_path, title }) => (
        <li key={id} poster_path={poster_path} title={title} id={id}></li>
      ))}
    </ul>
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