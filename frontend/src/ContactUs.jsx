import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_45qd64k",     // Replace with your EmailJS service ID
      "template_ez5s4di",    // Replace with your EmailJS template ID
      form.current,
      "hXRON01-RiWhuNkJi"      // Replace with your EmailJS public key
    )
    .then(() => {
      alert("Message sent successfully!");
      form.current.reset();
    }, () => {
      alert("Failed to send message. Please try again.");
    });
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-sm p-4">
            <h2 className="text-center mb-4">Contact Us</h2>
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group mb-3">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="user_name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="user_email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="message">Your Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
