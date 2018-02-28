import merge from 'lodash/merge';
import {
  RECEIVE_RATING,
  RECEIVE_RATINGS ,
  UPDATE_RATING,
  RECEIVE_ERRORS
} from '../actions/rating_actions.js';

const initialState = Object.freeze({
  errors: [],
});

const RatingReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type){
    case RECEIVE_RATINGS:
    // console.log(action);
      return action.ratings;
    case RECEIVE_RATING:
    // console.log(action);
    // console.log(action.rating);
    return action.rating;
      // const newRating= {[action.rating.id]: action.rating};
      // return newRating;
    case UPDATE_RATING:
      newState = merge({}, state);
      newState[action.rating.id] = action.rating;
      return newState;
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, {
        errors
      });
    default:
    return state;
  }
};

export default RatingReducer;
