import React from "react";
import lawnshark from '../assets/lawnshark.png';
import lawnshark_logo from '../assets/lawnshark_logo.png';
import SportsWanderTitle from "../assets/svg/SportsWanderTitle";
import SportsWanderImage from "../assets/sportswander_image.png";
import BigTreasure from "../assets/bigtreasure.png";

const Projects = () => {
  return (
    <div className="" id="projects">
      <div className="text-7xl p-10 bg-violet-300 text-center font-sri-font  text-blue-800">
        My Projects
      </div>
      <div className="flex flex-row flex-wrap md:flex-col lg:flex-row project
         lg:justify-evenly sm:items-center bg-violet-300  font-sri-font">
        <div className="sm:w-full md:w-1/2 lg:w-auto m-10 project_1">
          <a href="https://dev.rovertech.live"
            className="flex flex-col items-center bg-white border
           border-gray-200 rounded-lg shadow md:max-w-xl hover:bg-violet-300
            dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-violet-500">
            <img className="object-cover w-full rounded-t-lg h-96 
            md:h-auto md:w-65 md:rounded-none md:rounded-s-lg" src={lawnshark} alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <img src={lawnshark_logo} alt="" />
              </h5>
              <p className="mb-3 font-normal py-1 text-gray-700 dark:text-gray-400">
                IoT based Project
              </p>
            </div>
          </a>
        </div>
        <div className="sm:w-full md:w-1/2 lg:w-auto m-10 project_2">
          <a href="https://sportswander.com" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg
           shadow  md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className=" w-full rounded-t-lg h-96 md:h-auto md:w-65 md:rounded-none md:rounded-s-lg" src={SportsWanderImage} alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <SportsWanderTitle />
              </div>
              <p className="mb-3 font-normal text-center text-gray-700 dark:text-gray-400 py-1">
                E-commerce
              </p>
            </div>
          </a>
        </div>
        <div className="sm:w-full md:w-1/2 lg:w-auto m-10 project_3">
          <a href="https://bigtreasure.netlify.app" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-65 md:rounded-none md:rounded-s-lg" src={BigTreasure} alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Big Treasure
              </h5>
              <p className="mb-3 font-normal text-center text-gray-700 dark:text-gray-400 py-1">
                E-commerce
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
