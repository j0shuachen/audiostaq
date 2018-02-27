import * as APIUtil from '../util/rating_api_util';
export const RECEIVE_RATINGS = "RECEIVE_RATINGS";
export const RECEIVE_RATING = "RECEIVE_RATING";
export const UPDATE_RATING = "UPDATE_RATING";
export const RECEIVE_ERRORS ="RECEIVE_ERRORS";

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
export const receiveRatings = ratings => ({
  type: RECEIVE_RATINGS,
  ratings
});

export const receiveRating= rating =>({
  type: RECEIVE_RATING,
  rating
});

export const fetchRatings = filters => dispatch =>(
  APIUtil.fetchRatings(filters).then(ratings =>(
    dispatch(receiveRatings(ratings))
  ))
);

export const fetchRating= id => dispatch =>(
  APIUtil.fetchRating(id).then(rating =>(
    dispatch(receiveRating(rating))
  ))
);

export const createRating= rating => dispatch => (
  APIUtil.createRating(rating).then(resp => (
    dispatch(receiveRating(resp))
  ))
);

export const updateRating= rating => dispatch => {
  return APIUtil.updateRating(rating).then(resp => {
    dispatch(receiveRating(resp));
  }) ;
};
