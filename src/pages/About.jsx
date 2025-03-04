import React from 'react';

const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white" id='About'>
      {/* Left Section */}
      <div>
        <h2 className="text-xl font-bold">Who We Are</h2>
        <p className="mt-2 text-gray-700">
           SusRecomm envisions a sustainable future for all through innovative solutions to households and communities.
           We inspire imagination and execute sustainable green solutions in housing, water, energy, and infrastructure by partnering with key stakeholders.
           Our partners hail from every craft and expertise in our areas of focus, allowing us to combine innovative solutions to get the job done and get it done right.
          </p>
          <img
            src="./house.png"
            className="mt-4 rounded-lg w-full"
          />
        
      </div>

      {/* Right Section */}
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-bold">Mission</h3>
          <p className="mt-2 text-gray-700">
            Our mission is to promote efficient and effective design, recommendation,
           and implementation of sustainable infrastructural solutions to individuals, households, 
           and communities towards a prosperous Africa.
          </p>
          <img
            src="./mission.png"
            className="mt-4 rounded-lg w-full"
          />
        </div>
        <div>
          <h3 className="text-lg font-bold">Vision</h3>
          <p className="mt-2 text-gray-700">
          Africa's hub of sustainable infrastructural solutions
          </p>
          <img
          src="./vision.png"
           className="mt-4 rounded-lg w-full"
        />
          
          
        </div>
      </div>
    </div>
  );
};

export default About;
