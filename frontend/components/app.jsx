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
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div className="back-img">
    <header>
      <h1>Photosphere App</h1>
      <GreetingContainer />
    </header>

    <AuthRoute path="/login" component={ sessionFormContainer }/>
    <AuthRoute path="/signup" component={ sessionFormContainer }/>
  </div>
);

export default App;
