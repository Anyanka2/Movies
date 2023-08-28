import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IMG_URL } from 'services/TMDB.API';
import {MovieListSt, MovieCardImg, MovieCardTitle, MovieCardInfo } from './MovieCard.styled'

export const MovieCard = ({ poster_path, title, id }) => {
  const location = useLocation();
  return (
    <Link state={{ from: location }} to={`/movies/${id}`}>
      <MovieListSt>
        <MovieCardImg
          src={poster_path ? `${IMG_URL}${poster_path}` : `https://img.freepik.com/premium-vector/funny-angry-grumpy-black-cat-watercolor-vector_878932-39.jpg?size=626&ext=jpg&ga=GA1.1.2050841542.1692818493&semt=ais`}
          alt={title}
        />
        <MovieCardInfo>
          <MovieCardTitle>{title}</MovieCardTitle>
        </MovieCardInfo>
      </MovieListSt>
    </Link>
  );
};
MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  poster_path: PropTypes.string,
};
