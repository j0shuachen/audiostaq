import {connect} from 'react-redux';
import MovieIndex from './movie_index';
import {fetchMovies, fetchMovie, createMovie} from '../../actions/movie_actions';
import {createRating, fetchRatings} from '../../actions/rating_actions';

const mapStateToProps = (state, {match}) => {
  return {

    currentUser: state.session.currentUser,
    movies: state.movie,
    ratings: state.rating,
    errors: state.movie.errors
  };
};

const mapDispatchToProps = dispatch => ({
  fetchMovie: id => dispatch(fetchMovie(id)),
  fetchMovies: (data) => dispatch(fetchMovies(data)),
  createMovie: (data) => dispatch(createMovie(data)),
  createRating: (data) => dispatch(createRating(data)),
  fetchRatings: (data) => dispatch(fetchRatings(data))

});

export const MovieIndexContainer =  connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieIndex);
