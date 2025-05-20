import React from 'react';

const Plans = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center text-2xl sm:text-3xl font-bold text-gray-700 mb-8">PLANS</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4 flex flex-col h-full">
          <img src="./office1.jpg" alt="Virtual Office" className="rounded-lg h-48 object-cover mb-4" />
          <h3 className="text-lg font-bold mb-2">VIRTUAL OFFICES</h3>
          <p className="text-gray-600 text-sm">
            Our Virtual Offices provide your business with a professional address, phone services, and membership benefits including meeting room access.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4 flex flex-col h-full">
          <img src="./office2.jpg" alt="Customized Office" className="rounded-lg h-48 object-cover mb-4" />
          <h3 className="text-lg font-bold mb-2">CUSTOMIZED OFFICES</h3>
          <p className="text-gray-600 text-sm">
            Enjoy a premium location with fully customizable office space. Membership includes access to our community and meeting rooms.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4 flex flex-col h-full">
          <img src="./office3.jpg" alt="Meeting Rooms" className="rounded-lg h-48 object-cover mb-4" />
          <h3 className="text-lg font-bold mb-2">MEETING ROOMS</h3>
          <p className="text-gray-600 text-sm">
            Host your clients or team in our professional meeting rooms, included as part of your membership benefits.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4 flex flex-col h-full">
          <img src="./office1.jpg" alt="Working Spaces" className="rounded-lg h-48 object-cover mb-4" />
          <h3 className="text-lg font-bold mb-2">WORKING SPACES</h3>
          <p className="text-gray-600 text-sm">
            Our coworking spaces offer flexibility and community perks, ideal for freelancers and growing teams alike.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Plans;
