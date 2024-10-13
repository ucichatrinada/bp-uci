import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Portofolio.css';

const Portofolio = () => {
  const [gallery, setGallery] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [specialization, setSpecialization] = useState('');
  const navigate = useNavigate();

  const handleUpload = (e) => {
    const files = e.target.files;
    const newGallery = [...gallery];

    for (let i = 0; i < files.length; i++) {
      newGallery.push({
        imageUrl: URL.createObjectURL(files[i]),
      });
    }
    setGallery(newGallery);
  };

  const handleGalleryRedirect = () => {
    const formData = { name, email, gallery, location, specialization };
    localStorage.setItem('muaData', JSON.stringify(formData));  // Simpan data ke localStorage
    navigate('/gallery', { state: formData });
  };

  return (
    <div className="portofolio-page">
      <h1>Portfolio Building Mode</h1>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder="Domisili" value={location} onChange={(e) => setLocation(e.target.value)} />
      <select value={specialization} onChange={(e) => setSpecialization(e.target.value)}>
        <option value="">Pilih Spesialisasi</option>
        <option value="Make Up Pernikahan">Make Up Pernikahan</option>
        <option value="Make Up Flawless">Make Up Flawless</option>
        <option value="Make Up Pesta">Make Up Pesta</option>
        <option value="Make Up Wisuda">Make Up Wisuda</option>
        <option value="Make Up Umum">Make Up Umum</option>
      </select>
      <input type="file" multiple onChange={handleUpload} />
      <button className="upload-gallery-btn" onClick={handleGalleryRedirect}>Lanjut Upload ke Gallery</button>
    </div>
  );
};

export default Portofolio;
