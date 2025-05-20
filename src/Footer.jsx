import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        
        {/* Ghana */}
        <div>
          <h3 className="text-yellow-500 font-semibold mb-2">VISIT US IN GHANA</h3>
          <p className="text-sm text-green-300">Accra, Ghana</p>
          <p className="text-sm text-white mt-1">One Airport Square, Airport City<br />8th floor</p>
        </div>

        {/* Nigeria */}
        <div>
          <h3 className="text-yellow-500 font-semibold mb-2">VISIT US IN NIGERIA</h3>
          <p className="text-sm text-green-300">Lagos, Nigeria</p>
          <p className="text-sm text-white mt-1">Sterling Bank Building</p>
        </div>

        {/* Kenya */}
        <div>
          <h3 className="text-yellow-500 font-semibold mb-2">VISIT US IN KENYA</h3>
          <p className="text-sm text-green-300">Nairobi, Kenya</p>
          <p className="text-sm text-white mt-1">
            Belgravia Center, 14 Riverside Drive<br />
            Hanover Center, 14 Riverside Drive
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
