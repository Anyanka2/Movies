import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const TREND_URL = `${BASE_URL}/trending/movie/day`;
const SEARCH_URL = `${BASE_URL}/search/movie`;
export const IMG_URL = `https://image.tmdb.org/t/p/w500`;

const API_KEY = '6b52787bc9253c3dcb102231856ebbf2';

const params = {
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
};

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(`${TREND_URL}`, params);
  return data;
};

export const fetchSearchQuery = async movieName => {
  const { data } = await axios.get(`${SEARCH_URL}?query=${movieName}`, params);
  return data;
};

export const fetchMovieDetails = async movie_id => {
  const { data } = await axios.get(`${BASE_URL}/movie/${movie_id}`, params);
  return data;
};

export const fetchMovieCast = async movie_id => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movie_id}/credits`,
    params
  );
  return data;
};
export const fetchMovieReviews = async movie_id => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movie_id}/reviews`,
    params
  );
  return data;
};
