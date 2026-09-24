import { Syne, Poppins, Open_Sans } from "next/font/google";

export const syne = Syne({
  variable: "--font-syne-raw",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const poppins = Poppins({
  variable: "--font-poppins-raw",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const openSans = Open_Sans({
  variable: "--font-open-sans-raw",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});