// Base URL
const base_url = "https://api.themoviedb.org/3/"

// API key
const api_key = "?api_key=071ce681b55d266fc25275521d0d8eaf";

// Language with  first page
const language_and_first_page = `&language=es-ES&page=1`;

// Language only
const language_es = `&language=es-ES`;

// Pagination
const pagination = `&page=`;

// Recent movies
const new_movies =  `movie/now_playing`;

// Popular movies
const popular_movies = `movie/popular`;

// Top rated movies
const rated_movies = `movie/top_rated`;

// Upcoming movies
const upcoming_movies = `movie/upcoming`;

// Search movie
const search_movie = `search/movie`;

// Pagination
const pagination_movie = `movie/now_playing`;

// Routes API
export const newMoviesGet = () => `${ base_url }${ new_movies }${ api_key }${ language_and_first_page }`;
export const popularMoviesGet = () => `${ base_url }${ popular_movies }${ api_key }${ language_and_first_page }`;
export const ratedMoviesGet = () => `${ base_url}${ rated_movies }${ api_key }${ language_and_first_page }`;
export const upcomingMoviesGet = () => `${ base_url }${ upcoming_movies }${ api_key }${ language_and_first_page }`;
export const similarMoviesGet = ( id ) => `${ base_url }movie/${ id }/similar${ api_key }${ language_and_first_page }`;
export const detailMovieGet = ( id ) => `${ base_url }movie/${ id }${ api_key }${ language_and_first_page }`;
export const searchMovieGet = ( query ) => `${ base_url }${ search_movie }${ api_key }${ language_and_first_page }&query=${ query }/&include_adult=false`;
export const paginationMovieGet = ( page ) => `${ base_url }${ pagination_movie }${ api_key }${ language_es }${ pagination }${ page }&include_adult=false`;
export const videoMovieGet = ( id ) => `${ base_url }movie/${ id }/videos${ api_key }${ language_es }`;
export const castMovieGet = ( id ) => `${ base_url }movie/${ id }/credits${ api_key }`;





