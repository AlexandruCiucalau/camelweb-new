"use client";

import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="bg-camel-500 text-white relative h-[768]">
      <div className="flex items-center justify-between px-15 py-1">
        {/* Logo */}
        <div className="text-3xl font-bold tracking-wide">
          CAMELWEB
        </div>
      
        {/* Hamburger Menu*/}
        <div className="relative">
          <button
            className="flex flex-col space-y-2 cursor-pointer z-10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-9 h-0.5 bg-white"></div>
            <div className="w-9 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        
          {/* Mobile menu dropdown*/}
          {isMenuOpen && (
            <div className="absolute -right-14 mt-3 bg-camel-500 border border-white/20 shadow-lg rounded-md">
              <nav className="py-2">
                <a href="#photo-grid" className="block px-6 py-2 text-white hover:bg-white/10 hover:text-gray-200">Photography</a>
                <a href="#applications" className="block px-6 py-2 text-white hover:bg-white/10 hover:text-gray-200">Applications</a>
                <a href="#about" className="block px-6 py-2 text-white hover:bg-white/10 hover:text-gray-200">About</a>
                <a href="#contact" className="block px-6 py-2 text-white hover:bg-white/10 hover:text-gray-200">Contact</a>
              </nav>
            </div>
          )}
        </div>
      </div>
      
      {/* Full-width horizontal line*/}
      <div className="px-6 py-4">
        <div className="w-[1250] mx-auto h-px bg-white"></div>
      </div>
        
      <div className="px-6 py-33">
        {/* Photography label */}
        <p className="text-center text-3xl mb-9 font-medium tracking-wider">
          Photography
        </p>
        
        {/* Main headline */}
        <h1 className="text-center lg:text-6xl font-semibold leading-21 tracking-widest max-w-4xl mx-auto">
          The photographs act as a
        </h1>
        <h1 className="text-center lg:text-6xl font-semibold leading-21 tracking-wide max-w-4xl mx-auto">
          support system for everything
        </h1>
        <h1 className="text-center lg:text-6xl font-semibold leading-21 tracking-widest max-w-4xl mx-auto">
          CamelWeb stands for.
        </h1>
      </div>
      
      {/* Down arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 py-14">
        <button 
          onClick={() => {
            document.getElementById('photography-section')?.scrollIntoView({behavior: 'smooth'})
          }} className="text-white opacity-70 hover:opacity-100 transition-opacity">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
      
      {/* Left and Right arrows */}
      <div className="absolute bottom-14 right-15 flex space-x-5 py-5">
        <button className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-opacity-30 transition-all">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-opacity-30 transition-all">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default function Home() {
  return (
    <div className="max-w-[1366px] mx-auto">
      <Header />
      
      
      {/* Location Photography Section */}
      <section id ="photography-section" className="bg-white w-[1245] mx-auto">
        
        <div className="px-4 py-16">
          {/* Full-width orange line */}
          <div className="h-px w-[1245] mx-auto bg-camel-500 mt-4 mb-3"></div>
          
          {/* Heading */}
          <h2 className="text-3xl font-medium text-camel-500 mb-11">Location photography</h2>
          
          {/* Description */}
          <div className="mb-8 font-medium tracking-widest">
            <p className="text-gray-700 leading-relaxed -mb-1">
              The location photography aims to show the CamelWeb offices and employees in order to
            </p>
            <p className="text-gray-700 leading-relaxed mb-2">
              communicate the brand's values.
            </p>
            <p className="text-gray-700 leading-relaxed mb-5">
              Thus, all images in this category must meet the following criteria:
            </p>
            
            {/* Criteria list */}
            <div className="space-y-5 text-gray-700 -ml-1">
              <div className="flex items-start">
                <svg className="w-4 h-4 mr-2 mt-1 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor">
                  <path d="M2 4 L2 14 L14 14 L10 10 M14 14 L10 16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>  
                <p>Warm, earthy tones and natural light.</p>
              </div>
              <div className="flex items-start">
                <svg className="w-4 h-4 mr-2 mt-1 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor">
                  <path d="M2 4 L2 14 L14 14 L10 10 M14 14 L10 16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>  
                <p>CamelWeb employees while they enjoy themselves and their work.</p>
              </div>
              <div className="flex items-start">
                <svg className="w-4 h-4 mr-2 mt-3 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor">
                  <path d="M2 4 L2 14 L14 14 L10 10 M14 14 L10 16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>      
                <p className="text-gray-700 leading-relaxed mt-1 mb-2 whitespace-pre-line">
                Approach different space perspectives, with close-ups of the people and wide frames of {"\n"} the office rooms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Grid Section */}
      <section id="photo-grid" className="bg-white mx-auto">
        <div className="px-6 pb-16 w-[1246] mx-auto">
          {/* Photo Grid */}
          <div className="grid grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Top row */}
            <div className="aspect-[4/3] w-[609] h-[411]">
              <img 
                src="/images/1.jpg" 
                alt="CamelWeb employees in library area" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="aspect-[4/3] w-[609] h-[411]">
              <img 
                src="/images/2.jpg" 
                alt="CamelWeb team meeting" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            
            {/* Middle row */}
            <div className="aspect-[4/3] w-[609] h-[411]">
              <img 
                src="/images/3.jpg" 
                alt="CamelWeb office space with plants" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="aspect-[4/3] w-[609] h-[411]">
              <img 
                src="/images/4.jpg" 
                alt="CamelWeb conference room" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            
            {/* Bottom row  */}
            <div className="col-span-2 aspect-[8/5] w-[1246] h-[702]">
              <img 
                src="/images/5.jpg" 
                alt="CamelWeb office with city view" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white w-[1247] mx-auto">
        <div className="px-6 py-10">
          <div className="h-px bg-black"></div>
        </div>
      </section>

      <section id="applications" className="bg-white max-w-[1247] h-[127] mx-auto mb-10">
        <div className="px-6 py-10">
          {/* Next label */}
          <p className="text-medium mb-2">Next</p>
          
          {/* Applications heading with arrow */}
          <div className="flex items-center justify-between">
            <h2 className="text-4xl font-medium text-black">Applications</h2>
            <button className="text-black hover:text-gray-600 transition-colors">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <footer id="about" className="bg-gray-50 border-t border-gray-200 ">
        <div className="px-6 py-8 max-w-[1366] h-[244] mx-auto">
          {/* Main Footer Content */}
          <div className="flex items-center justify-between mb-6">
            {/* Logo/Brand */}
            <div className="flex items-center">
              <div className="w-8 h-8 mr-3">
                {/* Camel Icon */}
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-gray-800">
                  <path d="M12 2C8.686 2 6 4.686 6 8c0 1.5.6 2.9 1.6 3.9L12 16.3l4.4-4.4c1-1 1.6-2.4 1.6-3.9 0-3.314-2.686-6-6-6zm0 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                </svg>
              </div>
              <span className="text-lg font-bold text-gray-800">CamelWeb</span>
            </div>
            
            {/* Social Media Icons */}
            <div id="contact" className="flex space-x-4">
              {/* Twitter Icon */}
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              
              {/* LinkedIn Icon */}
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Copyright and Links */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between text-sm text-gray-600 space-y-4 md:space-y-0">
            {/* Left Section - Copyright */}
            <div className="md:flex-1">
              <p> 2024 Copyright CamelWeb. All rights reserved.</p>
            </div>

            {/* Center Section - Branding */}
            <div className="text-center md:flex-1">
              <a href="#" className="hover:text-gray-800 transition-colors">
                Branding by High Contrast
              </a>
            </div>

            {/* Right Section - Links */}
            <div className="flex flex-wrap gap-6 justify-center md:justify-end md:flex-1">
              <a href="#" className="hover:text-gray-800 transition-colors">Help & Support</a>
              <a href="#" className="hover:text-gray-800 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-800 transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-gray-800 transition-colors">Cookie policy</a>
            </div>
          </div>
          
        </div>
      </footer>

    </div>
  );
}