import React from 'react';

const core = [
  {
    title: "Partnership",
    description: "We build trusted and enduring relationships with clients, experts, and colleagues to achieve win-win outcomes. Our culture of teamwork allows us to work together within the Company and with our customers and partners to deliver better solutions and collectively accomplish our goals.",
    color: "border-yellow-500",
    textColor: "text-yellow-600",
    image: "./partnership.png",
  },
  {
    title: "Results",
    description: "We believe in only one result in our existence, delivering a sustainable future to humanity. Our short-term and medium-term performance and achievement of goals (outputs, outcomes, and impact) are aligned to that single result. We are focused on getting what needs to get done, done.",
    color: "border-blue-500",
    textColor: "text-blue-600",
    image: "./results.png",
  },
  {
    title: "Integrity",
    description: "Relations within the Company are based on trust, which is the cornerstone of our autonomy, frankness, and authenticity. Our ability to connect with customers, partners, and each other is based on trust as the currency that makes our customers tick.",
    color: "border-red-500",
    textColor: "text-red-600",
    image: "./integrity.png", 
  },
  {
    title: "Trust",
    description: "Relations within the company are based on trust, which is the cornerstone of autonomy, frankness and authenticity. It is for each person to establish and develop his or her trustworthiness and for each person to extend trust to others.",
    color: "border-green-500",
    textColor: "text-green-600",
    image: "./trust.png",
  },
  {
    title: "Efficiency",
    description: "We strive to be efficient by continuously and iteratively engaging our creative minds to achieve results in a focused yet fast, practical yet economical, flexible yet simple. We believe in hard work and putting in the extra effort to get things done with a combination of well-planned processes, smart priorities, and agile problem-solving.",
    color: "border-purple-500",
    textColor: "text-purple-600",
    image: "./efficiency.png", 
  },
];

const Values = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800">
        Our Core Values
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-5xl mx-auto">
        {core.map((item, index) => (
          <div key={index} className={`border-2 ${item.color} rounded-lg overflow-hidden shadow-lg bg-white`}>
            <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800 mt-2">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Values;
