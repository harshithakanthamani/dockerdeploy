import React from "react";
import BookCard from "./BookCard";

const BookList = ({ books }) => {
  return (
    <div className="container">
      <div className="row">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
