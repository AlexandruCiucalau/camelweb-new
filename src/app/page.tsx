"use client";

import React, { useState } from 'react';
import { Open_Sans, Syne } from 'next/font/google';
import { Poppins } from 'next/font/google';

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
});

const syneFont = Syne({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
})
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="bg-camel-500 text-white relative h-[768px] w-[1366px] mx-auto">
      <div className="flex items-center justify-between px-15 py-6">
        {/* Logo */}
        <div className={`text-2xl font-bold tracking-wide ${syneFont.className}`}>
          CAMELWEB
        </div>

        {/* Hamburger Menu*/}
        <div className="relative">
          <button
            className="flex flex-col space-y-3 cursor-pointer z-10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-10 h-0.5 bg-white"></div>
            <div className="w-10 h-0.5 bg-white"></div>
            <div className="w-5 h-0.5 bg-white"></div>
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
      <div className="w-[1246px] mx-auto">
        <div className=" h-px bg-white"></div>
      </div>

      <div className="px-7 py-37">
        {/* Photography label */}
        <h4 className={`text-center text-3xl font-semibold tracking-wide ${syneFont.className}`}>
          Photography
        </h4>
        {/* Main headline */}
        <h2 className={`text-center text-[67px] mt-11 font-semibold leading-20 mx-auto ${syneFont.className}`}>
          The photographs act as a
        </h2>
        <h2 className={`text-center text-[67px] font-semibold leading-19 mx-auto ${syneFont.className}`}>
          support system for everything
        </h2>
        <h2 className={`text-center text-[67px] font-semibold leading-19 mx-auto ${syneFont.className}`}>
          CamelWeb stands for.
        </h2>
      </div>

      {/* Down arrow */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 py-11">
        <button
          onClick={() => {
            document.getElementById('photography-section')?.scrollIntoView({ behavior: 'smooth' })
          }} className="text-white opacity-70 hover:opacity-100 transition-opacity">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>

      {/* Left and Right arrows */}
      <div className="absolute bottom-13 right-14 flex space-x-5 py-">
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

const Footer = () => {
  return (
    <footer id="about" className="bg-gray-50 border-t border-gray-200">
      <div className={`px-16 py-8 max-w-[1366px] h-[244px] mx-auto  tracking-tight ${openSans.className}`}>
        {/* Main Footer Content */}
        <div className="flex items-center justify-between ">
          {/* Logo/Brand */}
          <div className="w-8 h-8 mr-8 mb-6">

            {/* Camel Icon */}
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
              width="115.000000pt" height="95.000000pt" fill="currentColor" viewBox="0 0 200.000000 121.000000"
              className="-mx-11 -mt-11 fill-current transition-colors">
              <path d="M 61.00 128.62 C61.00,129.63 59.52,130.00 55.50,130.00 L 50.00 130.00 L 50.00 123.00 C50.00,116.67 49.81,116.00 48.00,116.00 C46.19,116.00 46.00,115.33 46.00,109.12 C46.00,103.07 46.24,102.17 48.00,101.71 C49.67,101.27 50.00,100.35 50.00,96.09 C50.00,91.67 49.74,91.00 48.00,91.00 C46.38,91.00 46.00,90.33 46.00,87.50 C46.00,85.06 45.55,84.00 44.50,84.00 C43.45,84.00 43.00,82.94 43.00,80.50 C43.00,78.06 43.45,77.00 44.50,77.00 C45.65,77.00 46.00,75.72 46.00,71.50 C46.00,66.67 46.24,66.00 48.00,66.00 C49.62,66.00 50.00,65.33 50.00,62.50 C50.00,60.06 50.45,59.00 51.50,59.00 C52.33,59.00 53.00,58.33 53.00,57.50 C53.00,56.67 53.72,56.00 54.59,56.00 C55.47,56.00 56.42,55.10 56.71,54.00 C57.10,52.50 58.07,52.00 60.62,52.00 C63.33,52.00 64.00,51.61 64.00,50.00 C64.00,48.67 64.67,48.00 66.00,48.00 C67.11,48.00 68.00,47.33 68.00,46.50 C68.00,45.45 69.06,45.00 71.50,45.00 C74.83,45.00 75.00,45.17 75.00,48.50 C75.00,51.83 75.17,52.00 78.50,52.00 C81.83,52.00 82.00,52.17 82.00,55.50 C82.00,58.33 82.38,59.00 84.00,59.00 C85.33,59.00 86.00,59.67 86.00,61.00 C86.00,62.11 86.67,63.00 87.50,63.00 C88.65,63.00 89.00,61.72 89.00,57.50 C89.00,53.13 89.33,52.00 90.59,52.00 C91.47,52.00 92.42,51.10 92.71,50.00 C93.14,48.35 94.07,48.00 98.00,48.00 C101.93,48.00 102.86,48.35 103.29,50.00 C103.58,51.10 104.48,52.00 105.29,52.00 C106.10,52.00 107.00,52.90 107.29,54.00 C107.58,55.10 108.53,56.00 109.41,56.00 C110.56,56.00 111.00,56.96 111.00,59.50 C111.00,61.94 111.45,63.00 112.50,63.00 C113.32,63.00 114.00,63.67 114.00,64.50 C114.00,65.55 115.06,66.00 117.50,66.00 C120.04,66.00 121.00,66.44 121.00,67.59 C121.00,68.47 121.90,69.42 123.00,69.71 C124.10,70.00 125.00,70.86 125.00,71.62 C125.00,72.38 125.68,73.00 126.50,73.00 C127.32,73.00 128.00,72.38 128.00,71.62 C128.00,70.86 128.90,70.00 130.00,69.71 C131.43,69.33 132.00,68.35 132.00,66.21 C132.00,64.07 131.43,63.09 130.00,62.71 C128.47,62.31 128.00,61.35 128.00,58.59 C128.00,55.67 128.37,55.00 130.00,55.00 C131.62,55.00 132.00,54.33 132.00,51.50 C132.00,48.67 132.38,48.00 134.00,48.00 C135.33,48.00 136.00,48.67 136.00,50.00 C136.00,51.11 136.67,52.00 137.50,52.00 C138.33,52.00 139.00,51.11 139.00,50.00 C139.00,48.19 139.67,48.00 145.88,48.00 C151.93,48.00 152.83,48.24 153.29,50.00 C153.58,51.10 154.53,52.00 155.41,52.00 C156.28,52.00 157.00,52.67 157.00,53.50 C157.00,54.33 156.28,55.00 155.41,55.00 C154.53,55.00 153.58,55.90 153.29,57.00 C152.90,58.50 151.93,59.00 149.38,59.00 L 146.00 59.00 L 146.00 69.50 C146.00,77.77 145.71,80.00 144.62,80.00 C143.86,80.00 143.00,80.90 142.71,82.00 C142.42,83.10 141.47,84.00 140.59,84.00 C139.44,84.00 139.00,84.96 139.00,87.50 L 139.00 91.00 L 133.50 91.00 C129.28,91.00 128.00,90.65 128.00,89.50 C128.00,88.68 127.32,88.00 126.50,88.00 C125.49,88.00 125.00,89.01 125.00,91.09 C125.00,93.35 124.46,94.33 123.00,94.71 C121.90,95.00 121.00,95.86 121.00,96.62 C121.00,97.38 120.32,98.00 119.50,98.00 C118.24,98.00 118.00,100.28 118.00,112.50 C118.00,124.72 118.24,127.00 119.50,127.00 C120.32,127.00 121.00,127.68 121.00,128.50 C121.00,129.63 119.78,130.00 116.00,130.00 L 111.00 130.00 L 111.00 117.50 C111.00,105.67 110.89,105.00 109.00,105.00 C107.11,105.00 107.00,105.67 107.00,117.50 L 107.00 130.00 L 100.00 130.00 L 100.00 123.00 C100.00,117.44 100.31,116.00 101.50,116.00 C102.72,116.00 103.00,114.33 103.00,107.00 C103.00,98.67 103.15,98.00 105.00,98.00 C106.11,98.00 107.00,97.33 107.00,96.50 C107.00,95.45 105.94,95.00 103.50,95.00 C101.06,95.00 100.00,95.45 100.00,96.50 C100.00,97.75 97.94,98.00 87.50,98.00 C77.06,98.00 75.00,97.75 75.00,96.50 C75.00,95.68 74.28,95.00 73.41,95.00 C72.53,95.00 71.58,94.10 71.29,93.00 C70.61,90.42 64.00,90.05 64.00,92.59 C64.00,93.47 64.90,94.42 66.00,94.71 C67.80,95.18 68.00,96.07 68.00,103.65 C68.00,110.21 68.33,112.19 69.50,112.64 C70.32,112.95 71.00,113.84 71.00,114.61 C71.00,115.37 71.90,116.00 73.00,116.00 C74.76,116.00 75.00,116.67 75.00,121.50 C75.00,125.72 75.35,127.00 76.50,127.00 C77.32,127.00 78.00,127.68 78.00,128.50 C78.00,129.55 76.94,130.00 74.50,130.00 C72.06,130.00 71.00,129.55 71.00,128.50 C71.00,127.68 70.32,127.00 69.50,127.00 C68.46,127.00 68.00,125.96 68.00,123.62 C68.00,121.07 67.50,120.10 66.00,119.71 C64.56,119.33 64.00,118.35 64.00,116.20 C64.00,114.47 63.37,112.97 62.50,112.64 C61.36,112.20 61.00,110.36 61.00,105.03 C61.00,98.67 60.81,98.00 59.00,98.00 C57.39,98.00 57.00,98.67 57.00,101.38 C57.00,103.93 56.50,104.90 55.00,105.29 C53.25,105.75 53.00,106.65 53.00,112.50 C53.00,118.35 53.25,119.25 55.00,119.71 C56.43,120.09 57.00,121.07 57.00,123.21 C57.00,125.35 57.57,126.33 59.00,126.71 C60.10,127.00 61.00,127.86 61.00,128.62 ZM 42.82 85.67 C42.24,88.68 39.00,88.40 39.00,85.33 C39.00,84.60 39.93,84.00 41.07,84.00 C42.47,84.00 43.04,84.54 42.82,85.67 Z" fill="rgb(14,14,14)" />
            </svg>
          </div>

          {/* Social Media Icons */}
          <div id="contact" className="flex space-x-9 mt-17">
            {/* Twitter Icon */}
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
              <svg className="w-6 h-6 mr-1" fill="currentColor" viewBox="0 0 22 22">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>

            {/* LinkedIn Icon */}
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
              <svg className="w-6 h-6 -mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright and Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 tracking-tight font-normal text-[13px] text-gray-600">
          {/* Left Section - Copyright */}
          <div className="-ml-4">
            <p className="pt-10">&copy; 2022 Copyright CamelWeb. All rights reserved.</p>
          </div>

          {/* Center Section - Branding */}
          <div className="text-center mt-10 pr-29">
            <a href="#" className="hover:text-gray-800 transition-colors ">
              Branding by High Contrast
            </a>
          </div>

          {/* Right Section - Links */}
          <div className="text-center md:text-right mt-10">
            <a href="#" className="hover:text-gray-800 transition-colors mr-8">Help & Support</a>
            <a href="#" className="hover:text-gray-800 transition-colors mr-8">Privacy</a>
            <a href="#" className="hover:text-gray-800 transition-colors mr-9">Terms of Use</a>
            <a href="#" className="hover:text-gray-800 transition-colors -mr-3">Cookie policy</a>
          </div>
        </div>

      </div>
    </footer>
  );

};

const LocationPhotography = () => {
  return (
    < section id="photography-section" className="bg-white w-[1245px] mb-20 h-[379px] mx-auto" >

      <div className="">
        {/* Full-width orange line */}
        <div className="h-[1.5] mx-auto bg-camel-500 mt-18 mb-3 "></div>

        {/* Heading */}
        <h4 className={`text-3xl font-semibold text-camel-500 mb-14 ${syneFont.className}`}>Location photography</h4>

        {/* Description */}
        <div className={`mb-8 text-xl tracking-tight font-medium ${poppinsFont.className}`}>
          <p className={`text-gray-700 leading-tight -mb-2`}>
            The location photography aims to show the CamelWeb offices and employees in order to
          </p>
          <p className={`text-gray-700 leading-relaxed mb-3`}>
            communicate the brand's values.
          </p>
          <p className={`text-gray-700 leading-normal mb-6`}>
            Thus, all images in this category must meet the following criteria:
          </p>

          {/* Criteria list */}
          <div className={`space-y-2 text-gray-700 -ml-1`}>
            <div className="flex items-start">
              <svg className="w-4 h-4 mr-2 mt-1 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor">
                <path d="M2 4 L2 14 L14 14 L10 10 M14 14 L10 16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p>Warm, earthy tones and natural light.</p>
            </div>
            <div className="flex items-start pt-3 pb-5">
              <svg className="w-4 h-4 mr-2 mt-1 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor">
                <path d="M2 4 L2 14 L14 14 L10 10 M14 14 L10 16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p>CamelWeb employees while they enjoy themselves and their work.</p>
            </div>
            <div className="flex items-start">
              <svg className="w-4 h-4 mr-2 mt-3 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor">
                <path d="M2 4 L2 14 L14 14 L10 10 M14 14 L10 16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="text-gray-700 leading-[1.1] whitespace-pre-line">
                Approach different space perspectives, with close-ups of the people and wide frames of {"\n"} the office rooms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

const PhotoGrid = () => {
  return (
    <section id="photo-grid" className="bg-white mx-auto">
      <div className="w-[1246px] mx-auto">
        {/* Photo Grid */}
        <div className="grid grid-cols-2 gap-[28px] mx-auto">
          {/* Top row */}
          <div className="w-photo-w h-photo-h">
            <img
              src="/images/1.jpg"
              alt="CamelWeb employees in library area"
              className="w-full h-full"
            />
          </div>
          <div className="w-photo-w h-photo-h">
            <img
              src="/images/2.jpg"
              alt="CamelWeb team meeting"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Middle row */}
          <div className="w-photo-w h-photo-h">
            <img
              src="/images/3.jpg"
              alt="CamelWeb office space with plants"
              className="w-full h-full"
            />
          </div>
          <div className="w-photo-w h-photo-h">
            <img
              src="/images/4.jpg"
              alt="CamelWeb conference room"
              className="w-full h-full"
            />
          </div>

          {/* Bottom row  */}
          <div className="h-photo-bottom-h w-[1246px]">
            <img
              src="/images/5.jpg"
              alt="CamelWeb office with city view"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const Applications = () => {
  return (
    <section id="applications" className="bg-white w-[1247px] h-[127px] mx-auto mt-10 mb-24">
      <div className="py-10 bg-white mx-auto">
        <div className="h-px bg-black"></div>
      </div>
      <div>
        {/* Next label */}
        <p className={`text-medium mb-1 mt-4 text-[13px] font-normal ${poppinsFont.className}`}>Next</p>

        {/* Applications heading with arrow */}
        <div className="flex items-center justify-between">
          <h4 className={`text-4xl font-semibold text-black tracking-tight text-[30px] ${poppinsFont.className}`}>Applications</h4>
          <button className="text-black hover:text-gray-600 transition-colors mr-7 mt-3">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 21 21">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="max-w-[1366px] mx-auto">
      <Header />
      <LocationPhotography />
      <PhotoGrid />
      <Applications />
      <Footer />
    </div>
  );
}