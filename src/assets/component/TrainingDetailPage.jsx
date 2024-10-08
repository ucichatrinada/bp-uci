// src/components/TrainingDetailPage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './TrainingDetailPage.css';
import { trainings } from './TrainingData'; // Menggunakan data yang diimpor

const TrainingDetailPage = () => {
  const { id } = useParams(); // Mengambil ID dari URL
  const navigate = useNavigate(); 

  // Temukan training berdasarkan ID
  const training = trainings.find((item) => item.id === parseInt(id));

  // Jika training tidak ditemukan
  if (!training) {
    return <div>Training tidak ditemukan</div>;
  }

  // Fungsi untuk navigasi ke halaman Payment1
  const handleRegisterClick = () => {
    navigate(`/payment/${id}`); // Navigasi ke halaman Payment dengan ID yang sama
  };

  return (
    <div className="training-detail-page">
      <div className="training-header">
        <h1>{training.title}</h1>
        <img src={training.imageUrl} alt={training.title} className="training-image" />
        <p><strong>Lokasi:</strong> {training.location}</p>
        <p><strong>Harga:</strong> {training.price}</p>
        <p><strong>Tanggal:</strong> {training.date}</p>
        <p><strong>Jam:</strong> {training.time}</p>
        <p><strong>Instruktur:</strong> {training.instructor}</p>
        <p><strong>Deskripsi:</strong> {training.description}</p>
        <div>
          <button className="register-button" onClick={handleRegisterClick}>Daftar</button>
        </div>
      </div>

      <div className="training-tabs">
        <ul>
          <li className="active">About</li>
        </ul>
      </div>

      <div className="training-content">
        <p>{training.description}</p>
      </div>

      <div className="mentor-info">
        <img
          src={training.imageUrl} // Gambar sesuai dari data training
          alt="Mentor"
          className="mentor-photo"
        />
        <div className="mentor-details">
          <p className="mentor-name">{training.instructor}</p>
          <p className="mentor-title">Mentor</p>
          <p className="mentor-level">Tingkat: Pemula</p>
          <p>Durasi: 12 Minggu</p>
          <p>Jumlah Peserta: 12.000</p>
          <p>Alamat: Intercontinental Hotel, Pondok Indah</p>
        </div>
      </div>
    </div>
  );
};

export default TrainingDetailPage;
