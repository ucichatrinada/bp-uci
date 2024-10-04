// src/components/TrainingDetailPage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './TrainingDetailPage.css';


const TrainingDetailPage = () => {
  const { id } = useParams(); // Mengambil ID dari URL
  const navigate = useNavigate(); 
  // Data sementara (seharusnya dari server atau state global)
  const trainings = [
    {
        id: 1,
        title: "Make Up Sederhana",
        location: "jakarta",
        price: "Rp 22800",
        date: "22/08/2024",
        time: "10:00 AM",
        instructor: "Elsa Carroll",
        imageUrl: "/assets-img/pelatihan-4.jpg",
      description: "Ini adalah kursus makeup sederhana untuk pemula yang ingin belajar teknik rias wajah dasar.",
    },
    {
        id: 2,
        title: "Make Up Sehari-hari",
        location: "bekasi",
        price: "Rp 22800",
        date: "24/08/2024",
        time: "12:00 PM",
        instructor: "Elsa Carroll",
        imageUrl: "/assets-img/person-pelatihan-7.jpg",
      description: "Belajar makeup sehari-hari yang praktis dan cepat dengan instruktur berpengalaman.",
    },
    {
        id: 3,
        title: "Make Up ke Kampus",
        location: "tangerang",
        price: "Rp gratis",
        date: "25/08/2024",
        time: "08:00 AM",
        instructor: "Elsa Carroll",
        imageUrl: "/assets-img/student-pelatihan-1.jpg",
        description: "Belajar makeup sehari-hari yang praktis dan cepat dengan instruktur berpengalaman.",
    },
    {
        id: 4,
        title: "Make Up Pernikahan",
        location: "jakarta",
        price: "Rp 80800",
        date: "25/08/2024",
        time: "08:00 AM",
        instructor: "Carroll",
        imageUrl: "/assets-img/bride-pelatihan-2.jpg",
        description: "Belajar makeup sehari-hari yang praktis dan cepat dengan instruktur berpengalaman.",
      },
      {
        id: 5,
        title: "Make Up Korean Look",
        location: "bekasi",
        price: "Rp 56300",
        date: "22/08/2024",
        time: "05:00 PM",
        instructor: "Elsa Carroll",
        imageUrl: "/assets-img/korean-look.jpg",
        description: "Belajar makeup sehari-hari yang praktis dan cepat dengan instruktur berpengalaman.",
      },
      {
        id: 6,
        title: "Make Up Old Money",
        location: "bekasi",
        price: "Rp 56300",
        date: "22/08/2024",
        time: "05:00 PM",
        instructor: "Elsa Carroll",
        imageUrl: "/assets-img/lady-money.jpg",
        description: "Belajar makeup sehari-hari yang praktis dan cepat dengan instruktur berpengalaman.",
      },
      {
        id: 7,
        title: "Make Up Mob Wife",
        location: "bandung",
        price: "Rp 20500",
        date: "30/09/2024",
        time: "05:00 PM",
        instructor: "Elsa Carroll",
        imageUrl: "/assets-img/mob-wife.jpg",
        description: "Belajar makeup sehari-hari yang praktis dan cepat dengan instruktur berpengalaman.",
      },

  ];

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
        <img src={training.imageUrl} alt={training.title} className="training-image"/>
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
          src="/assets-img/mob-wife.jpg"
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
