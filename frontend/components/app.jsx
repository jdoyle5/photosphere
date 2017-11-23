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
import Home from './home/home';


const App = () => (
  <div>
    <header>
      <h1>Photosphere App</h1>
    </header>

    <AuthRoute exact path="/" component={SplashContainer} />
    <ProtectedRoute path="/home" component={Home} />
  </div>
);

export default App;
