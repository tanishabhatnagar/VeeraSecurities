import Footer from "./components/footer";
import HeroSection from "./components/myhero";

import Navbar from "./components/navbar";

import Cards from "./components/cards";

import ServicesGrid from "./components/services";
// import About from "./components/aboutus";



import React from "react";

import Mobilenavbar from "./components/mobilenavbar";



export default function Page() {
  return (
    
    
    
    <div>
      <Navbar />
      <div className="min-h-screen ">
        <HeroSection />
        
        
      </div>
      <ServicesGrid/>
      <Cards/>
      
      {/* <Mobilenavbar/> */}
      
      <Footer />
      
    </div>
  );
};