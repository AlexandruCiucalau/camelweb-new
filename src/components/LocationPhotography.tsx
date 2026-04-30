import { useState  } from "react";
import { Syne } from 'next/font/google';
import { Poppins } from 'next/font/google';
const syneFont = Syne({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
});
const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
});


export default function LocationPhotography () {
  return (
    < section id="photography-section" className="bg-white" >

      <div className="max-w-[1245px] mb-20 mx-auto px-4 lg:px-0">
        {/* Full-width orange line */}
        <div className="h-[1.5] mx-auto bg-camel-500 mt-18 mb-3 "></div>

        {/* Heading */}
        <h4 className={`text-[30px] font-semibold text-camel-500 mb-13 ${syneFont.className}`}>Location photography</h4>

        {/* Description */}
        <div className={`mb-8 text-xl tracking-tight font-medium ${poppinsFont.className}`}>
          <p className={`text-gray-700 leading-tight -mb-2`}>
            The location photography aims to show the CamelWeb offices and employees in order to
          </p>
          <p className={`text-gray-700 leading-relaxed mb-3`}>
            communicate the brand&apos;s values.
          </p>
          <p className={`text-gray-700 leading-normal mb-6`}>
            Thus, all images in this category must meet the following criteria:
          </p>

          {/* Criteria list */}
          <div className={`space-y-2 text-gray-700`}>
            <div className="flex items-start">
              <svg className='shrink-0 mt-1 mr-3 lg:-ml-1' width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.75 0V12H8.75" stroke="black" strokeWidth="1.5" />
                <path d="M5.75 8L9.75 12L5.75 16" stroke="black" strokeWidth="1.5" />
              </svg>
              <p>Warm, earthy tones and natural light.</p>
            </div>
            <div className="flex items-start pt-3 pb-5">
              <svg  className='shrink-0 mt-1 mr-3 lg:-ml-1' width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.75 0V12H8.75" stroke="black" strokeWidth="1.5" />
                <path d="M5.75 8L9.75 12L5.75 16" stroke="black" strokeWidth="1.5" />
              </svg>
              <p>CamelWeb employees while they enjoy themselves and their work.</p>
            </div>
            <div className="flex items-start">
              <svg className='shrink-0 lg:mt-3 mt-1 mr-3 lg:-ml-1' width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.75 0V12H8.75" stroke="black" strokeWidth="1.5" />
                <path d="M5.75 8L9.75 12L5.75 16" stroke="black" strokeWidth="1.5" />
              </svg>
              <p className="text-gray-700 leading-[1.1] lg:whitespace-pre-line " >
                Approach different space perspectives, with close-ups of the people and wide frames of {"\n"} the office rooms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};