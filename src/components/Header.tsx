import { useState  } from "react";
import { Open_Sans, Syne } from 'next/font/google';
const syneFont = Syne({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
});

export default function Header () {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="bg-camel-500 text-white relative">
      <div className="flex items-center justify-between px-15 py-6 max-w-[1366px] mx-auto">
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
      <div className="max-w-[1246px] mx-auto">
        <div className=" h-px bg-white"></div>
      </div>

      <div className="px-7 py-37">
        {/* Photography label */}
        <h4 className={`text-center text-3xl font-semibold tracking-wide ${syneFont.className}`}>
          Photography
        </h4>
        {/* Main headline */}
        <h2 className={`text-center text-4xl sm:text-6xl lg:text-[67px] mt-11 font-semibold leading-20 mx-auto ${syneFont.className}`}>
          The photographs act as a
        </h2>
        <h2 className={`text-center text-4xl sm:text-6xl lg:text-[67px] font-semibold leading-19 mx-auto ${syneFont.className}`}>
          support system for everything
        </h2>
        <h2 className={`text-center text-4xl sm:text-6xl lg:text-[67px] font-semibold leading-19 mx-auto ${syneFont.className}`}>
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