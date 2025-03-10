import React, { useState, useEffect } from "react";
import logo from "./imgcomponents/logo.svg";
import logotext from "./imgcomponents/KeazoNBOOKS.svg";
import heart from "./imgcomponents/bx_bx-book-heart.svg";
import diamont from "./imgcomponents/diamond.svg";
import bell from "./imgcomponents/bell.svg";
import signin from "./imgcomponents/signin.svg";
import "./index.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState();

  useEffect(() => {
    // Fetch some initial books on page load
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes"
      );
      const data = await response.json();
      setBooks(data.items || []);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };
  console.log(books);
  const searchBooks = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );
      const data = await response.json();
      setBooks(data.items || []);
    } catch (error) {
      console.error("Error searching books:", error);
    }
  };

  const handleSearch = () => {
    searchBooks();
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  return (
    <div>
      {/* First Section - Search Bar */}
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
          <img src={logotext} alt="logotext" />
        </div>
        <div className="search">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={'Search for the books........'}
          />
          <button className="searchbtn" onClick={handleSearch}>Search</button>
        </div>
        <div className="rightoptions">
          <img src={heart} alt="heart" />
          <img src={bell} alt="notifications" />
          <img src={diamont} alt="premium" />
          <img  src={signin} alt="signin" />
        </div>
      </div>

      {/* Second Section - Book Details */}
      {selectedBook && (
        <div>
          <div className="solobook">
            <img
              src={selectedBook.volumeInfo.imageLinks.thumbnail}
              alt={selectedBook.volumeInfo.title}
            />
            <div className="details">
              <div className="title">
                <h2>{selectedBook.volumeInfo.title}</h2>
                <p>Published on : {selectedBook.volumeInfo.publishedDate}</p>
              </div>
              <div className="author">
                <p>Author : {selectedBook.volumeInfo.authors[0]}</p>
              </div>
              <p>{selectedBook.volumeInfo.description}</p>
              <div className="extra">
                <p>Avg.rating : {selectedBook.volumeInfo.averageRating}</p>
                <p>Publisher : {selectedBook.volumeInfo.publisher}</p>
                <p>Language : {selectedBook.volumeInfo.language}</p>
              </div>
              {/* Add more details as needed */}
            </div>
          </div>
        </div>
      )}
      <h1>More Books</h1>
      {/* Third Section - Book Thumbnails */}kjj
      <div className="list">
        {books.map((book) => (
          <div key={book.id} onClick={() => handleBookClick(book)}>
            <img
              className="card"
              src={book.volumeInfo.imageLinks.thumbnail}
              alt={book.volumeInfo.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
