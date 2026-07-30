"use client";
import Header from '@/components/Header';
import TextArea from './components/TextArea';
import ImageArea from './components/ImageArea';
import Footer from '@/components/Footer';
import Photography from './components/Photography';

export default function IconographyPage() {
  return (
    <main>
      <Header
        label="Iconography"
        headline={
          <>
            The iconography <br />
            complements the brand&apos;s <br />
            visual identity and camel <br />
            symbol, tying it all together in <br />
            a suble, yet effective way.
          </>
    
        }
        scrollTargetId="image-section"
        prevHref="/"
        nextHref="/applications"
        navLinks={[
          { href: "/", label: "Photography" },
          { href: "/applications", label: "Applications" },
          { href: "/iconography", label: "Iconography" },
          { href: "#contact", label: "Contact", external: true },
        ]}
        labelPaddingTop="pt-20"
      />
      <TextArea />
      <ImageArea />
      <Photography />
      <Footer />
    </main>
  );
}