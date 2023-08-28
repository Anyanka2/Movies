import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../services/TMDB.API';
import { toast } from 'react-toastify';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { TrendingTitle, TextError } from './Pages.styled';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        setIsLoading(true);

        const { results } = await fetchTrendingMovies();

        setMovies(results);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMoviesData();
  }, []);

  return (
    <>
      <Header/>
      <TrendingTitle>Trending today</TrendingTitle>
      {error && <TextError>Whoops, something went wrong: {error}</TextError>}
      {movies.length > 0 && <MoviesList movies={movies} />}
      {isLoading && <Loader />}
      <Outlet/>
    </>
  );
};

export default HomePage;
