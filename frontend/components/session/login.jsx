import React from 'react';
import { Link, withRouter} from 'react-router-dom';

class LogInForm extends React.Component {
  constructor(props){
    super(props);
    // console.log(this.props);
    this.state = {
      username: '',
      password: '',
      log_error: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user}).then(()=>this.props.history.push('/welcome'));
  }

  navLink(){
    if (this.props.formType === 'login'){
      return <Link className="n-button" to="/signup">Sign Up</Link>;
    }else{
      return <Link className="n-button" to="/login">Log In</Link>;
    }
  }

  renderErrors(er){
    // if(this.props.errors){
    const ar = {};
    er.forEach((g, idx) =>{
      if(g === 'Invalid username/password combination'){
        this.setState({log_error: g});
      }
    });
  }

  componentWillReceiveProps(nextProps){
    if(this.props.errors !== nextProps.errors){
      this.renderErrors(nextProps.errors);
    }
  }

  render () {
    return (
      <div id='login-c' className="container">
        <img id='s-bi' className='fade' src='http://res.cloudinary.com/dxeyfggji/image/upload/v1519431115/Cx7osdeRz.jpg'/>
        <div id='login-fb' className="fade">
          <div className="form-top">Login</div>
          <div className="form-body">
            <label id='form-c' className="column">
              <div className="inp-tag">Username</div>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="signup-input"/>
            </label>
            <label id='form-c' className="column">
              <div className="inp-tag">Password</div>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signup-input"/>
            </label>
            {this.state.log_error  === '' ? null: <div className='error'>{this.state.log_error}</div>}
          </div>
          <div className="s-button" onClick={this.handleSubmit}>Log In</div>
          <div id='welcome-col' className="column">
            <div className="f-print">Not a member?</div>
            {this.navLink()}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LogInForm);
