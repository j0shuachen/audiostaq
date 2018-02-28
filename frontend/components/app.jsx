import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_api_util';
import Welcome from './welcome';
import Header from './header/header_container';
import { LogInContainer, SignUpContainer} from './session/session_container';
import { MovieIndexContainer, UploadContainer} from './movie/movie_container';

const App = () => (

  <div className='window'>
    <div className='header'>
      <div className='row'>
        <Link to='/home' className='header-logo'>NetMix</Link>
        <Link to='/upload' id='h-button' className='b-button'>upload</Link>
      </div>
      <Header/>
    </div>
    <Switch>
      <ProtectedRoute path='/upload' component={ UploadContainer }/>
      <Route path='/home' component={ MovieIndexContainer }/>
      <AuthRoute path='/login' component={ LogInContainer }/>
      <AuthRoute path='/signup' component={ SignUpContainer }/>
      <Route path='/' component={ Welcome }/>


    </Switch>
      <div className='footer'>
        <div id='h-row' className='b-row'>

        </div>
      </div>
  </div>

);


export default App;
