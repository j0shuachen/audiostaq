import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import MovieReducer from './movie_reducer';
import RatingReducer from './rating_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  movie: MovieReducer,
  rating: RatingReducer

});

export default RootReducer;
