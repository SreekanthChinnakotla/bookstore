import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const MovieCard = ({ movie }) => {
  const { favorites, addFavorite, removeFavorite } = useContext(MovieContext);
  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  return (
    <div className="col-md-3 mb-4">
      <div className="card">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt={movie.title} />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <button className="btn btn-primary" onClick={() => isFavorite ? removeFavorite(movie.id) : addFavorite(movie)}>
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;