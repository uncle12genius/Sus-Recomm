import React from 'react';

const Mission = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-6 ">
      {/* Mission Section */}
      <div className="flex-1 p-4 border-r md:border-r-2 border-gray-300">
        <h3 className="text-lg font-bold text-[#000072]"> Our Mission</h3>
        <p className="mt-2 text-gray-700">
          Our mission is to promote efficient and effective design, recommendation,
          and implementation of sustainable infrastructural solutions to individuals, households,
          and communities towards a prosperous Africa.
        </p>
        <img src="./mission.png" className="mt-4 rounded-lg w-full" alt="Mission" />
      </div>
      
      {/* Vision Section */}
      <div className="flex-1 p-4">
        <h3 className="text-lg font-bold text-[#000072]"> Our Vision</h3>
        <p className="mt-2 text-gray-700">Africa's hub of sustainable infrastructural solutions</p>
        <img src="./vision.png" className="mt-4 rounded-lg w-full" alt="Vision" />
      </div>
    </div>
  );
};

export default Mission;
