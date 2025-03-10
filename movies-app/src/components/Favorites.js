import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import MovieCard from "./MovieCard";

const Favorites = () => {
  const { favorites } = useContext(MovieContext);
  return (
    <div className="container mt-4">
      <h2>Favorites</h2>
      <div className="row">
        {favorites.length > 0 ? favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        )) : <p>No favorites yet!</p>}
      </div>
    </div>
  );
};

export default Favorites;