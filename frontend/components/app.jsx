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


const App = () => (
  <div>
    <header>
      <h1>Photosphere App</h1>
      <GreetingContainer />
    </header>

    <Route path="/login" component={ sessionFormContainer }/>
    <Route path="/signup" component={ sessionFormContainer }/>
  </div>
);

export default App;
