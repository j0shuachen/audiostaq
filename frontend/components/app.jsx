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

const App = () => (

  <div className='window'>
    <div className='header'>
      <div className='h-left'>
        <Link to='/home' className='header-logo'>NetMix</Link>
      </div>
    </div>
    <Switch>

      <Route path='/' component={ Welcome }/>


    </Switch>
      <div className='footer'>
        <div className='f-link'>about</div>
        <div className='f-link'>contact</div>
      </div>
  </div>

);


export default App;
