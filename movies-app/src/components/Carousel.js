import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css"

const MovieCarousel = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=ebde87cb5725efbcf65e3b1ae8c625be")
      .then((response) => response.json())
      .then((data) => setTrendingMovies(data.results));
  }, []);

  return (
    <Carousel className="custom-carousel">
      {trendingMovies.slice(0, 5).map((movie) => (
        <Carousel.Item key={movie.id}>
          <img
            className="d-block w-100 custom-carousel-img"
            src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
            alt={movie.title}
          />
          <Carousel.Caption>
            <h3>{movie.title}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MovieCarousel;