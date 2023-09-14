import React from 'react';
import { useGlobalContext } from '../Components/utils/GlobalContext';
import Card from '../Components/Card';

function Home() {
  const { theme, dentists, addToFavorites, removeFromFavorites, favorites } = useGlobalContext();

  const toggleFavorite = (dentist) => {
    if (favorites.some(fav => fav.id === dentist.id)) {
      removeFromFavorites(dentist);
    } else {
      addToFavorites(dentist);
    }
  };

  return (
    <div>
      <div className={`content ${theme}`}>
        <h1>Home</h1>
        <div className='card-grid'>
          {dentists.map((dentist) => (
            <Card
              key={dentist.id}
              dentist={dentist}
              isFavorite={favorites.some(fav => fav.id === dentist.id)}
              toggleFavorite={() => toggleFavorite(dentist)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;