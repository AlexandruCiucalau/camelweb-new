"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LocationPhotography from '@/components/LocationPhotography';
import PhotoGrid from '@/components/PhotoGrid';
import Applications from '@/components/Applications';


export default function Home() {
  return (
    <div>
      <Header />
      <LocationPhotography />
      <PhotoGrid />
      <Applications />
      <Footer />
    </div>
  );
}