import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ImageSection from './components/ImageSection';

export default function ApplicationsPage() {
  return (
    <main>
      <Header
        label="Applications"
        headline={
          <>
            This manual&apos;s guidelines offer <br />
            a steady and unified base for <br />
            building whatever new <br />
            applications the brand <br />
            demands.
          </>
        }
        scrollTargetId="image-section"
        prevHref="/"
        nextHref="/iconography"
        navLinks={[
          { href: "/", label: "Photography" },
          { href: "/applications", label: "Applications" },
          { href: "/iconography", label: "Iconography" },
          { href: "#contact", label: "Contact", external: true },
        ]}
        labelPaddingTop="pt-19"
      />
      <ImageSection />
      <Footer />
    </main>
  );
}