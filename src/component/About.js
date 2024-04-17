import React from "react";
import about from "../assets/skill.png";
import mongoDB from "../assets/mongoDB.jpg";
import { BsFiletypeHtml } from "react-icons/bs";
import { TbFileTypeCss } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import "../App.css"

const About = () => {
  return (
    <div className="" id="about">
      <div className="text-7xl pt-10 bg-violet-700 text-center font-sri-font skills text-white">
        Skills
      </div>
      <div
        className="
         bg-violet-700 grid pt-10 pb-10
          lg:grid-cols-2 sm:p-2
          skills    ">
        <div className=" left_slide flex flex-col justify-center items-center pb-10 ">
          <img src={about} className="w-2/5 sm:w-3/4" alt="cell" />
          <div className="text-white text-start text-2xl font-sri-font">
            <ul className="list-disc px-[50px]">
              <li className="mt-4">
                <p className="">
                  I am proficient in various web development technologies such as
                  <span className="text-3xl text-yellow-300">  HTML, CSS, </span>
                  and
                  <span className="text-3xl text-green-300">  JavaScript</span>
                  .
                  I also have experience with popular frontend frameworks like
                  <span className="text-4xl text-yellow-400"> <FaReact className="inline" />  React </span>

                  and libraries like Bootstrap.
                </p>
              </li>
              <li className="mt-4">
                <p>On the backend, I am skilled in
                  <span className="text-4xl text-rose-400">  Node.js </span>
                  and
                  <span className="text-4xl text-yellow-400"> Express.js, </span>
                  with knowledge of
                  <span className="text-4xl text-green-400"> MongoDB </span>
                  for database management.</p>
              </li>
              <li className="mt-4">
                <p>
                  In addition, I have familiarity with
                  <span className="text-4xl text-white"> Redux </span>
                  for state management and have used GitHub extensively for version control.
                  My UI design skills are enhanced by my knowledge of
                  <span className="text-4xl text-white">   Tailwind CSS and Material-UI. </span>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className=" right_slide flex flex-col justify-center items-center grid-skills">
          <div className="grid grid-cols-3  gap-7 text-white  font-sri-font sm:mt-10 sm:mb-10 sm:pb-7 "
          >
            <div class="circle-skill round-style">
              <BsFiletypeHtml class="w-12 h-12 ml-5" />
            </div>
            <div class="circle-skill round-style">
              <TbFileTypeCss class="w-12 h-12  ml-5" />
            </div>
            <div class="circle-skill round-style">
              <TbBrandJavascript class="w-12 h-12  ml-5" />
            </div>
            <div class="circle-skill round-style">
              <FaReact class="w-12 h-12  ml-5" />
            </div>
            <div class="circle-skill round-style">
              <SiMui class="w-12 h-12  ml-5" />
            </div>
            <div class="circle-skill round-style">
              <FaNode class="w-12 h-12  ml-5" />
            </div>
            <div class="circle-skill round-style">
              <img src={mongoDB} alt="mongoDB" className="w-12 h-12 ml-5" />
            </div>
            <div class="circle-skill round-style">
              <FaBootstrap class="w-12 h-12  ml-5" />
            </div>
            <div class="circle-skill round-style">
              <p className="mt-2 text-2xl font-bold text-white">
                Tailwind
              </p>
            </div>
            <div class="circle-skill round-style">
              <p className="mt-2 text-2xl font-bold text-white">
                Redux
              </p>
            </div>
            <div class="circle-skill round-style">
              <FaSquareGithub class="w-12 h-12  ml-5" />
            </div>
            <div class="circle-skill round-style">
              <SiExpress class="w-12 h-12  ml-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
