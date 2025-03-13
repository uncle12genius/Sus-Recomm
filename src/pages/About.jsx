import React from 'react';

const About = () => {
  return (
    <div className="bg-white p-6" id='About'>
      
      {/* Page Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-semibold text-[#000072] border-b-4 border-[#000072] inline-block pb-2">
          About Us
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Image on the left */}
        <div>
          <img
            src="./who we are.jpg"
            className="rounded-lg w-full"
            alt="Who We Are"
          />
        </div>

        {/* Centered text on the right */}
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-bold text-[#000072] mb-4">Who We Are</h2>
          
          <p className="text-gray-700 max-w-md leading-relaxed">
            <span className="font-semibold text-[#000072]">SusRecomm</span> envisions a sustainable future for all through 
            innovative solutions for households and communities. We inspire imagination and execute 
            <span className="font-semibold"> sustainable green solutions</span> in housing, water, energy, and infrastructure 
            by partnering with key stakeholders. <br /><br />
            Our partners come from diverse crafts and expertise, allowing us to combine 
            <span className="font-semibold"> innovative solutions</span> to get the job done—and get it done right.  
            <span className="italic block mt-4">"Great things happen when we come together to see beyond the problem."</span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;
