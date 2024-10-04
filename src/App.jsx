import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/component/GlobalStyles.css';  // Global styling
import './assets/component/Footer.css';        // Footer styling
import './assets/component/Layout.css';        // Layout and responsiveness
import Home from './assets/component/Home';
import Login from './assets/component/Login';  // Login component
import Kelas from './assets/component/Kelas';
import Header from './assets/component/Header';
import Footer from './assets/component/Footer'; // Konsistensi kapitalisasi
import TrainingDetailPage from './assets/component/TrainingDetailPage';
import Payment1 from './assets/component/Payment1';
import Payment2 from './assets/component/Payment2';
import Payment3 from './assets/component/Payment3';
import Portofolio from './assets/component/Portofolio';
import GalleryCariMUA from './assets/component/GalleryCariMUA';
import Registrasi from './assets/component/Registrasi';

const App = () => {
  // Fungsi untuk menangani login
  const handleLogin = (data) => {
    console.log('Login Data:', data);
    // Anda dapat mengirim data ke API atau melakukan tindakan lain di sini
  };

  return (
    <Router>
      <div>
        <Header />     {/* Bagian header dan navbar */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/kelas" element={<Kelas />} />
            <Route path="/portofolio" element={<Portofolio />} />
            <Route path="/gallery-cari-mua" element={<GalleryCariMUA />} /> 
            <Route path="/gallery" element={<GalleryCariMUA />}/>
            <Route path="/registrasi" element={<Registrasi/>}/>
            {/* Route untuk halaman detail training */}
            <Route path="/training/:id" element={<TrainingDetailPage />} />
            <Route path="/payment/:id" element={<Payment1 />} />
            <Route path="/payment2/:id" element={<Payment2 />} />
            <Route path="/payment3/:id" element={<Payment3 />} />
          </Routes>
        </main>
        <Footer />   {/* Footer tanpa children */}
      </div>
    </Router>
  );
};

export default App;
