// src/components/Home.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { trainings } from './TrainingData'; // Import data pelatihan

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTrainings, setFilteredTrainings] = useState([]);
  const navigate = useNavigate();

  // Fungsi untuk menangani perubahan input di search bar
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    // Filter daftar training berdasarkan input pengguna
    if (value !== '') {
      const filtered = trainings.filter((training) =>
        training.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredTrainings(filtered);
    } else {
      setFilteredTrainings([]); // Kosongkan list jika tidak ada input
    }
  };

  // Fungsi untuk menghapus input search
  const clearSearch = () => {
    setSearchTerm('');
    setFilteredTrainings([]); // Kosongkan hasil pencarian
  };

  return (
    <main className="main">
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__data">
            <h1 className="home__title">Kecantikan</h1>
            <p className="home__description">
              Temukan kelas pelatihan yang kamu inginkan! <br />
              Semua pelatihan dari dasar hingga mahir, dibimbing langsung oleh mentor profesional.
            </p>

            <div className="search-container">
              <input
                type="text"
                className="search-bar"
                placeholder="Cari pelatihan..."
                value={searchTerm}
                onChange={handleSearch}
              />
              {/* Icon silang untuk membersihkan input */}
              {searchTerm && (
                <span className="clear-search" onClick={clearSearch}>
                  ✖
                </span>
              )}

              {/* List judul pelatihan yang muncul saat pencarian */}
              {filteredTrainings.length > 0 && (
                <div className="search-results">
                  {filteredTrainings.map((training) => (
                    <div
                      key={training.id}
                      className="search-result-item"
                      onClick={() => navigate(`/training/${training.id}`)}
                    >
                      {training.title}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="home__value">
              <div>
                <h1 className="home__value-number">10K<span>+</span></h1>
                <span className="home__value-description">Pelatihan <br /> Pemula</span>
              </div>
              <div>
                <h1 className="home__value-number">3K<span>+</span></h1>
                <span className="home__value-description">Pelatihan <br /> Menengah</span>
              </div>
              <div>
                <h1 className="home__value-number">3K<span>+</span></h1>
                <span className="home__value-description">Pelatihan <br /> Mahir</span>
              </div>
              <div>
                <h1 className="home__value-number">2K<span>+</span></h1>
                <span className="home__value-description">Pelatihan <br /> Ahli</span>
              </div>
            </div>
          </div>

          <div className="home__images">
            <div className="home__orbe"></div>
            <div className="home__img">
              <img src="/assets-img/makeup.jpg" alt="Makeup" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
