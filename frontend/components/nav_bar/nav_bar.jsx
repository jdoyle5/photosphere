import React from 'react';

const NavBar = ({currentUser, logout}) => (
  <nav className="nav-top">
    <div className="nav-photosphere">
      Photosphere
    </div>
    <div className="nav-top-right">
      <a>Profile</a>
      <a onClick={logout}>Log Out</a>
    </div>
  </nav>
);

export default NavBar;
