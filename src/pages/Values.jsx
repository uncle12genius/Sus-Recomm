import React from 'react';

const core = [
  {
    title: "Partnership",
    description: "We build lasting trust with clients, experts, and colleagues. Through teamwork, we collaborate within our company and with partners to create better solutions and achieve shared success.",
    color: "border-yellow-500",
    textColor: "text-yellow-600",
    image: "./partnership.png",
  },
  {
    title: "Results",
    description: "We exist to create a sustainable future. Every goal, outcome, and impact we achieve aligns with this mission. We stay focused, ensuring what needs to be done gets done",
    color: "border-blue-500",
    textColor: "text-blue-600",
    image: "./results.png",
  },
  {
    title: "Integrity",
    description: "Trust is the foundation of our autonomy, authenticity, and transparency. It drives our connections with customers, partners, and each other, ensuring integrity in every interaction and enhancing the user experience",
    color: "border-red-500",
    textColor: "text-red-600",
    image: "./integrity.png", 
  },
  {
    title: "Trust",
    description: "Trust drives transparency, authenticity, and meaningful connections. Each individual builds trustworthiness and extends trust to others, ensuring credibility and integrity in every interaction, creating a reliable and seamless user experience",
    color: "border-green-500",
    textColor: "text-green-600",
    image: "./trust.png",
  },
  {
    title: "Efficiency",
    description: "We work efficiently by using creativity, smart planning, and agile problem-solving. With focus, flexibility, and hard work, we achieve results through practical solutions, clear priorities, and well-structured processes",
    color: "border-purple-500",
    textColor: "text-purple-600",
    image: "./efficiency.png", 
  },
];

const Values = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 text-center" id='Values'>
      <h2 className="text-3xl font-bold text-[#000072] mb-8">
        Our Core Values
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {core.map((item, index) => (
          <div 
            key={index} 
            className={`border-2 ${item.color} rounded-lg overflow-hidden shadow-lg bg-white transform transition-transform duration-300 hover:scale-105 hover:shadow-xl`}
          >
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-36 object-cover object-center" 
            />
            <div className="p-4">
              <h3 className={`text-xl font-bold ${item.textColor} mb-2`}>
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Values;