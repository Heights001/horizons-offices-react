import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex flex-col sm:flex-row sm:justify-between items-center h-auto sm:h-20 p-4 bg-white text-black rounded-lg shadow-md sticky top-0 fixed top-0 z-50">
      {/* Logo */}
      <div className="mb-2 sm:mb-0">
        <img
          src="./1472576999-18-horizons-offices.png"
          alt="Logo"
          className="h-10 w-auto"
        />
      </div>

      {/* Flags */}
      <div className="flex space-x-2 mb-2 sm:mb-0">
        <img src="./Flag_of_Ghana.png" alt="Ghana" className="h-6 w-auto" />
        <img src="./Flag_of_Nigeria.png" alt="Nigeria" className="h-6 w-auto" />
        <img src="./Flag_of_Kenya.png" alt="Kenya" className="h-6 w-auto" />
      </div>

      {/* Nav Link */}
      <div>
        <a href="#" className="text-gray-700 font-semibold hover:text-blue-600 transition">
          About Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
