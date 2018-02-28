import merge from 'lodash/merge';
import {
  RECEIVE_MOVIE,
  RECEIVE_MOVIES ,
  UPDATE_MOVIE,
  RECEIVE_ERRORS
} from '../actions/movie_actions.js';

const initialState = Object.freeze({
  errors: [],
});

const MovieReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type){
    case RECEIVE_MOVIES:
    // console.log(action);
      return action.movies;
    case RECEIVE_MOVIE:
    // console.log(action.movie);
    return action.movie;
      // const newMovie= {[action.movie.id]: action.movie};
      // return newMovie;
    case RECEIVE_ERRORS:
      const errors = action.errors;
      // console.log(action);

      return merge({}, state, {
        errors
      });
    default:
    return state;
  }
};

export default MovieReducer;
