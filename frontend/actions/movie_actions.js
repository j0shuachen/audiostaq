import * as APIUtil from '../util/movie_api_util';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_MOVIE = 'RECEIVE_MOVIE';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';


export const receiveMovie = movie =>({
  type: RECEIVE_MOVIE,
  movie
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const receiveMovies = movies =>({
  type: RECEIVE_MOVIES,
  movies
});


export const fetchMovie = id => dispatch => (
  APIUtil.fetchMovie(id).then(movie => (
    dispatch(receiveMovie(movie))
  ))
);

export const fetchMovies = (filters) => dispatch => (
  APIUtil.fetchMovies(filters).then(movie => (
    dispatch(receiveMovies(movie))
  ))
);


export const createMovie = movie => dispatch => (
  APIUtil.createMovie(movie).then(resp => (
    dispatch(receiveMovie(resp))
  ))
);
