import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    // Menghapus status login dari localStorage
    localStorage.removeItem('isLoggedIn');
    alert('Anda telah logout.');
    navigate('/login');
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <img src="/assets-img/logo-brand.png" alt="BeautyPreneur" />
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/kelas">Kelas</Link>
          </li>
          <li>
            <Link to="/portofolio">Portofolio</Link>
          </li>
          <li>
            <Link to="/gallery-cari-mua">Gallery Cari MUA</Link>
          </li>

          {isLoggedIn ? (
            <>
              <li>Halo, {user.nama}</li>
              <li>
                <button onClick={handleLogout} id="exit" className="logout-button">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login" id="signin">Login</Link>
              </li>
              <li>
                <Link to="/registrasi" id="signup">Daftar</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
