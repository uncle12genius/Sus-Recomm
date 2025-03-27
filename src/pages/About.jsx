import React from 'react';
import { Card, CardBody, Typography } from "@material-tailwind/react";

const About = () => {
  return (
    <div className="bg-white p-6" id='About'>
      {/* Page Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-semibold text-[#000072] border-b-4 border-[#000072] inline-block pb-2">
          Who We Are 
        </h1>
      </div>

      {/* Container for image and cards */}
      <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto">
        {/* Image on the left */}
        <div className="md:w-1/2">
          <img
            src="./who we are.jpg"
            className="rounded-lg w-full h-91.5"
            alt="Who We Are"
          />
        </div>

        {/* Mission Card */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <Card className="w-full">
            <CardBody>
              <Typography variant="h6" style={{color :'#000072 '}} className="mb-4 uppercase">
                Our Mission 
              </Typography>
              <Typography color="gray" className="mb-8 font-normal">
                Our mission is to promote efficient and effective design, recommendation,
                and implementation of sustainable infrastructural solutions to individuals, households,
                and communities towards a prosperous Africa.
              </Typography>
            </CardBody>
          </Card>

          {/* Vision Card */}
          <Card className="w-full">
            <CardBody>
              <Typography variant="h6" style ={{color:'#000072'}}className="mb-4 uppercase">
                Our Vision  
              </Typography>
              <Typography color="gray" className="mb-8 font-normal">
                Africa's hub of sustainable infrastructural solutions
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;