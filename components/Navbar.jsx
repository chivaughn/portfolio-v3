import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import {
  AiFillMail,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineMail,
  AiOutlineFilePdf,
} from "react-icons/ai";
import {
  FaGithub,
  FaLightbulb,
  FaLinkedinIn,
  FaPhone,
  FaMail,
  FaSun,
} from "react-icons/fa";
import { BsSun } from "react-icons/bs";
import { DarkMode } from "./DarkMode";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-lg z-50 dark:text-white bg-slate-50 dark:bg-gray-800 dark:shadow-gray-900"
          : "fixed w-full h-20  z-50 dark:text-white bg-slate-50 dark:bg-gray-800 "
      }
    >
      <div className="container mx-auto flex flex-row justify-items-center justify-between  items-center w-full h-full  px-5 2xl:px-16">
        <Link href="/">
          <span className="flex uppercase tracking-wide text-2xl  font-semibold dark:text-white cursor-pointer">
            Chivaughn
          </span>
        </Link>

        <div className="md:inline-flex md:flex-row md:ml-auto md:w-auto w-full md:items-center items-start flex flex-col md:h-auto gap-4 font-medium mr-10">
          <ul className="hidden md:flex">
            <Link href="/#about">
              <li className="dark:text-white lg:inline-flex lg:w-auto w-full text-black px-3 py-2 rounded items-center justify-center hover:bg-gray-100 dark:hover:text-black">
                About
              </li>
            </Link>
            <Link href="/#projects">
              <li className="dark:text-white lg:inline-flex lg:w-auto w-full text-black px-3 py-2 rounded items-center justify-center hover:bg-gray-100 dark:hover:text-black">
                Projects
              </li>
            </Link>
            <Link href="/#skills">
              <li className="dark:text-white lg:inline-flex lg:w-auto w-full text-black px-3 py-2 rounded items-center justify-center hover:bg-gray-100 dark:hover:text-black">
                Skills
              </li>
            </Link>
            <Link href="/#experience">
              <li className="dark:text-white lg:inline-flex lg:w-auto w-full text-black px-3 py-2 rounded items-center justify-center hover:bg-gray-100 dark:hover:text-black">
                Experience
              </li>
            </Link>

            <Link href="mailto:chivaughncharles@gmail.com">
              <li className="dark:text-white lg:inline-flex lg:w-auto w-full text-black px-3 py-2 rounded items-center justify-center hover:bg-gray-100 dark:hover:text-black">
                <AiOutlineMail size={25} />
              </li>
            </Link>
            <Link href="/assets/CV2022.pdf">
              <li className="dark:text-white lg:inline-flex lg:w-auto w-full text-black px-3 py-2 ml-5 border rounded items-center justify-center hover:bg-gray-100 dark:hover:text-black">
                Resume
              </li>
            </Link>
          </ul>
        </div>

        <div className="flex">
          <div
            onClick={handleNav}
            className="md:hidden flex flex-col justify-center mr-5"
          >
            <AiOutlineMenu size={25} />
          </div>
          <DarkMode />
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/60" : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-3/4 sm:w-3/5 md:w-1/2 h-screen bg-slate-50 p-10 ease-in duration-500 dark:bg-gray-700"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="">
            <div className="flex justify-between w-full items-center border-b border-gray-300 pb-10">
              <span className="uppercase tracking-wide text-2xl  font-semibold dark:text-white">
                CC
              </span>
              <div
                onClick={handleNav}
                className="rounded-full shadow-md shadow-gray-400 dark:shadow-gray-800 p-3 cursor-pointer"
              >
                <AiOutlineClose size={20} />
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul>
                <Link href="/#about">
                  <li
                    onClick={handleNav}
                    className="dark:text-white lg:inline-flex lg:w-auto w-full text-black px-3 py-2 rounded items-center justify-center hover:bg-gray-100 dark:hover:text-black"
                  >
                    About
                  </li>
                </Link>
                <Link href="/#projects">
                  <li
                    onClick={handleNav}
                    className="dark:text-white lg:inline-flex lg:w-auto w-full text-black px-3 py-2 rounded items-center justify-center hover:bg-gray-100 dark:hover:text-black"
                  >
                    Projects
                  </li>
                </Link>
                <Link href="/#skills">
                  <li
                    onClick={handleNav}
                    className="dark:text-white lg:inline-flex lg:w-auto w-full text-black px-3 py-2 rounded items-center justify-center hover:bg-gray-100 dark:hover:text-black"
                  >
                    Skills
                  </li>
                </Link>
                <Link href="/#experience">
                  <li
                    onClick={handleNav}
                    className="dark:text-white lg:inline-flex lg:w-auto w-full text-black px-3 py-2 rounded items-center justify-center hover:bg-gray-100 dark:hover:text-black"
                  >
                    Experience
                  </li>
                </Link>
              </ul>

              <div className="pt-40">
                <p className="text-sm uppercase tracking-widest text-blue-400 dark:text-white">
                  Connect With Me
                </p>
                <div className="flex items-center justify-between my-4 w-full sm:w-4/5">
                  <Link href="http://www.linkedin.com/in/Chivaughn">
                    <div className="rounded-full shadow-md dark:shadow-gray-800 shadow-gray-400 p-2 hover:scale-105 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </Link>
                  <Link href="https://github.com/chivaughn">
                    <div className="rounded-full shadow-md dark:shadow-gray-800 shadow-gray-400 p-2 hover:scale-105 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </Link>
                  <Link href="https://mailto:chivaughncharles@gmail.com/">
                    <div className="rounded-full shadow-md dark:shadow-gray-800 shadow-gray-400 p-2 hover:scale-105 ease-in duration-300">
                      <AiFillMail />
                    </div>
                  </Link>
                  <Link href="tel:+18684901674">
                    <div className="rounded-full shadow-md dark:shadow-gray-800 shadow-gray-400 p-2 hover:scale-105 ease-in duration-300">
                      <FaPhone />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
