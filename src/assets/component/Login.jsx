import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const Login = ({ onLogin }) => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === emailInput && user.password === passwordInput) {
      alert(`Selamat datang, ${user.nama}!`);

      // Menyimpan status login
      localStorage.setItem('isLoggedIn', 'true');

      // Panggil fungsi onLogin jika diperlukan
      if (onLogin) {
        onLogin({ email: emailInput });
      }

      // Mengarahkan ke halaman pelatihan atau beranda
      navigate('/kelas');
    } else {
      alert('Email atau password salah atau belum terdaftar!');
    }
  };

  return (
    <div id="auth">
      <div className="auth__container">
        <h5 className="auth__header">Login</h5>
        <form className="auth__form" onSubmit={handleSubmit} id="sign-in">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              className="form-control auth__input"
              id="email"
              type="email"
              name="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              className="form-control auth__input"
              id="password"
              type="password"
              name="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              required
            />
            <a href="#" className="auth__cta auth__cta--small">Lupa Password?</a>
          </div>
          <input
            type="submit"
            name="submit"
            value="Login"
            className="btn btn-primary mb-3 auth__login-button"
          />
          <p className="fs-6">
            Belum punya akun?{' '}
            <Link to="/registrasi" className="auth__cta auth__cta--small">daftar</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
