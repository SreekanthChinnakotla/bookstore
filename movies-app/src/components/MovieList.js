import { useEffect, useState, useContext } from "react";
import MovieCard from "./MovieCard";
import { MovieContext } from "../context/MovieContext";
import MovieCarousel from "./Carousel";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const { searchQuery } = useContext(MovieContext);

  useEffect(() => {
    const url = searchQuery
      ? `https://api.themoviedb.org/3/search/movie?api_key=ebde87cb5725efbcf65e3b1ae8c625be&query=${searchQuery}`
      : "https://api.themoviedb.org/3/movie/popular?api_key=ebde87cb5725efbcf65e3b1ae8c625be";
    
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, [searchQuery]);

  return (
    <div className="container mt-4">
      <MovieCarousel />
      <div className="row mt-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;