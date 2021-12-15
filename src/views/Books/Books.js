import BooksList from '../../components/BooksList';
import { fetchBooks } from '../../services/books';
import React, { useState, useEffect } from 'react';

export default function Films() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBooks();
      setData(data);
      await console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Books</h1>
      <BooksList books={data} />
    </div>
  );
}
