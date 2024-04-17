import React from "react";
import profile from "../assets/laptop-boy.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import "../App.css";
import { FaFilePdf } from 'react-icons/fa';
import resumePdf from '../assets/my_resume.pdf';

const Profile = () => {
  return (
    <div className="profile-container" id="profile">
      <div className="grid lg:grid-cols-2 bg-violet-300 py-5 ">
        <div
          className="profile-info flex flex-col 
          justify-center items-center py-5
          m-10">
          <div className="animated-info">
            <h1 className="text-white 
             lg:text-6xl sm:text-5xl xs:text-4xl
              font-sri-font sm:text-start">
              Hi,
              <br />
              I'm <span className="text-blue-700 select-none px-10"> Anandan</span>
              <p className="text-5xl">MERN Stack Developer</p>
            </h1>
            <div className="social-icons flex py-5 ">
              <a href="https://twitter.com/home">
                <FaXTwitter className="pr-3 hover:text-white" size={70} />
              </a>
              <a href="https://www.facebook.com/">
                <FaFacebook className="pr-3 hover:text-green-500" size={70} />
              </a>
              <a href="https://www.instagram.com/">
                <FaInstagramSquare className="pr-3 hover:text-rose-800" size={70}
                />
              </a>
              <a href="https://www.linkedin.com/in/anandan-r-32488b194/">
                <GrLinkedin className="pr-3 hover:text-blue-700" size={70}
                />
              </a>
              <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="inline-block bg-black hover:bg-red-600 text-white font-bold py-2 px-4 text-2xl rounded-lg shadow-lg transition duration-300 ease-in-out mr-4 pt-4 ">
                <FaFilePdf className="inline-block mr-2 text-2xl" /> resume
              </a>
            </div>
          </div>
        </div>
        <div
          className="profile-image flex justify-center items-center sm:py-5">
          <img src={profile} className="w-1/2 max-w-md boy-img" alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
