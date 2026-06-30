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

export default function TextArea() {
  return (
    <section id="text-area">
      <div className="max-w-[1245px] mb-20 mx-auto px-4 lg:px-0">
        <div className="h-[1.5px] mx-auto bg-camel-500 mt-18 mb-3"></div>

        <h4
          className={`text-[30px] font-semibold leading-[33px] text-camel-500 mb-13 ${syneFont.className}`}
        >
          Iconography
        </h4>

        <p
          className={`text-[20px] font-normal leading-[22px] ${poppinsFont.className}`}
        >
          We use icons that resonate with CamelWeb's brand identity,
          representing elements like the <br />
          world and people, actions, values, etc.
          They clearly communicate ideas through the <br />
          simpleness of the pixels, providing a touch of playfulness.
        </p>

        <div className="mt-[30px] flex flex-col gap-[30px] text-gray-700">
          <div className="flex items-start gap-[12px]">
            <svg
              className="shrink-0"
              width="11"
              height="17"
              viewBox="0 0 11 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.75 0V12H8.75" stroke="black" strokeWidth="1.5" />
              <path d="M5.75 8L9.75 12L5.75 16" stroke="black" strokeWidth="1.5" />
            </svg>

            <p
              className={`text-[20px] font-normal leading-[22px] ${poppinsFont.className}`}
            >
              We only use simple, pixelated icons.
            </p>
          </div>

          <div className="flex items-start gap-[12px]">
            <svg
              className="shrink-0"
              width="11"
              height="17"
              viewBox="0 0 11 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.75 0V12H8.75" stroke="black" strokeWidth="1.5" />
              <path d="M5.75 8L9.75 12L5.75 16" stroke="black" strokeWidth="1.5" />
            </svg>

            <p
              className={`text-[20px] font-normal leading-[22px] ${poppinsFont.className}`}
            >
              The pixels must be solid colored and completely filled.
            </p>
          </div>

          <div className="flex items-start gap-[12px]">
            <svg
              className="shrink-0"
              width="11"
              height="17"
              viewBox="0 0 11 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.75 0V12H8.75" stroke="black" strokeWidth="1.5" />
              <path d="M5.75 8L9.75 12L5.75 16" stroke="black" strokeWidth="1.5" />
            </svg>

            <p
              className={`text-[20px] font-normal leading-[22px] ${poppinsFont.className}`}
            >
              The primary color used for the icons is black.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
