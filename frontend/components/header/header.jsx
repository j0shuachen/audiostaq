import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };
    this.demo = this.demo.bind(this);
  }

  demo(){
      this.props.login({user: {username: 'guest_user', password: 'guest_user'}}).then(() => this.props.history.push('/home'));
  }

  render(){
    // console.log(this.props.history);
    // console.log(this.props);

    const personalGreeting = (currentUser, logout) => (
      <div id='h-row' className="b-row">
        <div className='b-row' to={`/profiles/${currentUser.id}`}>
          <img id='small' className='icon' src='https://res.cloudinary.com/dxeyfggji/image/upload/v1516396806/avatar-inside-a-circle.svg'/>
          <div className='greeting-name'>{'Hi, ' + currentUser.username + '!'}</div>
        </div>
        <Link to="/" className="b-button" onClick={logout}> Log Out </Link>
      </div>
    );

    const sessionLinks =() =>{
      return (
        <div id='h-row' className="b-row">
          <div className='b-button' onClick={this.demo}>demo</div>
          <Link to="/login" id='h-button' className="b-button"> login </Link>
          <Link to="/signup" id='h-button' className="b-button"> signup </Link>
        </div>
      );
    };

    const {currentUser, logout} = this.props;
      return (
        currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
        );
      }
    }

export default withRouter(Header);
