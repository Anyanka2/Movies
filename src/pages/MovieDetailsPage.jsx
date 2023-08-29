import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';
import { fetchMovieDetails, IMG_URL } from 'services/TMDB.API';
import { Button, Wrapper, Poster, MovieCard, Info, Title, Header, TextData } from './Pages.styled';

const CastPage = lazy(() => import('components/Cast/Cast'));
const ReviewsPage = lazy(() => import('components/Reviews/Reviews'));

const MovieDetails = () => {
  const [movieDet, setMovieDet] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieDetailsData = async () => {
      try {
        setIsLoading(true);

        const getMovieDetails = await fetchMovieDetails(movieId);

        setMovieDet(getMovieDetails);
      } catch (error) {
        setError(error.message);
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetailsData();
  }, [movieId]);

  const { title, release_date, poster_path, vote_average, overview, genres } =
    movieDet ?? {};

  const releaseYear = release_date ? release_date.split('-')[0] : '';

  return (
    <>
      {error && <p>Whoops, something went wrong: {error}</p>}
      {isLoading && <Loader />}
      {movieDet && (
        <Wrapper>
          <Link to={backLink.current}>
            <Button> Go back </Button>
          </Link>
          <div>
            <MovieCard>
              <Poster
                src={
                  poster_path
                    ? `${IMG_URL}${poster_path}`
                    : `https://img.freepik.com/premium-vector/funny-angry-grumpy-black-cat-watercolor-vector_878932-39.jpg?size=626&ext=jpg&ga=GA1.1.2050841542.1692818493&semt=ais`
                }
                alt={title}
              />
              <Info>
                <Title>
                  {title} ({releaseYear})
                </Title>
                <Header>User score: {Math.round(vote_average * 10)}%</Header>
                <TextData>
                 <b>Overview</b><br/> {overview}
                </TextData>
                <Header>Genres:</Header>
                <TextData>{genres.map(genre => genre.name).join(' ')}</TextData>
              </Info>
            </MovieCard>
            <Header>Additional information</Header>
            <div>
              <NavLink to="cast"><Button>Cast</Button></NavLink>
              <NavLink to="reviews"><Button>Reviews</Button></NavLink>
            </div>
            <div>
              <Suspense fallback={<Loader />}>
                <Routes>
                  <Route path="cast" element={<CastPage />} />
                  <Route path="reviews" element={<ReviewsPage />} />
                </Routes>
              </Suspense>
            </div>
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default MovieDetails;
