import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import "../index.css"

const Navbar = () => {
  const { setSearchQuery } = useContext(MovieContext);
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    setSearchQuery(query);
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-3 d-flex justify-content-between">
      <div>
        <Link className="navbar-brand" to="/">Movies</Link>
        <Link className="nav-link d-inline text-light mx-2" to="/" >Home</Link>
        <Link className="nav-link d-inline text-light" to="/favorites" >Favorites</Link>
      </div>
      <div className="d-flex">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearch}>Search</button>
      </div>
    </nav>
  );
};

export default Navbar;