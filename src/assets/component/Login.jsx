import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  // State untuk menyimpan email dan password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Fungsi untuk menangani submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    // Mengirim data login ke fungsi onLogin
    onLogin({ email, password });
  };

  return (
    <div id="auth">
      <div className="auth__container">
        <h5 className="auth__header">Login</h5>
        <form className="auth__form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              className="form-control auth__input"
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update state saat input berubah
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
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update state saat input berubah
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
            Belum punya akun?
            <a href="register.html" className="auth__cta auth__cta--small">daftar</a>
          </p>
        </form>
      </div>
    </div>
  );
};


export default Login;
