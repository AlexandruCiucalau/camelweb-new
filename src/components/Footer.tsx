import { useState  } from "react";

import { Open_Sans, Syne } from 'next/font/google';

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
})

const syneFont = Syne({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
});


export default function Footer () {
  return (
    <footer id="about" className="bg-gray-50 border-t border-gray-200">
      <div className={`px-4 py-8 sm:px-6 md:px-12 lg:px-16 py-8 max-w-[1366px] mx-auto  tracking-tight ${openSans.className}`}>
        {/* Main Footer Content */}
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Logo/Brand */}
          <div className="w-8 h-8 mr-8 mb-6">

            {/* Camel Icon */}
            <svg width="91" height="66" viewBox="0 0 91 66" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M87.6486 5.47819V2.71663H76.6947V5.47819H73.9556V2.71663H71.194V8.1324H68.4724V13.6955H71.2165V19.1138H68.4599V21.9128H65.7483V19.1138H62.9992V16.4346H57.521V13.6955H54.7819V8.21729H52.0428V5.47819H49.3037V2.7391H41.0864V5.47819H38.3473V13.6955H35.6083V10.9564H32.8692V8.21729V5.47819H27.391V0H21.9128V2.7391H19.1737V5.47819H13.6955V8.21729H10.9564V10.9564H8.21728V13.6955V16.4346H5.47819V24.6519H2.73909V30.1301H0V32.8692H2.73909V30.1301H5.47819V35.6083H8.21728V43.8256H5.47819V54.7819H8.21728V65.7358H10.9564V65.7383H16.4346V62.9992H13.6955V57.521H10.9564V54.7819V46.5647H13.6955V41.0865H16.4346V52.0428H19.1737V57.521H21.9128V62.9992H24.6519V65.7383H30.1301V62.9992H27.391V54.7819H24.6519V52.0428H21.9128V38.3474H19.1737V35.6083H24.6519V38.3474H27.391V41.0865H46.5646V38.3474H52.0428V41.0865H49.3037V46.5647V54.7819H46.5646V65.7358H52.0428V46.5647H54.7819V65.7383H60.2601V65.7358H62.9992V62.9992H60.2601V41.069H62.9992V38.3623H65.7383L65.7483 32.8891H68.4949V35.6432H76.7297V30.1301H79.4213V27.391H82.1729V10.9988H87.6486V8.23727V8.1324H90.3877V5.47819H87.6486Z" fill="#0E0E0E" />
            </svg>

          </div>

          {/* Social Media Icons */}
          <div id="contact" className="flex space-x-9 lg:mt-17">
            {/* Twitter Icon */}
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
              <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.0624 2.6096C26.0672 3.05059 24.9981 3.34856 23.8742 3.48324C25.0339 2.78933 25.9015 1.69719 26.3151 0.410618C25.2256 1.05779 24.0331 1.51332 22.7896 1.75742C21.9533 0.864556 20.8457 0.272751 19.6387 0.0738863C18.4316 -0.124978 17.1927 0.080224 16.1143 0.657635C15.0358 1.23505 14.1781 2.15236 13.6744 3.26716C13.1707 4.38195 13.0491 5.63186 13.3286 6.82283C11.1209 6.71198 8.96116 6.13817 6.98958 5.13862C5.018 4.13907 3.27862 2.73613 1.88433 1.02085C1.40759 1.84324 1.13346 2.79672 1.13346 3.81219C1.13293 4.72634 1.35805 5.62649 1.78884 6.43277C2.21963 7.23906 2.84278 7.92654 3.603 8.43423C2.72135 8.40617 1.85915 8.16795 1.08817 7.73937V7.81088C1.08808 9.09302 1.53158 10.3357 2.34342 11.3281C3.15525 12.3204 4.28542 13.0014 5.54216 13.2553C4.72428 13.4767 3.8668 13.5093 3.03448 13.3507C3.38905 14.4539 4.07974 15.4186 5.00983 16.1097C5.93993 16.8009 7.06287 17.1839 8.22146 17.2051C6.25469 18.7491 3.82574 19.5866 1.32535 19.5829C0.882432 19.583 0.439888 19.5571 0 19.5054C2.53804 21.1373 5.4925 22.0034 8.50989 22C18.7241 22 24.308 13.5402 24.308 6.20306C24.308 5.96469 24.3021 5.72393 24.2913 5.48556C25.3775 4.7001 26.315 3.72744 27.06 2.61318L27.0624 2.6096Z" fill="#0E0E0E" />
              </svg>
            </a>

            {/* LinkedIn Icon */}
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
              <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.16123 22H0.287922V7.156H5.16123V22ZM2.72473 5.12905H2.69297C1.05765 5.12905 0 3.98929 0 2.56483C0 1.10822 1.09001 0 2.75709 0C4.42417 0 5.45007 1.10822 5.48182 2.56483C5.48182 3.98929 4.42417 5.12905 2.72473 5.12905ZM22.7333 22H17.8606V14.0588C17.8606 12.0631 17.155 10.702 15.3918 10.702C14.0456 10.702 13.2438 11.6201 12.8915 12.5064C12.7626 12.8235 12.7312 13.2668 12.7312 13.7104V22H7.85817C7.85817 22 7.92198 8.54862 7.85817 7.156H12.7312V9.25776C13.3788 8.24629 14.5375 6.80761 17.123 6.80761C20.3292 6.80761 22.7333 8.92915 22.7333 13.4885V22Z" fill="#0E0E0E" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright and Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 tracking-tight font-normal text-[13px] text-gray-600">
          {/* Left Section - Copyright */}
          <div className="lg:px-0 lg:pt-10 lg:ml-0 ml-3 px-7">
            <p >&copy; 2022 Copyright CamelWeb. All rights reserved.</p>
          </div>

          {/* Center Section - Branding */}
          <div className="text-center lg:mt-10 lg:pr-29">
            <a href="#" className="hover:text-gray-800 transition-colors ">
              Branding by High Contrast
            </a>
          </div>

          {/* Right Section - Links */}
          <div className="text-center md:text-right lg:mt-10">
            <a href="#" className="hover:text-gray-800 transition-colors lg:mr-8 mr-2">Help & Support</a>
            <a href="#" className="hover:text-gray-800 transition-colors lg:mr-8 mr-2">Privacy</a>
            <a href="#" className="hover:text-gray-800 transition-colors lg:mr-9 mr-2">Terms of Use</a>
            <a href="#" className="hover:text-gray-800 transition-colors lg:-mr-3">Cookie policy</a>
          </div>
        </div>

      </div>
    </footer>
  );

};