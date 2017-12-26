import React from 'react';
import { Link } from 'react-router-dom';

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
        <Link to={`/users/${currentUser.id}/photos`}>{currentUser.username}</Link>
      </div>
      <a onClick={logout}>Log Out</a>
    </div>
  </nav>
</div>
);

export default NavBar;
