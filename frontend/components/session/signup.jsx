import React from 'react';
import { Link, withRouter} from 'react-router-dom';

class SignUpForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navLink= this.navLink.bind(this);
    this.update = this.update.bind(this);
  }

  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    const user = { username: this.state.username, password: this.state.password }
    // console.log(this.state, 'hitting');
    this.props.processForm({user}).then(() => this.props.history.push('/home'));
  }

  navLink(){
    if (this.props.formType === 'login'){
      return <Link className="n-button" to="/signup">Sign Up</Link>;
    }else{
      return <Link className="n-button" to="login">Log In</Link>;
    }
  }


  render(){
    // console.log(this.state);
    return (
      <div id='signup-c' className="container">
        <img id='s-bi' className='fade' src='http://res.cloudinary.com/dxeyfggji/image/upload/v1519431115/Cx7osdeRz.jpg'/>
        <div id='signup-fb' className="fade">
          <div className="form-top"> Sign Up </div>
          <div className='form-body'>
            <label id='form-c' className="form">
              <span className="inp-tag"> Username</span>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="signup-input"
                placeholder=""/>
            </label>
            <label id='form-c' className="form">
              <span className="inp-tag">Password</span>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signup-input"/>
            </label>
          </div>
          {this.state.username !== '' && this.state.password !== '' ? <div className='s-button' onClick={this.handleSubmit}>Continue</div> : <div className='f-button'>Continue</div> }
         <div id='welcome-col' className="column">
           <span className="f-print">By clicking "Continue", you agree to our Terms of Service, Privacy Policy, and Cookie Policy.</span>
            <div className="f-print">Already a member?</div>
            {this.navLink()}
          </div>
        </div>
      </div>
      );
    }
  }

export default withRouter(SignUpForm);
