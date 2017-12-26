import React from 'react';
import { Link } from 'react-router-dom';

// Added the user's image to sit next to the user's name in the navbar.
const NavBar = ({currentUser, logout}) => (
  <div className="navbar">
  <nav className="nav-top">
    <div className="nav-photosphere">
      <Link to={"/home"}>Photosphere</Link>
    </div>
    <div className="nav-top-right">
      <div className="navbar-user">
        <div className="navbar-photo">
          <Link to={`/users/${currentUser.id}/photos`}><img src={ currentUser.img_url }/></Link>
        </div>
        <div className="navbar-username">
          <Link to={`/users/${currentUser.id}/photos`} className="link-username">{currentUser.username}</Link>
        </div>
      </div>
      <div className="navbar-logout">
        <a className="link-username" onClick={logout}>Log Out</a>
      </div>
    </div>
  </nav>
</div>
);

export default NavBar;
