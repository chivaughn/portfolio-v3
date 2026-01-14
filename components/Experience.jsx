import React from "react";

const experiences = [
  {
    year: "2024",
    title: "Agostini Limited – Innovation Lab",
    link: "https://agostinilimited.com/",
    description:
      "Currently working as a Front-End Developer at Agostini Limited's Innovation Lab. Responsible for designing and implementing user interfaces for various web applications supporting the company's digital transformation initiatives using Flutter, Svelte and Firebase.",
  },
  {
    year: "2023",
    title: "Nucleus Automation Systems",
    link: "https://www.nucleusltd.com/",
    description:
      "Worked as a Full-Stack Developer developing internal systems using PHP, Laravel, JavaScript and MySQL to streamline business operations.",
  },
  {
    year: "2022",
    title: "HARTT – Humanitarian Association of T&T",
    link: "https://thehartt.com/",
    description:
      "Built NPO applications connecting rural communities to traffic information using Flutter and Firebase.",
  },
  {
    year: "2020",
    title: "Cenedex Solutions – Full Stack Developer",
    link: "https://cenedex.com",
    description:
      "Developed Magento management systems and optimized performance using Laravel.",
  },
  {
    year: "2019",
    title: "Cenedex Solutions – Internship",
    link: "https://cenedex.com",
    description:
      "Built a React-based database management system for an AI shop assistant.",
  },
  {
    year: "2019",
    title: "Graduation – UWI St Augustine",
    link: "https://sta.uwi.edu/",
    description: "Major in Computer Science and Mathematics.",
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className="scroll-mt-16 w-full py-16 bg-gray-100 dark:bg-gray-600"
    >
      <h1 className="text-5xl md:text-9xl container mx-auto font-bold text-gray-700 dark:text-gray-50 px-10">
        Experience.
      </h1>

      <div className="relative max-w-xl mx-auto mt-20 flex flex-col">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            {/* Card */}
            <div className="relative experience-card p-6 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10">
              <h1 className="absolute -top-10 -left-4 text-4xl text-gray-300 font-bold dark:text-gray-700">
                {exp.year}
              </h1>
              <h2 className="font-semibold text-xl dark:text-gray-300">
                {exp.title}
              </h2>
              <a
                href={exp.link}
                className="text-gray-500 text-sm"
                target="_blank"
                rel="noreferrer"
              >
                {exp.link}
              </a>
              <p className="text-gray-600 dark:text-gray-400 mt-3">
                {exp.description}
              </p>
            </div>

            {/* Divider */}
            {index !== experiences.length - 1 && (
              <div className="flex flex-col items-center -mt-2">
                <div className="w-4 h-4 bg-green-500 rounded-full relative z-10">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-ping absolute inset-0" />
                </div>
                <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-1" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
