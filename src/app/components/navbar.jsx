"use client"

import React, { useState } from 'react';
import Calendlylink from '../buttons/callbutton';
import Image from 'next/image';
import Link from 'next/link';


export default function Navbar() {

    
    const [showIndustries, setShowIndustries] = useState(false);
    const [showAboutUs, setShowAboutUs] = useState(false);
    const [showSolutions, setShowSolutions] = useState(false);
    const [showAIResources, setShowAIResources] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggleIndustries = () => {
        setShowIndustries(!showIndustries);
        setShowAboutUs(false); // Close About Us section
        setShowSolutions(false); // Close Solutions section
        setShowAIResources(false); // Close AI Resources section
        setSelectedOption('Industries');
    };

    const toggleAboutUs = () => {
        if (!showAboutUs) {
            setShowAboutUs(true);
            setShowIndustries(false); // Close Industries section
            setShowSolutions(false); // Close Solutions section
            setShowAIResources(false); // Close AI Resources section
            setSelectedOption('About Us');
        }
    };
    

    const toggleSolutions = () => {
        setShowSolutions(!showSolutions);
        setShowIndustries(false); // Close Industries section
        setShowAboutUs(false); // Close About Us section
        setShowAIResources(false); // Close AI Resources section
        setSelectedOption('Solutions');
    };

    const toggleAIResources = () => {
        setShowAIResources(!showAIResources);
        setShowIndustries(false); // Close Industries section
        setShowAboutUs(false); // Close About Us section
        setShowSolutions(false); // Close Solutions section
        setSelectedOption('AI resources');


    };


   
   







    return (
        
        
        <div>
        {/* Thin horizontal blue line */}
        <div className="bg-black border-b-2 h-24 hidden md:flex md:justify-evenly md:px-8 lg:px-12 xl:px-24">
            {/* Logo */}
            <div className='flex items-center justify-center xl:pl-16 md:pl-10'>
                <div className='flex-shrink-0'>
                    <Image src="/images/pgagi.png" alt="Company logo" className="h-14 object-contain" width={60} height={60}/>
                </div>
                <div className='text-3xl font-bold ml-5 text-white'>Veera Securities</div>
            </div>
            {/* Navbar links */}
            <div className="header-links contents font-semibold text-base lg:text-base">
                <ul className="flex items-center ml-4  lg:ml-5 xl:ml-2 lg:mr-8 text-white">
                    <li className="p-2.5 xl:p-6 text-center">
                        <Link href="/projects" className="text-decoration-none">
                            <span className=" text-black">Our Projects</span>
                        </Link>
                    </li>
                    <li className="p-2.5 xl:p-6">
                        <button  className="focus:outline-none flex items-center">
                            <span className={selectedOption === 'Solutions' ? 'text-primary' : 'hover:text-gray-200 cursor-pointer'}>Our Services</span>
                            <Image src="/images/dropdown.svg" width={20} height={20} alt="dropdown" className="ml-1 w-4 h-4" />
                        </button>
                    </li>
                    <li className="p-2.5 xl:p-6">
                        <button  className="focus:outline-none flex items-center">
                            <span className={selectedOption === 'Industries' ? 'text-primary' : 'hover:text-gray-200 cursor-pointer'}>Contact US</span>
                            <Image src="/images/dropdown.svg" width={20} height={20} alt="dropdown" className="ml-1 w-4 h-4" />
                        </button>
                    </li>
                    <li className="p-2.5 xl:p-6">
                        <button  className="focus:outline-none flex items-center">
                            <span className={selectedOption === 'About Us' ? 'text-primary' : 'hover:text-gray-200 cursor-pointer'}>About US</span>
                            <Image src="/images/dropdown.svg" width={20} height={20} alt="dropdown" className="ml-1 w-4 h-4" />
                        </button>
                    </li>
                </ul>
            </div>
            {/* Search bar and button */}
          
        </div>
    
        {/* AI Resources Section */}
    </div>
    
    
    );
}