import React from "react";

export const Experience = () => {
  return (
    <div
      id="experience"
      classNameName="scroll-mt-16 w-full md:h-full p-10 items-center py-16 bg-gray-100 dark:bg-gray-600"
    >
      <h1 classNameName="text-5xl md:text-9xl container mx-auto font-bold md:text-left text-gray-700 dark:text-gray-50">
        Experience.
      </h1>
      <div className="grid grid-cols-1  max-w-xl mx-auto pt-20">
        <div className="relative experience-card p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4 dark:shadow-lg dark:shadow-gray-700">
          <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-300 font-bold dark:text-gray-700">
            2022
          </h1>
          <h1 className="font-semibold text-xl dark:text-gray-300">
            Freelance Software Developer
          </h1>
          <a href="https://chytes.com" className="text-gray-500">
            Chytes Software
          </a>
          <p className="text-gray-600 dark:text-gray-400 my-2">
            Founded a software development company.
          </p>
        </div>
        <div className="divider-container flex flex-col items-center -mt-2">
          <div className="w-4 h-4 bg-green-500 rounded-full relative z-10 ">
            <div className="w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"></div>
          </div>
          <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
        </div>

        <div className="relative experience-card  p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4 dark:shadow-lg dark:shadow-gray-700">
          <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-300 font-bold dark:text-gray-700">
            2020
          </h1>
          <h1 className="font-semibold text-xl dark:text-gray-300">
            Full Stack Developer
          </h1>
          <a href="https://cenedex.com" className="text-gray-500">
            Cenedex Soltions
          </a>
          <p className="text-gray-600 dark:text-gray-400 my-2">
            I was tasked with developing a management system for a magento site.
            The administrative panel was built using Laravel. Optimization was a
            bit difficult seeing as magento is a hefty system when there is a
            lot of data but that was worked around with better queries and the
            reduction of redundant code.
          </p>
        </div>
        <div className="divider-container flex flex-col items-center -mt-2">
          <div className="w-4 h-4 bg-green-500 rounded-full relative z-10">
            <div className="w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"></div>
          </div>
          <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
        </div>
        <div className="relative experience-card  p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4 dark:shadow-lg dark:shadow-gray-700">
          <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-300 font-bold dark:text-gray-700">
            2019
          </h1>
          <h1 className="font-semibold text-xl dark:text-gray-300">
            Internship
          </h1>
          <a href="https://cenedex.com" className="text-gray-500">
            Cendex Solutions
          </a>
          <p className="text-gray-600 dark:text-gray-400 my-2">
            I developed a database management system using React.js, a framework
            that was used to add, modify and delete data entries which were used
            to manage the backend of a Shop assistant Artificial Intelligence.
          </p>
        </div>
        <div className="divider-container flex flex-col items-center -mt-2">
          <div className="w-4 h-4 bg-green-500 rounded-full relative z-10">
            <div className="w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"></div>
          </div>
          <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
        </div>
        <div className="relative experience-card  p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4 dark:shadow-lg dark:shadow-gray-700">
          <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-300 font-bold dark:text-gray-700">
            2019
          </h1>
          <h1 className="font-semibold text-xl dark:text-gray-300">
            Graduation
          </h1>
          <a href="https://sta.uwi.edu/" className="text-gray-500">
            UWI, St Augustine.
          </a>
          <p className="text-gray-600 dark:text-gray-400 my-2">
            Major in Computer Science and Mathematics
          </p>
        </div>
      </div>
    </div>
  );
};
