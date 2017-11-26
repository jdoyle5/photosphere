import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({currentUser, logout}) => (
  <nav className="nav-top">
    <div className="nav-photosphere">
      <Link to={"/home"}>Photosphere</Link>
    </div>
    <div className="nav-top-right">
      <Link to={`/users/${currentUser.id}/photos`}>Profile</Link>
      <a onClick={logout}>Log Out</a>
    </div>
  </nav>
);

export default NavBar;
