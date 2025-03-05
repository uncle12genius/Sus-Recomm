import React from "react";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "James Ayako Ondiege",
      title: "Co-founder & CEO",
      image: "/jim.png",
    },
    {
      name: "Florence Njoki",
      title: "Chief Operation Officer",
      image: "/njoki.jpg",
    },
    {
      name: "Charles Nyamwaro",
      title: "Chief Business Development Officer",
      image: "/chuck.jpg",
    },
  ];

  return (
    <div className="flex justify-center items-center bg-white py-8 min-h-[80vh]" id="OurTeam">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-8">
          Leadership Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full text-center">
          {teamMembers.map((exec, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 transition-transform duration-300 hover:scale-105"
            >
              <img
                src={exec.image || "/placeholder.jpg"}
                alt={exec.name || "Team Member"}
                className="w-32 h-32 rounded-full object-cover mb-3 border-2 border-gray-300 shadow-lg"
              />
              <h2 className="text-xl font-semibold text-gray-900">{exec.name}</h2>
              <p className="text-[#000072]">{exec.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
