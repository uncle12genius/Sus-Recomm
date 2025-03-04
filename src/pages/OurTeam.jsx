import React from 'react';

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Satya Nadella",
      title: "Chairman and Chief Executive Officer",
      image: "",
    },
    {
      name: "Takeshi Numoto",
      title: "Executive Vice President and Chief Marketing Officer",
      image: "",
    },
    {
      name: "Brad Smith",
      title: "Vice Chair and President",
      image: "",
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6" id="OurTeam">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full text-center">
        {teamMembers.map((exec, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={exec.image || "https://via.placeholder.com/150"}
              alt={exec.name}
              className="w-40 h-40 rounded-full object-cover mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-900">{exec.name}</h2>
            <p className="text-gray-600">{exec.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurTeam;
