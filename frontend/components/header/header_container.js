import { connect } from 'react-redux';
import { login, logout, signup} from '../../actions/session_actions';
import Header from './header';

const mapStateToProps = ({ session }) => {
  // console.log(session);
  return {
    loggedIn: Boolean(session.currentUser),
    // errors: session.errors,
    currentUser: session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => ({
  logout: ()=> dispatch(logout()),
  login: user => dispatch(login(user))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Header);
