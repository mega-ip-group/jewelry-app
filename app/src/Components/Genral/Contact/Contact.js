import { width } from "@mui/system";
import React, { useState } from "react";
import "./Contact.css";
import { Link, useNavigate } from "react-router-dom";



const ContactForm = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/")

  };

  if (submitted) {
    return (
      
      <>
      
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="mb-3 pt-0">
          <button
            className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="submit" onSubmit={()=>{
              navigate("/")
            }}>
            Send a message
          </button>
        </div>
      </>
    );
  }

  return (
    <div
      className=" =h-screen flex flex-col 
      items-center justify-center">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-3 pt-0">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <textarea
            placeholder="Your message"
            name="message"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <button
            className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="submit">
            Send a message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;