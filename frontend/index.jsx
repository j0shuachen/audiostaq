import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if(window.currentUser){
    const preloadedState = { session: { currentUser: window.currentUser}};
    store = configureStore(preloadedState);
    delete window.currentUser;
  }else{
    store=configureStore();
  }
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});

import { signup, fetchUsers } from './util/session_api_util';
import { createMovie, fetchMovies, fetchMovie } from './util/movie_api_util';
import { createRating, fetchRatings, fetchRating } from './util/rating_api_util';

window.signup = signup;
window.fetchUsers = fetchUsers;
window.createMovie = createMovie;
window.fetchMovies = fetchMovies;
window.fetchMovie = fetchMovie;
window.createRating = createRating;
window.fetchRating = fetchRating;
window.fetchRatings = fetchRatings;
