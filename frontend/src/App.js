import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import HeroBanner from "./HeroBanner";
import FeaturedBooks from "./FeaturedBooks";
import Weather from "./Weather";
import Footer from "./Footer";
import ContactUs from "./ContactUs";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroBanner />
              <div className="container mt-4">
                <Weather />
                <FeaturedBooks />
              </div>
            </>
          }
        />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;



