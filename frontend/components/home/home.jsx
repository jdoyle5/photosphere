import React from 'react';

const Home = ({currentUser, logout}) => (
      <hgroup className="header-group">
        <h2 className="header-name">Hi, {currentUser.username}!</h2>
        <button className="header-button" onClick={logout}>Log Out</button>
    	</hgroup>
);

export default Home;
