import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="scroll-mt-16 w-full md:h-full p-10 items-center py-16 bg-gray-200 dark:bg-gray-600"
    >
      <h1 className="container mx-auto text-5xl md:text-9xl font-bold m-6 md:text-left text-gray-700 dark:text-gray-50">
        About Me.
      </h1>
      <div className="container m-auto  md:grid grid-cols-2 gap-40 py-10">
        <div className="col-span-1 text-gray-700 dark:text-gray-50 leading-relaxed  ">
          <p className="mb-4">
            Hi! My name is Chivaughn. My interest in web development started
            back in 2009 when I decided to try editing custom Tumblr themes
            which pushed me into learning more about HTML and CSS!
          </p>

          <p className="mb-4">
            Fast-forward to today, and I’ve had the privilege of working at an{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://mpa.gov.tt/"
              className="link-underline link-underline-black text-blue-400"
            >
              governmental organization
            </a>
            ,{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://cenedex.com/"
              className="link-underline link-underline-black text-blue-400"
            >
              {" "}
              a start-up
            </a>
            ,{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://thehartt.com/"
              className="link-underline link-underline-black text-blue-400"
            >
              {" "}
              a NGO{" "}
            </a>
            , and{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://pridett.com/"
              className="link-underline link-underline-black text-blue-400"
            >
              {" "}
              a NPO{" "}
            </a>
            . My main focus these days is building accessible, inclusive
            products and digital experiences at my company for a variety of
            clients.
          </p>
        </div>
        <div className="">
          <img src="/assets/app.svg" />
        </div>
      </div>
    </div>
  );
};

export default About;
