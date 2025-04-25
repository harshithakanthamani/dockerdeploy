import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="col-md-3">
      <div className="card mb-4">
        <img src={book.image} className="card-img-top" alt={book.title} />
        <div className="card-body">
          <h5 className="card-title">{book.title}</h5>
          <p className="card-text">by {book.author}</p>
          <p className="card-text">${book.price}</p>
          <button className="btn btn-success">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
