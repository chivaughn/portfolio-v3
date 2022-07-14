import React from "react";

export const Skills = () => {
  return (
    <div
      id="skills"
      className="scroll-mt-16 w-full  md:h-full p-10 items-center py-16 bg-gray-200 dark:bg-gray-600"
    >
      <div className="container mx-auto">
        <h1 className="text-5xl md:text-9xl font-bold md:text-left text-gray-700 dark:text-gray-50">
          Skills.
        </h1>
        <div className="flex flex-row flex-wrap justify-center mt-8">
          <img
            src="/assets/tech/javascript.png"
            alt=""
            className="h-40 w-40 px-4 py-4"
          />
          <img
            src="/assets/tech/html.png"
            alt=""
            className="h-40 w-40 mx-4 my-4"
          />
          <img
            src="/assets/tech/css.png"
            alt=""
            className="h-40 w-40 mx-4 my-4"
          />
          <img
            src="/assets/tech/react.png"
            alt=""
            className="h-40 w-40 mx-4 my-4"
          />
          <img
            src="/assets/tech/firebase.png"
            alt=""
            className="h-40 w-40 mx-4 my-4"
          />
          <img
            src="/assets/tech/mongodb.png"
            alt=""
            className="h-40 w-40 mx-4 my-4"
          />
          <img
            src="/assets/tech/mysql.png"
            alt=""
            className="h-40 w-40 mx-4 my-4"
          />
          <img
            src="/assets/tech/git.png"
            alt=""
            className="h-40 w-40 mx-4 my-4"
          />
        </div>
      </div>
    </div>
  );
};
