import React from "react";
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <section className="bg-gradient-to-b from-[#F5F7FF] via-[#fffbee] to-[#E6EFFF] py-16 px-4 md:px-16 lg:px-24 min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-indigo-700 mb-4">
        Welcome to Jarurat Care
      </h1>
      <p className="text-lg md:text-2xl text-gray-700 mb-6">
        Your trusted platform for patient management
      </p>
      <Link to="/patients" >
      <button className="bg-indigo-700 text-white px-6 py-3 rounded-full hover:bg-indigo-600 transition duration-300"
      >
        Get Started
      </button>
      </Link>
    </section>
  );
};

export default Home;
