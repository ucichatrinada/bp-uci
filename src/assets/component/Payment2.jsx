import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Payment2.css';

const Payment2 = () => {
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
        // Fungsi untuk navigasi ke halaman Payment3
const navigate3 = useNavigate(); // Mendapatkan fungsi navigate
const ClickThree = (e) => {
  e.preventDefault(); // Mencegah form submission default
  navigate3(`/payment3/${id}`); // Navigasi ke halaman Payment3 dengan ID yang sama
};
const ClickTwo = (e) => {
    e.preventDefault(); // Mencegah form submission default
    navigate3(`/payment/${id}`); // Navigasi ke halaman Payment3 dengan ID yang sama
  };

    return (
        <div className="invoice-container">
          <div className="headerInvoice">
            <p>
              Setelah melakukan pembayaran, Admin kami akan SEGERA menghubungi (2 X 24 JAM KERJA)
            </p>
          </div>
      
          <div className="invoice-details">
            <h2>Invoice BeautyPreneur {training.title}</h2> 
            <div className="product-info">
              <img src={training.imageUrl} alt={training.title} />
              <div>
                <p className="product-name">{training.title}</p>
                <p className="product-price">{training.price}</p>
                <p className="product-qty">1x</p>
              </div>
            </div>
            <div className="pricing">
              <p>Subtotal <span>{training.price}</span></p>
              <p>Diskon <span>-</span></p>
              <p className="total">Total <span>{training.price}</span></p>
            </div>
            <div className="buttons">
            <button className="register-button" onClick={ClickTwo}>Kembali</button>
            <button className="register-button" onClick={ClickThree}>Konfirmasi Pesanan</button>
            </div>
          </div>
      
          <div className="payment-info">
            <h3>Selangkah Lagi!</h3>
            <p>1. TRANSFER VIA beberapa opsi pembayaran di bawah ini :</p>
            <ul>
              <li>
                <strong>BRI</strong> no rek 3170-01-001379-50-5 a/n UCI CHATRINADA SH
              </li>
              <li>
                <strong>MANDIRI</strong> no rek 0000000000 a/n Windi Al Azmi
              </li>
              <li>
                <strong>BTPN</strong> no rek 90011192933 a/n Erwiana Anggriani
              </li>
              <li>
                <strong>BNI</strong> no rek 1387505038 a/n Sabrina Natasya Bilbina
              </li>
            </ul>
            <p>
              2. Setelah melakukan transfer, tekan tombol KONFIRMASI PEMBAYARAN
              disertai dengan upload bukti pembayaran atau kirim bukti transfer ke
              WA.
            </p>
            <p>
              <strong>WA: 082-5939-6969</strong> (WA Only, tidak dapat di telepon)
            </p>
          </div>
        </div>
      );
    };

export default Payment2;