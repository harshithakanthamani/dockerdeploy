import React from "react";

const NewsletterSignup = () => {
  return (
    <div className="container text-center my-5">
      <h3>Stay Updated on New Releases</h3>
      <p>Subscribe to our newsletter for the latest book arrivals and exclusive discounts.</p>
      <input type="email" className="form-control d-inline w-50" placeholder="Enter your email" />
      <button className="btn btn-primary mt-2">Subscribe</button>
    </div>
  );
};

export default NewsletterSignup;
