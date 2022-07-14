import React from "react";
import Image from "next/image";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <Image alt="hero" height={300} width={300} src="/assets/hero.svg" />
          <h1 className="py-4 text-gray-700 dark:text-gray-50">
            {" Hi, I'm "} <span className="text-[#178573]">Chivaughn</span>{" "}
            <span className="animate-wiggle inline-flex origin-bottom">👋</span>
          </h1>
          <h1 className="py-2 text-gray-700 dark:text-gray-50">
            A Front-End Web Developer
          </h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto text-sm tracking-wider uppercase dark:text-gray-50">
            Based in Trinidad and Tobago <span>🇹🇹</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
