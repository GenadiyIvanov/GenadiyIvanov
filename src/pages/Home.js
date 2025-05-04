import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/books").then((res) => {
      setBooks(res.data);
    });
  }, []);

  return (
    <div>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title} by {book.author}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;