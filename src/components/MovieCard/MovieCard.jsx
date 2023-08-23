import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IMG_URL } from 'services/TMDB.API';

export const MovieCard = ({ poster_path, title, id }) => {
  const location = useLocation();
  return (
    <Link state={{ from: location }} to={`/movies/${id}`}>
      <li>
        <img
          src={poster_path ? `${IMG_URL}${poster_path}` : `${IMG_URL}`}
          alt={title}
        />
        <div>
          <p>{title}</p>
        </div>
      </li>
    </Link>
  );
};
MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  poster_path: PropTypes.string,
};
