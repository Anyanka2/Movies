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
            {cast.map(({character, id, name, profile_path}) => (
              <li key={id}>
                <img
                  width="200px"
                  height="300px"
                  src={
                    profile_path
                      ? `${IMG_URL}${profile_path}`
                      : `https://cdn.pixabay.com/photo/2023/01/08/18/39/cat-7705903_1280.png`
                  }
                  alt={name}
                />
                <p>{name}</p>
                <p>Caracter: {character}</p>
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
