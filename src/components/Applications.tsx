
import { Poppins } from 'next/font/google';
import {  Syne } from 'next/font/google';

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
});
const syneFont = Syne({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
});
export default function Applications () {
  return (
    <section id="applications" className="bg-white">
      <div className='max-w-[1247px] mx-auto mt-10 mb-24 lg:px-0 px-4'>
        <div className="py-10 bg-white mx-auto">
          <div className="h-px bg-black"></div>
        </div>
        <div>
          {/* Next label */}
          <p className={`text-medium mb-1 mt-4 text-[13px] font-normal ${poppinsFont.className}`}>Next</p>

          {/* Applications heading with arrow */}
          <div className="flex items-center justify-between">
            <h4 className={`text-4xl font-semibold text-black tracking-tight text-[30px] ${syneFont.className}`}>Applications</h4>
            <button className="text-black hover:text-gray-600 transition-colors lg:mr-7 mt-3">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 21 21">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
