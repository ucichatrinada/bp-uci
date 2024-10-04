import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Payment3.css';

const Payment3 = () => {
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

 // Fungsi untuk menangani klik tombol WhatsApp
 const handleWhatsappClick = () => {
    const phoneNumber = '6285259396969';
    const message = 'Halo saya ingin konfirmasi pesanan saya!';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
};

    // Temukan training berdasarkan ID
    const training = trainings.find((item) => item.id === parseInt(id));

    // Jika training tidak ditemukan
    if (!training) {
        return <div>Training tidak ditemukan</div>;
    }
    // Fungsi untuk menangani form submit
    const handleSubmit = (event) => {
        event.preventDefault(); // Mencegah reload halaman
        alert("Konfirmasi Pembayaran Berhasil!");
        // Di sini Anda bisa melakukan tindakan lain seperti mengirim data ke server
    };
    return (
        <div className="confirmation-container">
        <div className="headerConfirmation">
          <p>Konfirmasi Pembayaran</p>
          <button className="whatsapp-button" onClick={handleWhatsappClick}>
            Konfirmasi Pembayaran Via Whatsapp
          </button>
        </div>

        <div className="form-container">
        <form id="payment-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label for="invoice-number">Nomor Invoice</label>
              <input
                type="text"
                id="invoice-number"
                value={`Invoice BeautyPreneur ${training.title}`}
                readOnly
              />
            </div>

            <div className="form-group">
              <label for="payment-date">Waktu Pembayaran</label>
              <input type="date" id="payment-date" required />
            </div>

            <div className="form-group">
              <label for="transfer-to">Ditransfer Ke</label>
              <select id="transfer-to" required>
                <option value="BRI - Uci Chatrinada">
                  BRI - 000 - Uci Chatrinada
                </option>
                <option value="Mandiri - Windi Al Azmi">
                  Mandiri - 000 - Windi Al Azmi
                </option>
                <option value="BTPN - Erwiana Anggriani">
                  BTPN - Erwiana Anggriani
                </option>
                <option value="BNI - Sabrina Natasya Bilbina">
                  BNI - Sabrina Natasya Bilbina
                </option>
              </select>
            </div>

            <div className="form-group">
              <label for="bank-name">Bank Asal</label>
              <input
                type="text"
                id="bank-name"
                placeholder="Contoh: Mandiri"
                required
              />
            </div>

            <div className="form-group">
              <label for="account-name">Nama Pemilik Rekening</label>
              <input
                type="text"
                id="account-name"
                placeholder="Nama Pemilik Rekening"
               required
              />
            </div>

            <div className="form-group">
              <label for="amount">Jumlah</label>
              <p className="total">Total <span>{training.price}</span></p>
            </div>

            <div className="form-group">
              <label for="upload-receipt">Bukti Transfer (Opsional)</label>
              <input type="file" id="upload-receipt" />
            </div>

           
            <button type="submit" className="submit-btn">
            Konfirmasi
            </button>
          </form>
        </div>
      </div>
    )
};

export default Payment3;