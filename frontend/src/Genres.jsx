import React from "react";

const Genres = () => {
  return (
    <div className="container my-4">
      <h2>Genres</h2>
      <div className="d-flex gap-3">
        <button className="btn btn-outline-primary">Fiction</button>
        <button className="btn btn-outline-primary">Mystery</button>
        <button className="btn btn-outline-primary">Fantasy</button>
        <button className="btn btn-outline-primary">Science Fiction</button>
        <button className="btn btn-outline-primary">Non-Fiction</button>
      </div>
    </div>
  );
};

export default Genres;
