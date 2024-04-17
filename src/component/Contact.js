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
            <div className='grid lg:grid-cols-2  sm:grid-cols-1 bg_change bg-no-repeat font-sri-font contact'>
                <div className=' text-white text-center '>
                    <div className='m-[100px] rounded-[20px] bg-violet-700 p-[50px]'>
                        <div className="text-6xl font-bold p-5 ">Contact</div>
                        <div className="flex justify-between lg:mt-10">
                            <p className="lg:text-xl sm:text-[16px]">
                                <BsEnvelope size={"40px"} className='inline sm:w-[20px]' />&nbsp;   Email   </p>
                            <p className="lg:text-xl sm:text-[16px]"  > anandansmart50@gmail.com </p>
                        </div>
                        <div className="flex justify-between lg:mt-10">
                            <p className="lg:text-xl sm:text-[16px]">
                                <BsFillTelephoneFill
                                    size={"40px"} className='inline sm:w-[20px]'
                                />
                                &nbsp; Phone </p>
                            <p className="lg:text-xl sm:text-[16px]"  > +91 63690 64563</p>
                        </div>
                        <div className="flex justify-between  lg:mt-10 mb-10">
                            <p className="lg:text-xl sm:text-[16px]">
                                <LiaAddressCardSolid
                                    className='inline sm:w-[20px]'
                                />  &nbsp;
                                Address   </p>
                            <p className="lg:text-xl sm:text-[16px]"  >  73/139, EBP Nagar, Erode </p>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <form ref={form} onSubmit={sendEmail} className='flex flex-col space_center m-[100px]'>
                        <label className='text-3xl font-bold'>Name</label>
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