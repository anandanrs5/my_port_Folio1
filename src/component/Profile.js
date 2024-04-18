import React from "react";
import profile from "../assets/laptop-boy.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import "../App.css";
import { FaFilePdf } from 'react-icons/fa';
import resumePdf from '../assets/resume.pdf';


const Profile = () => {
  return (
    <div className="profile" id="profile">
      <div className="grid lg:grid-cols-2 bg-violet-300 py-5 ">
        <div
          className="flex flex-col profile-left
          justify-center items-center py-5 px-10
          m-10">
          <div className="animated-info">
            <div className="text-4xl lg:text-5xl text-white  font-sri-font">
              <div className="">Hi,</div>
              <div>I'm  <span className="text-blue-700">Anandan</span></div>
              <div>MERN Stack Developer</div>
            </div>
            <div className="social-icons lg:flex py-5 ">
              <a href="https://twitter.com/home">
                <FaXTwitter className="pr-3 hover:text-white" size={70} />
              </a>
              <a href="https://www.facebook.com/">
                <FaFacebook className="pr-3 hover:text-green-500" size={70} />
              </a>
              <a href="https://www.instagram.com/">
                <FaInstagramSquare className="pr-3 hover:text-yellow-300" size={70}
                />
              </a>
              <a href="https://www.linkedin.com/in/anandan-r-32488b194/">
                <GrLinkedin className="pr-3 hover:text-blue-700" size={70}
                />
              </a>
              <a href={resumePdf} target="_blank" rel="noopener noreferrer"
                className="inline-block bg-black hover:bg-red-600 text-white font-bold py-2 
                px-4 text-2xl rounded-md  mr-4 pt-4 ">
                <FaFilePdf size={"20px"} className="inline-block mr-2 text-2xl" /> resume
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
