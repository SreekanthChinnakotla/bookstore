import { createContext, useEffect, useState } from "react";

export const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const addFavorite = (movie) => {
    const updatedFavorites = [...favorites, movie];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter((movie) => movie.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <MovieContext.Provider value={{ favorites, addFavorite, removeFavorite, searchQuery, setSearchQuery }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;