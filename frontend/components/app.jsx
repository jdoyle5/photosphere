import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import NavBarContainer from './nav_bar/nav_bar_container';
import sessionFormContainer from './session/session_form_container';
import SplashContainer from './splash/splash_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HomeContainer from './home/home_container';


const App = () => (
  <div className="everything">
    <nav className="navbar">
      <ProtectedRoute path="/" component={NavBarContainer}/>
    </nav>

    <div>
      <AuthRoute exact path="/" component={SplashContainer} />
      <ProtectedRoute path="/home" component={HomeContainer} />
    </div>
  </div>
);

export default App;
