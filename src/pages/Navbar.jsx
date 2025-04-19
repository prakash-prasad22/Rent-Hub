// src/components/Navbar.jsx
import React from 'react';

function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-[2000]">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800 font-[primary]">RentHubs</div>
        <div className="space-x-6">
          {["Home", "Services", "Contacts", "Blog"].map((item, index) => (
            <button
              key={index}
              className="text-gray-700 font-[secondary] text-lg hover:text-blue-500 transition duration-300"
              onClick={() => console.log(`${item} clicked`)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
