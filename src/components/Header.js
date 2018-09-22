import React from 'react';
import { Link } from 'react-router-dom';

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="header__content">
      <div className="header__usercontent">
        <Link className="header__title" to="/">
          <h1>Alon Guterman</h1>
          <h3>Full-Stack Developer</h3>
        </Link>
      </div>
      <div>
        <Link to="/blog">Blog</Link>
        <button className="button button--link" onClick={startLogout}>Who am I</button>
        <button className="button button--link" onClick={startLogout}>Reviews</button>
        <Link to="/projects">Projects</Link>
        <button className="button button--link" onClick={startLogout}>Contact me</button>
      </div>
    </div>
  </header>
);

export default Header;
