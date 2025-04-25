import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">Book Haven</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Genres</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Bestsellers</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Cart (0)</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
