"use client"
import { TypeAnimation } from "react-type-animation";
import Mobilenavbar from "./mobilenavbar"; // Import the Mobilenavbar component
import Calendlylink from "../buttons/callbutton"; // Import the CalendlyLink component
import Image from "next/image";

import React, { useState } from 'react';

const Mysvg = () => {
    return (
        <svg
            fill="#ffffff" // Changed icon fill to white
            viewBox="0 0 24 24"
            id="research"
            data-name="Flat Line"
            xmlns="http://www.w3.org/2000/svg"
            className="icon flat-line mx-1 -ml-1"
            width={30}
            height={25}
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <circle id="secondary" cx="8" cy="10" r="3" style={{ fill: "#2ca9bc", strokeWidth: 2 }}></circle>
                <path
                    id="primary"
                    d="M17,12v5m-4,0V15M3,15l2.83-2.83M8,7a3,3,0,1,0,3,3A3,3,0,0,0,8,7Z"
                    style={{
                        fill: "none",
                        stroke: "#ffffff", // Changed stroke to white
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                    }}
                ></path>
                <path
                    id="primary-2"
                    data-name="primary"
                    d="M8,3H20a1,1,0,0,1,1,1V20a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V17"
                    style={{
                        fill: "none",
                        stroke: "#ffffff", // Changed stroke to white
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                    }}
                ></path>
            </g>
        </svg>
    );
};

