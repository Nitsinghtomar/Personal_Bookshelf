import React, { useState } from 'react';
import { searchBooks } from './api';
import BookCard from './BookCard';

const BookSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    setQuery(e.target.value);
    if (e.target.value) {
      const books = await searchBooks(e.target.value);
      setResults(books);
    } else {
      setResults([]);
    }
  };

  const addToBookshelf = (book) => {
    const bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    localStorage.setItem('bookshelf', JSON.stringify([...bookshelf, book]));
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search for books..."
      />
      <div className="results">
        {results.map((book) => (
          <BookCard key={book.key} book={book} onAdd={() => addToBookshelf(book)} />
        ))}
      </div>
    </div>
  );
};

export default BookSearch;
