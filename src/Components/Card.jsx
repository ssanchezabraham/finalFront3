import React from 'react';
import '../assets/css/Card.css';
import { Link } from 'react-router-dom';

const Card = ({ dentist, isFavorite, toggleFavorite }) => {
  const handleButtonClick = (event) => {
    event.preventDefault();

    toggleFavorite();
  };

  return (
    <Link to={`/dentist/${dentist.id}`} className="card-link">
      <div className="card">
        <img src="./img/doctor.jpg" alt="doctor-image" />
        <h3>{dentist.name}</h3>
        <p>{dentist.username}</p>
        <button onClick={handleButtonClick}>
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>
    </Link>
  );
};

export default Card;