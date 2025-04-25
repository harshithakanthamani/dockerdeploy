import React from "react";
import BookList from "./BookList";
import deathOnTheNile from "./assets/images/death-on-the-nile.jpg";
import heartstopper from "./assets/images/heartstopper.jpg";
import callMeByYourName from "./assets/images/call-me-by-your-name.jpg";
import theBellJar from "./assets/images/the-bell-jar.jpg";


const featuredBooks = [
  { id: 1, title: "Death on the Nile", author: "Agatha Christie", price: 12.99, image: deathOnTheNile },
  { id: 2, title: "Heartstopper", author: "Alice Oseman", price: 9.99, image: heartstopper },
  { id: 3, title: "Call Me by Your Name", author: "André Aciman", price: 14.99, image: callMeByYourName },
  { id: 4, title: "The Bell Jar", author: "Sylvia Plath", price: 11.99, image: theBellJar },
];

const FeaturedBooks = () => {
  return (
    <div className="container my-5">
      <h2>Featured Books</h2>
      <BookList books={featuredBooks} />
    </div>
  );
};

export default FeaturedBooks;