export default function HeroSection() {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    return (
        <div style={{ backgroundColor: "black", width: '100vw', minHeight: '100vh' }}> {/* This div covers the entire viewport */}
        <div className="container bg-[black] mx-auto px-4 max-w-screen-xl lg:max-w-none" style={{ backgroundColor: "black" }}>
    {/* Heading and Navbar button */}
            <div className="flex justify-between items-center  relative">
                <div className="font-bold text-xl md:text-xl md:hidden" style={{ color: "#ffffff" }}>Veera Securities</div> {/* Changed text color */}
                <button
                    className="md:hidden bg-transparent p-2 rounded-lg focus:outline-none "
                    onClick={() => setIsNavbarOpen(!isNavbarOpen)}
                >
                    <Image src="/images/menu.png" alt="Menu" width={30} height={30} />
                </button>
                <div className="md:hidden absolute bottom-0 left-0 w-full h-px bg-gray-700"></div> {/* Adjusted line color */}
            </div>

            <div className="flex flex-col md:flex-row justify-between space-x-2">
                <div className="text-center md:text-left mt-5 md:w-[55%] md:ml-8 lg:ml-12 xl:ml-16">
                    {/* Content */}
                    <div className="font-bold text-sm md:text-md leading-normal md:mb-2 mt-2" style={{ color: "#f0f0f0" }}> Start your journey with us</div>
                    <div className="font-extrabold text-2xl md:text-4xl lg:text-4xl xl:text-6xl leading-normal mb-8 mygrad" style={{ color: "#f0f0f0" }}>Your Go-To <br />Security Services
                        <div className="md:pt-1 lg:pt-5" style={{ color: "#f0f0f0" }}> for {' '}
                            <TypeAnimation
                                sequence={[
                                    "Security Guards",
                                    1000,
                                    ' Gun Man',
                                    1000,
                                    ' Receptionist',
                                    1000,
                                    "Office Boy",
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ display: 'inline-block' }}
                                repeat={Infinity}
                            />
                        </div>
                    </div>
                    <div className="text-center mt-10">
                        <div className=" text-mg md:text-md mt-4 leading-normal mb-4  bg-warning p-1 px-3 rounded-2xl w-fit" style={{ backgroundColor: "#555", color: "#f0f0f0" }}>Security Adoptions typically result in:</div>
                        <div className="pb-10">
                            <ul class="max-w-md space-y-3 text-gray-200 list-inside text-left">
                                <li class="flex items-center">
                                    <svg class="w-7 h-7 me-2 text-green-500  flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    Trained security guards for on-site protection.
                                </li>
                                <li class="flex items-center">
                                    <svg class="w-7 h-7 me-2 text-green-500  flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293 a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    Professional armed personnel for heightened security measures.
                                </li>
                                <li class="flex items-center">
                                    <svg class="w-7 h-7 me-2 text-green-500  flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4 a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293 a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    Rapid response teams for immediate threat mitigation.
                                </li>
                            </ul>
                        </div>
                    </div>
                 
                </div>
                <div class="mt-2 md:w-[40%]">
   
    <div class="hidden md:block bg-[#F39300] text-white p-6 text-center" style={{ clipPath: 'polygon(10% 0, 100% 0%, 100% 100%, 0% 100%)' }}>
        <h1 class="text-3xl font-bold mb-4">Get in Touch</h1>
        <div class="mx-auto" style={{ maxWidth: '400px' }}>
            <Image src='/images/contactus.jpg' alt="Contact Us" width={400} height={200} />
        </div>
        <p class="mt-4 text-black">
            71, Krishna Campus, Hinotiya<br />
            Ashok Garden,<br />
            80 feet road, Bhopal(M.P)<br />
            462043
        </p>
        <div class="mt-4 flex flex-col items-center">
        

<Image
  src="https://www.svgrepo.com/show/521128/email-1.svg"
  alt="Email Icon"
  width={24}  // Corresponds to 'w-6' in TailwindCSS, where 1 tailwind unit is 4px
  height={24} // Corresponds to 'h-6' in TailwindCSS
  className="mx-auto mb-2"
/>

            <span class="text-black">veerasecurities@gmail.com | www.veerasecurities.com</span>
        </div>
        <div class="mt-4 flex flex-col items-center">

        <Image
  src="https://www.svgrepo.com/show/533285/phone.svg"
  alt="Email Icon"
  width={24}  // Corresponds to 'w-6' in TailwindCSS, where 1 tailwind unit is 4px
  height={24} // Corresponds to 'h-6' in TailwindCSS
  className="mx-auto mb-2"
/>
            
            <span class="text-black">9111222334, 9827755662</span>
        </div>
    </div>
   
    <div class="block md:hidden bg-[#F39300] text-white p-6 text-center">
        <h1 class="text-3xl font-bold mb-4">Get in Touch</h1>
        <div class="mx-auto" style={{ maxWidth: '400px' }}>
            <Image src='/images/contactus.jpg' alt="Contact Us" width={400} height={200} />
        </div>
        <p class="mt-4 text-black">
            71, Krishna Campus, Hinotiya<br />
            Ashok Garden,<br />
            80 feet road, Bhopal(M.P)<br />
            462043
        </p>
        <div class="mt-4 flex flex-col items-center">
        <Image
  src="https://www.svgrepo.com/show/521128/email-1.svg"
  alt="Email Icon"
  width={24}  // Corresponds to 'w-6' in TailwindCSS, where 1 tailwind unit is 4px
  height={24} // Corresponds to 'h-6' in TailwindCSS
  className="mx-auto mb-2"
/>
            <span class="text-black">veerasecurities@gmail.com | www.veerasecurities.com</span>
        </div>
        <div class="mt-4 flex flex-col items-center">
        <Image
  src="https://www.svgrepo.com/show/533285/phone.svg"
  alt="Email Icon"
  width={24}  // Corresponds to 'w-6' in TailwindCSS, where 1 tailwind unit is 4px
  height={24} // Corresponds to 'h-6' in TailwindCSS
  className="mx-auto mb-2"
/>
            <span class="text-black">9111222334, 9827755662</span>
        </div>
    </div>
</div>


            </div>

            {/* Mobile Navbar */}
            {isNavbarOpen && <Mobilenavbar closeNavbar={() => setIsNavbarOpen(false)} />}
        </div>
        </div>
    );
}



