import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  RECEIVE_USER,
  RECEIVE_USERS,
  UPDATE_USER

} from '../actions/session_actions';

const nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer= (state = nullUser, action) =>{
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, nullUser, {
        currentUser
      });
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, nullUser, {
        errors
      });
    case RECEIVE_USER:
    // console.log(action);
      const nex = {profile: action.user};
      const prev = {currentUser: state.currentUser};
    // const user = merge({}, state.currentUser, nex);
      const user = merge({}, prev, nex);
      return user;
    // return action.user;
    case RECEIVE_USERS:
      const prevo = {currentUser: state.currentUser};
      const nexo = {users: action.users};
      const users = merge({}, prevo, nexo);
      return users;
    default:
      return state;
  }
};

export default SessionReducer;
