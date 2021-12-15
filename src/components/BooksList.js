import React from 'react';

export default function BooksList({ books }) {
  return (
    <section className="books">
      {books.map((book) => (
        <div className="books" key={book.title}>
          <a href={book.wikiUrl}>{book.title}</a>
        </div>
      ))}
    </section>
  );
}
