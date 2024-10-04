import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Kelas.css';

const TrainingPage = () => {
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
      },
    ];
  
    return (
      <div className="training-page">
        <h1 className="training-header">Kelas yang Tersedia</h1>
  
        <div className="training-cards">
          {trainings.map((training) => (
            <div className="training-card" key={training.id}>
              <Link to={`/training/${training.id}`} className="detail-link">
                <img src={training.imageUrl} alt={training.title} />
                <div className="training-info">
                  <h2>{training.title}</h2>
                  <p>{training.location}</p>
                  <p>{training.price}</p>
                  <p>
                    <i className="fas fa-calendar-alt"></i> {training.date} <br />
                    <i className="fas fa-clock"></i> {training.time}
                  </p>
                  <div className="instructor-info">
                    <p>{training.instructor}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
   
      </div>
    );
  };
  
  export default TrainingPage;