import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/directors">Directors</Link>
        </li>
        <li>
          <Link to="/actors">Actors</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
