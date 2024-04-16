"use client";
import React, { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";

const Calendlylink = () => {
    const [rootElement, setRootElement] = useState(null);
    const url = "https://calendly.com/vivek-_ou/30min";

    useEffect(() => {
        setRootElement(document.getElementById("root"));
    }, []);

    return (
        <div className="App" id="root">
            {/* Fallback link for mobile phones */}
            <a href={url} target="_blank" rel="noopener noreferrer" className="md:hidden">
                <div className="bg-primary hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg inline-flex items-center gap-3 shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
                    Book a Call
                </div>
            </a>

            {/* PopupButton for laptops and larger screens */}
            <div className="hidden md:block bg-primary hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg inline-flex items-center gap-3 shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
                {rootElement && (
                    <PopupButton
                        url={url}
                        rootElement={rootElement}
                        text="Book a Call"
                    ></PopupButton>
                )}
            </div>
        </div>
    );
};

export default Calendlylink;
