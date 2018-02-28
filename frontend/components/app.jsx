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
import PhotoIndexContainer from './photos/photo_index_container';
import PhotoUserIndexContainer from './photos/photo_user_index_container';
import PhotoTagIndexContainer from './photos/photo_tag_index_container';
import PhotoFormContainer from './photos/photo_form_container';
import UserInfoContainer from './photos/user_info_container';


const App = () => (
  <div className="everything">
      <ProtectedRoute path="/" component={NavBarContainer}/>
    <main>
      <Switch>
        <AuthRoute exact path="/" component={SplashContainer} />
        <ProtectedRoute path="/home" component={PhotoIndexContainer} />
        <ProtectedRoute path="/tags/:tagId/photos" component={PhotoTagIndexContainer} />
        <ProtectedRoute path="/upload" component={PhotoFormContainer} />
      </Switch>
      <ProtectedRoute path="/users/:userId/photos" component={UserInfoContainer} />
      <ProtectedRoute path="/users/:userId/photos" component={PhotoUserIndexContainer} />
    </main>
  </div>
);

export default App;
