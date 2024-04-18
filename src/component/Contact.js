import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../App.css';
import { BsEnvelope } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { LiaAddressCardSolid } from "react-icons/lia";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_0ebwew9', 'template_m2vbenj', form.current, {
                publicKey: 'i-zzY-yfQs8R2A7Sl',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert("success")
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div id="contact">
            <div className='grid lg:grid-cols-2 grid-cols-1 bg_change bg-no-repeat font-sri-font contact'>
                <div className='flex flex-col justify-center items-center  '>
                    <div className='bg-violet-700
 border-none rounded-lg mt-10 text-white p-3 lg:p-10
                    '>
                        <div className="lg:text-6xl text-2xl text-center font-bold p-5 ">Contact</div>
                        <div className='flex justify-between p-3 text-xl '>
                            <BsEnvelope className='w-6 h-6 mr-2' />  anandansmart50@gmail.com
                        </div>
                        <div className='flex justify-between p-3 text-xl' >
                            <BsFillTelephoneFill className='w-6 h-6 mr-2' />
                            +91 63690 64563
                        </div>
                        <div className='flex justify-between p-3 text-xl'>
                            <LiaAddressCardSolid className='w-7 h-7 mr-2' />
                            Address : 73/139, EBP Nagar, Erode
                        </div>
                    </div>
                </div>
                <div className=''>
                    <form ref={form} onSubmit={sendEmail} className='flex flex-col space_center lg:m-[100px] m-7'>
                        <label className='text-3xl font-bold lg:text-white'>Name</label>
                        <input
                            type="text"
                            name="user_name"
                            required
                            className='border rounded-lg p-3 mt-1 mb-4'
                        />
                        <label className='text-3xl font-bold lg:text-white md:text-black'>Email</label>
                        <input
                            type="email"
                            name="user_email"
                            required
                            className='border rounded-lg p-3 mt-1 mb-4'
                        />
                        <label className='text-3xl font-bold md:text-black lg:text-white '>Message</label>
                        <textarea
                            name="message"
                            className='border rounded-lg mt-1 mb-4'
                            rows={5}
                        />
                        <button
                            type="submit"
                            className='bg-violet-700 p-4 rounded-lg mt-3 mb-5 text-white text-3xl 
                            font-bold'
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
