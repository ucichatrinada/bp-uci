import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Payment1.css';

const Payment1 = () => {
  const { id } = useParams(); // Mengambil ID dari URL

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
// Fungsi untuk navigasi ke halaman Payment2
const navigate = useNavigate(); // Mendapatkan fungsi navigate
const ClickTwo = (e) => {
  e.preventDefault(); // Mencegah form submission default
  navigate(`/payment2/${id}`); // Navigasi ke halaman Payment2 dengan ID yang sama
};

  return (
    <div className="containerPayment">
      <div className="headerFirstPayment"></div>
      <p>Setelah melakukan pembayaran, Admin kami akan SEGERA menghubungi (2 X 24 JAM KERJA)</p>

      <h1>Review Payment</h1>

      <div className="payment-section" onSubmit={ClickTwo}>
        <div className="customer-info">
          <h2>Informasi Pembeli</h2>
          <form id="payment-form">
            <label htmlFor="name">Nama</label>
            <input placeholder="Uci Chatrinada" type="text" id="name" name="name" required />

            <label htmlFor="email">Email</label>
            <input placeholder="ucicha@gmail.com" type="email" id="email" name="email" required />

            <label htmlFor="whatsapp">Nomor Whatsapp</label>
            <input placeholder="085259396969" type="tel" id="whatsapp" name="whatsapp" required />

            <button className="register-button">Daftar</button>
          </form>
        </div>

        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="order-item">
            <img src={training.imageUrl} alt={training.title} />
            <div className="order-sub">
              <p className="product-name">{training.title}</p>
              <div className="item-quantity">
                <p>{training.price}</p>
                <p>1x</p>
                <p id="subtotal">{training.price}</p>
              </div>
            </div>
            <i className="fas fa-trash-alt delete-icon"></i>
          </div>

          <label htmlFor="coupon">Kode Kupon</label>
          <input type="text" id="coupon" name="coupon" />
          <p className="total">Total: {training.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Payment1;
