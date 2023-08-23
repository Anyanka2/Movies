import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast, IMG_URL } from 'services/TMDB.API';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const movieCast = async () => {
      try {
        const { cast } = await fetchMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        setError(error.message);
        toast.error(`Error fetching movie details: ${error}`);
      } finally {
        setIsLoading(false);
      }
    };

    movieCast();
  }, [movieId]);

  return (
    <>
      {cast.length !== 0 && (
        <div>
          <h2>Movie Cast</h2>
          <ul>
            {cast.map(actor => (
              <li key={actor.id}>
                <img
                  width="200px"
                  height="300px"
                  src={
                    actor.profile_path
                      ? `${IMG_URL}${actor.profile_path}`
                      : `https://stock.adobe.com/pl/images/portrait-of-a-surprised-cat-scottish-straight/97589769`
                  }
                  alt={actor.original_name}
                />
                <p>{actor.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {cast.length === 0 && <div>We don't have any cast for this movie.</div>}
      {error && <p>Whoops, something went wrong: {error}</p>}
      {isLoading && <Loader />}
    </>
  );
};

export default Cast;
