import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import Welcome from './welcome';
import Header from './header/header_container';
import { LogInContainer, SignUpContainer} from './session/session_container';

const App = () => (

  <div className='window'>
    <div className='header'>
      <div className='h-left'>
        <Link to='/home' className='header-logo'>NetMix</Link>
      </div>
      <Header/>
    </div>
    <Switch>
      <Route path='/login' component={ LogInContainer }/>
      <Route path='/signup' component={ SignUpContainer }/>
      <Route path='/' component={ Welcome }/>


    </Switch>
      <div className='footer'>
        <div id='h-row' className='b-row'>
          <div className='f-link'>about</div>
          <div className='f-link'>contact</div>
        </div>
      </div>
  </div>

);


export default App;
