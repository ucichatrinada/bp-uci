import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './GalleryCariMUA.css';

const GalleryCariMUA = () => {
  const location = useLocation();
  const [muaData, setMuaData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [specializationFilter, setSpecializationFilter] = useState('');

  // Fungsi untuk menangani klik tombol "Upload Portomu Disini!"
  const navigate = useNavigate();
  const handleUploadClick = () => {
    navigate('/portofolio');  // Ini akan membawa ke halaman Portofolio
  };

  // Data dummy untuk MUA
  const dummyData = [
    {
      name: 'Uci Chatrin',
      email: 'dummy1@example.com',
      location: 'Jakarta',
      specialization: 'Make Up Pernikahan',
      images: [
        "/assets-img/bride-dummy.jpg",
      ],
    },
    {
      name: 'Windi Azmi',
      email: 'dummy2@example.com',
      location: 'Bandung',
      specialization: 'Make Up Flawless',
      images: [
       "/assets-img/flawless-dummy.jpg",
      ],
    },
    {
      name: 'Sabrina',
      email: 'dummy3@example.com',
      location: 'Surabaya',
      specialization: 'Make Up Wisuda',
      images: [
        "/assets-img/hair-dummy.jpg"
      ],
    },
    {
      name: 'Erwianna',
      email: 'dummy4@example.com',
      location: 'Medan',
      specialization: 'Make Up Pesta',
      images: [
        "/assets-img/hair2-dummy.jpg",
      ],
    },
  ];

  useEffect(() => {
    // Coba ambil data dari location.state atau localStorage
    let data = location.state;

    if (!data) {
      const savedData = localStorage.getItem('muaData');
      if (savedData) {
        data = JSON.parse(savedData);  // Ambil data dari localStorage jika ada
      }
    }

    // Jika ada data dari location.state atau localStorage, gunakan itu
    if (data) {
      const { name, email, gallery, location: userLocation, specialization } = data;
      const newMUA = {
        name,
        email,
        location: userLocation,
        specialization,
        images: gallery.map((item) => item.imageUrl),
      };
      setMuaData((prevData) => [...prevData, newMUA]); // Tambahkan data yang diambil
    } else {
      setMuaData(dummyData);  // Jika tidak ada data, tampilkan dummyData
    }
  }, [location.state]);

  // Function to handle filtering
  useEffect(() => {
    const filterData = () => {
      let filtered = muaData;

      // Filter by search term (name)
      if (searchTerm) {
        filtered = filtered.filter((mua) =>
          mua.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      // Filter by location
      if (locationFilter) {
        filtered = filtered.filter((mua) =>
          mua.location.toLowerCase() === locationFilter.toLowerCase()
        );
      }

      // Filter by specialization
      if (specializationFilter) {
        filtered = filtered.filter((mua) =>
          mua.specialization.toLowerCase() === specializationFilter.toLowerCase()
        );
      }

      setFilteredData(filtered);
    };

    filterData();
  }, [searchTerm, locationFilter, specializationFilter, muaData]);

  return (
    <div className="gallery-container">
      <h1 className="gallery-header">Galeri Cari MUA</h1>
      <p className="gallery-subtext">
        Cari jasa MUA? Cari Portofolio sesuai keinginan Make Up Artist idaman kamu!
      </p>

      {/* Tombol untuk Upload Portofolio */}
      <button onClick={handleUploadClick} className="upload-btn">Upload Portomu Disini!</button>

      {/* Filter Section */}
      <div className="filter-container">
        <input
          type="text"
          placeholder="Cari berdasarkan nama..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="filter-input"
        />

        <select
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          className="filter-select"
        >
          <option value="">Semua Lokasi</option>
          <option value="Jakarta">Jakarta</option>
          <option value="Bandung">Bandung</option>
          <option value="Surabaya">Surabaya</option>
          <option value="Medan">Medan</option>
        </select>

        <select
          value={specializationFilter}
          onChange={(e) => setSpecializationFilter(e.target.value)}
          className="filter-select"
        >
          <option value="">Semua Spesialisasi</option>
          <option value="Make Up Pernikahan">Make Up Pernikahan</option>
          <option value="Make Up Flawless">Make Up Flawless</option>
          <option value="Make Up Wisuda">Make Up Wisuda</option>
          <option value="Make Up Pesta">Make Up Pesta</option>
        </select>
      </div>

      {/* Gallery Grid */}
      <div className="gallery-grid">
        {filteredData.map((mua, index) => (
          <div key={index} className="gallery-item">
            <div className="gallery-details">
              <h3>{mua.name}</h3>
              <p>Spesialisasi: {mua.specialization}</p>
              <p>Domisili: {mua.location}</p>
              <p className="email">Email for Business: {mua.email}</p>
            </div>
            <div className="image-grid">
              {mua.images.map((image, idx) => (
                <img key={idx} src={image} alt={`MUA Look ${idx + 1}`} className="gallery-image" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryCariMUA;
