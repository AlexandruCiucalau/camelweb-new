"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type NavLink = {
  href: string;
  label: string;
  external?: boolean;
};

type HeaderProps = {
  label: string;
  headline: React.ReactNode;
  scrollTargetId: string;
  prevHref: string;
  nextHref: string;
  navLinks: NavLink[];
  labelPaddingTop: string;
};

export default function Header({
  label,
  headline,
  scrollTargetId,
  prevHref,
  nextHref,
  navLinks,
  labelPaddingTop,
}: HeaderProps) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-camel-500 text-white relative lg:h-[768px]">
      <div className="flex items-center justify-between lg:px-15 px-6 py-6 max-w-[1366px] mx-auto">
        <Link href="/" className={`text-2xl font-bold tracking-wide font-syne`}>
          CAMELWEB
        </Link>

        <div className="relative">
          <button className="flex flex-col space-y-3 cursor-pointer z-10" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            <div className="w-10 h-0.5 bg-white"></div>
            <div className="w-10 h-0.5 bg-white"></div>
            <div className="w-5 h-0.5 bg-white"></div>
          </button>

          {isMenuOpen && (
            <div className="absolute lg:-right-14 -right-4 mt-3 bg-camel-500 border border-white/20 shadow-lg rounded-md">
              <nav className="py-2">
                {navLinks.map((link) =>
                  link.external ? (
                    <Link key={link.href} href={link.href} className="block px-6 py-2 text-white hover:bg-white/10 hover:text-gray-200">
                      {link.label}
                    </Link>
                  ) : (
                    <Link key={link.href} href={link.href} className="block px-6 py-2 text-white hover:bg-white/10 hover:text-gray-200">
                      {link.label}
                    </Link>
                  )
                )}
              </nav>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-[1246px] mx-auto">
        <div className="h-[2px] bg-white"></div>
      </div>

      <div className="px-4 lg:px-0">
        <h4
          className={`mx-auto w-full max-w-[1032px] ${labelPaddingTop} text-center text-[30px] font-semibold leading-[1.1] font-syne`}
        >
          {label}
        </h4>
        <h2
          className={`mx-auto w-full max-w-[1032px] mt-13 text-center text-4xl sm:text-6xl lg:text-[67px] font-semibold leading-[1.1] font-syne`}
        >
          {headline}
        </h2>
      </div>

      <button
        onClick={() => document.getElementById(scrollTargetId)?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 py-14 text-white opacity-70 hover:opacity-100 transition-opacity"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>

      <div className="absolute bottom-15 right-15 flex space-x-5">
        <button
          onClick={() => router.push(prevHref)}
          className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-opacity-30 transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => router.push(nextHref)}
          className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-opacity-30 transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </header>
  );
}