import React from 'react';
import { useGlobalContext } from '../Components/utils/GlobalContext';
import Card from '../Components/Card';

function Favs() {
  const { theme, favorites, removeFromFavorites } = useGlobalContext();

  return (
    <div>
      <div className={`content ${theme}`}>
        <h2>Dentists Favs</h2>
        {favorites.length === 0 ? (
          <p>You don't have favorites yet.</p>
        ) : (
          <div className='card-grid'>
            {favorites.map((dentist) => (
              <Card
                key={dentist.id}
                dentist={dentist}
                isFavorite={true}
                toggleFavorite={() => removeFromFavorites(dentist)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Favs;