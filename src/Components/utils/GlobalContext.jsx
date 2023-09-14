import React, { createContext, useContext, useReducer, useEffect } from 'react';

const GlobalContext = createContext();

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

const initialState = {
  theme: 'light',
  dentists: [],
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
};

const TOGGLE_THEME = 'TOGGLE_THEME';
const SET_DENTISTS = 'SET_DENTISTS';
const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

function globalReducer(state, action) {
  switch (action.type) {
    case TOGGLE_THEME:
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    case SET_DENTISTS:
      return { ...state, dentists: action.payload };
    case ADD_TO_FAVORITES:
      const updatedFavorites = [...state.favorites, action.payload];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return { ...state, favorites: updatedFavorites };
    case REMOVE_FROM_FAVORITES:
      const filteredFavorites = state.favorites.filter(card => card.id !== action.payload.id);
      localStorage.setItem('favorites', JSON.stringify(filteredFavorites));
      return { ...state, favorites: filteredFavorites };
    default:
      return state;
  }
}

export function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  const toggleTheme = () => {
    dispatch({ type: TOGGLE_THEME });
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: SET_DENTISTS, payload: data });
      })
      .catch((error) => {
        console.error('Error al obtener datos de la API:', error);
      });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        theme: state.theme,
        toggleTheme,
        dentists: state.dentists,
        favorites: state.favorites, 
        addToFavorites: (card) => dispatch({ type: ADD_TO_FAVORITES, payload: card }), 
        removeFromFavorites: (card) => dispatch({ type: REMOVE_FROM_FAVORITES, payload: card }),
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}