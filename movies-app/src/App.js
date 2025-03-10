import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieProvider from "./context/MovieContext";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import Favorites from "./components/Favorites";
import "../src/App.css"
import "../src/index.css"


function App() {
  return (
    <MovieProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </MovieProvider>
  );
}

export default App;