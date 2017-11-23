import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import sessionFormContainer from './session/session_form_container';
import SplashContainer from './splash/splash_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HomeContainer from './home/home_container';


const App = () => (
  <div>
  <AuthRoute exact path="/" component={SplashContainer} />
  <ProtectedRoute path="/home" component={HomeContainer} />
  </div>
);

export default App;
