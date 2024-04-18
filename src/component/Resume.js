import React from 'react';
import resumeImage from '../assets/resume.jpg';
import { FaFilePdf } from 'react-icons/fa';
import resumePdf from '../assets/resume.pdf';

const Resume = () => {
    return (
        <div className="bg-violet-600 p-10" id="resume">
            <div className="max-w-4xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 font-sri-font p-10">
                    <div>
                        <img src={resumeImage} alt="Resume" className="rounded-lg shadow-lg" />
                    </div>
                    <div className="text-center lg:text-left">
                        <h2 className="text-6xl font-bold text-white mb-4">Explore My Resume</h2>
                        <p className="text-white text-2xl mb-4">Click the buttons below to view or download my resume.</p>
                        <div className='flex sm:justify-start'>
                            <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out mr-4">
                                <FaFilePdf className="inline-block mr-2 text-xl" /> View
                            </a>
                            <a href={resumePdf} download="resume.pdf" className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out">
                                <FaFilePdf className="inline-block mr-2 text-xl" /> Download
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;

