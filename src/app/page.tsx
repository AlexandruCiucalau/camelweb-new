"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LocationPhotography from '@/components/LocationPhotography';
import PhotoGrid from '@/components/PhotoGrid';
import NextSection from '@/components/Applications';

export default function Home() {
  return (
    <main>
      <Header
        label="Photography"
        headline={<>The photographs act as a <br />support system for everything<br />CamelWeb stands for.</>}
        scrollTargetId="photography-section"
        prevHref="/iconography"
        nextHref="/applications"
        navLinks={[
          { href: "#photo-grid", label: "Photography", external: true },
          { href: "/applications", label: "Applications" },
          { href: "/iconography", label: "Iconography" },
          { href: "#contact", label: "Contact", external: true },
        ]}
        labelPaddingTop="pt-37"
      />
      <LocationPhotography />
      <PhotoGrid />
      <NextSection sectionId="applications" heading="Applications" href="/applications" />
      <Footer />
    </main>
  );
}