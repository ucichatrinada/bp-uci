import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src="/assets-img/logo-brand.png" alt="BeautyPreneur" />
        </div>
        <ul className="nav-links">
          <li>
            <Link to ="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/kelas">Kelas</Link>
            </li>
            <li>
            <Link to="portofolio">Portofolio</Link>
            </li>
            <li>
            <Link to="/gallery-cari-mua">Galerry Cari MUA</Link>
            </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
