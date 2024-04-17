import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { SiReactivex } from "react-icons/si";

const Header = () => {
  const [hrefggle, sethrefggle] = useState(false);

  return (
    <div>
      <div className="flex justify-between px-5 py-5  font-sri-font bg-secondary"
        onClick={() => sethrefggle(!hrefggle)} >
        <div className="font-bold text-4xl text-white hover:text-yellow-300 "><SiReactivex size={"50px"} className="inline mr-3 " /> Anandan</div>
        <nav className="header_section mt-2">
          <ul className="flex text-white sm:hidden md:flex text-2xl">
            <li >
              {" "}
              <a
                href="/" className=" hover:text-black  font-bold">Home</a>{" "}
            </li>
            <li>
              <a
                href="#about" className=" hover:text-black  font-bold">About</a>{" "}
            </li>
            <li>
              <a
                href="#projects" className=" hover:text-black  font-bold"
              >Projects</a>{" "}
            </li>
            <li>
              <a href="#resume" className=" hover:text-black  font-bold">Resume</a>{" "}
            </li>
            <li>
              <a href="#contact"
                className=" hover:text-black  font-bold"
              >Contact</a>{" "}
            </li>
          </ul>
        </nav>
        {hrefggle && (
          <nav className="header_section block md:hidden ">
            <ul className="flex flex-col text-white mobile-nav">
              <li>
                {" "}
                <a href="/">Home</a>{" "}
              </li>
              <li>
                <a href="#about">About</a>{" "}
              </li>
              <li>
                <a href="#projects">Projects</a>{" "}
              </li>
              <li>
                <a href="#resume">Resume</a>{" "}
              </li>
              <li>
                <a href="#contact">Contact</a>{" "}
              </li>
            </ul>
          </nav>
        )}
        <button onClick={() => sethrefggle(!hrefggle)} className="block md:hidden">
          <RxHamburgerMenu size={25} />
        </button>
      </div>
    </div>
  );
};

export default Header;

