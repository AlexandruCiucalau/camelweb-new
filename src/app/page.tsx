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
          <div className="h-px mx-auto bg-camel-500 mt-4 mb-3"></div>
          
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
                <p className="text-gray-700 leading-relaxed mt-1 whitespace-pre-line">
                Approach different space perspectives, with close-ups of the people and wide frames of {"\n"} the office rooms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Grid Section */}
      <section id="photo-grid" className="bg-white mx-auto">
        <div className="w-[1246] mx-auto">
          {/* Photo Grid */}
          <div className="grid grid-cols-2 gap-4 max-w-7xl mx-auto">
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
        <div className="py-10">
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
        <div className="px-16 py-8 max-w-[1366] h-[244] mx-auto">
          {/* Main Footer Content */}
          <div className="flex items-center justify-between mb-6">
            {/* Logo/Brand */}
            <div className="flex items-center">
              <div className="w-8 h-8 mr-3 mb-5">
                {/* Camel Icon */}
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                  width="60.000000pt" height="50.000000pt" viewBox="0 0 120.000000 101.000000"
                                  preserveAspectRatio="xMidYMid meet">
                  <metadata>
                    Created by potrace 1.10, written by Peter Selinger 2001-2011
                  </metadata>
                  <g transform="translate(0.000000,101.000000) scale(0.100000,-0.100000)"
                    fill="#000000" stroke="none">
                    <path d="M430 779 c0 -17 -27 -39 -49 -39 -12 0 -21 -5 -21 -11 0 -14 -26 -39
                            -40 -39 -8 0 -10 -8 -7 -21 3 -12 0 -22 -9 -26 -8 -3 -14 -19 -14 -39 0 -19
                            -4 -34 -10 -34 -5 0 -10 -9 -10 -20 0 -11 5 -20 10 -20 6 0 10 -11 10 -25 0
                            -14 6 -25 13 -25 9 0 13 -12 13 -35 -1 -21 -6 -35 -13 -35 -9 0 -13 -17 -13
                            -50 0 -27 5 -50 10 -50 6 0 10 -20 10 -45 0 -43 1 -45 30 -45 17 0 33 0 37 -1
                            4 0 9 4 11 10 2 6 -3 11 -12 11 -10 0 -16 9 -16 25 0 14 -4 25 -10 25 -5 0
                            -10 20 -10 45 0 25 5 45 10 45 6 0 10 11 10 25 0 16 6 25 16 25 13 0 15 -9 12
                            -47 -2 -35 1 -47 10 -45 7 1 12 -8 12 -23 0 -14 5 -25 10 -25 6 0 10 -11 10
                            -25 0 -16 6 -25 15 -25 8 0 15 -6 15 -14 0 -17 42 -16 48 2 2 6 -3 12 -12 12
                            -11 0 -16 9 -16 31 0 30 -19 59 -39 59 -7 0 -11 24 -11 60 0 33 -4 60 -10 60
                            -5 0 -10 7 -10 15 0 9 9 15 25 15 16 0 25 -6 25 -16 0 -8 5 -12 10 -9 6 3 10
                            -1 10 -9 0 -13 15 -16 85 -16 63 0 84 3 82 13 -1 7 8 12 22 12 13 0 26 -6 29
                            -12 2 -7 -3 -13 -12 -13 -13 0 -16 -12 -16 -60 0 -41 -4 -60 -12 -60 -9 0 -13
                            -15 -12 -47 1 -40 5 -48 20 -48 17 0 20 10 24 84 3 55 9 86 18 89 9 3 12 -18
                            12 -82 0 -78 2 -86 19 -86 11 0 26 -3 35 -6 11 -4 16 -1 16 10 0 9 -7 16 -15
                            16 -12 0 -15 17 -15 95 0 61 4 95 11 95 17 0 39 27 39 49 0 12 6 21 15 21 8 0
                            15 -4 15 -10 0 -5 16 -10 36 -10 31 0 35 3 32 23 -2 13 2 21 10 19 6 -1 12 5
                            12 13 0 8 6 15 13 15 9 0 11 19 9 70 -4 69 -3 70 22 70 16 0 26 6 26 15 0 8 5
                            14 11 13 6 -2 14 3 16 10 3 6 -2 12 -11 12 -9 0 -16 5 -16 10 0 6 -20 10 -45
                            10 -25 0 -45 -4 -45 -10 0 -5 -7 -10 -15 -10 -8 0 -15 5 -15 10 0 6 -4 10 -10
                            10 -5 0 -10 -11 -10 -25 0 -14 -5 -24 -12 -23 -7 2 -14 -7 -16 -19 -2 -16 2
                            -23 12 -23 21 0 20 -35 -1 -60 -19 -22 -33 -26 -33 -9 0 17 -27 39 -49 39 -12
                            0 -21 6 -21 15 0 8 -6 15 -14 15 -9 0 -12 7 -9 20 4 14 0 20 -11 20 -9 0 -16
                            5 -16 11 0 20 -29 39 -59 39 -17 0 -31 -4 -31 -10 0 -5 -6 -10 -14 -10 -11 0
                            -13 -10 -9 -40 5 -33 3 -40 -11 -40 -9 0 -16 7 -16 15 0 8 -4 15 -10 15 -5 0
                            -10 11 -10 25 0 20 -5 25 -25 25 -20 0 -25 5 -25 25 0 20 -5 25 -25 25 -14 0
                            -25 -5 -25 -11z m72 -98 c37 -46 62 -54 85 -28 11 12 23 30 26 40 10 29 42 19
                            68 -20 21 -33 120 -111 143 -112 4 -1 24 15 43 34 30 30 34 39 28 66 -5 22 -3
                            34 6 40 24 15 29 10 19 -17 -6 -14 -10 -43 -10 -65 0 -59 -24 -89 -71 -89 -34
                            0 -42 -5 -65 -40 -31 -46 -39 -48 -71 -18 -20 19 -27 20 -62 10 -59 -18 -122
                            -15 -156 8 -38 25 -60 25 -92 0 -35 -27 -40 -26 -62 18 -18 36 -19 42 -5 82
                            23 65 31 78 76 110 45 33 60 30 100 -19z"/>
                  </g>
                </svg>
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div id="contact" className="flex space-x-4 mt-5">
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