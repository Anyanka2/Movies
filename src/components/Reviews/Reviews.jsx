import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/TMDB.API';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const { results } = await fetchMovieReviews(movieId);
        setReviews(results);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        toast.error(`Error fetching movie details: ${error}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <>
      {reviews.length !== 0 && (
        <div>
          <h2>Movie Reviews</h2>
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <p>{review.author}</p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {reviews.length === 0 && (
        <div>We don't have any reviews for this movie.</div>
      )}
      {error && (
        <p>Whoops, something went wrong: {error}</p>
      )}
       {isLoading && <Loader />}
    </>
  );
};

export default Reviews;


