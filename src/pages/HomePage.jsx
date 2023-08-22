import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../services/TMDB.API';
import { toast } from 'react-toastify';

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
    <div>
      <h1>Trending today</h1>
      
    </div>
  );
};

export default HomePage;