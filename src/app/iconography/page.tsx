"use client";
import Header from './components/Header';
import TextArea from './components/TextArea';
import ImageArea from './components/ImageArea';
import Footer from '@/components/Footer';
import Photography from './components/Photography';

export default function ApplicationsPage() {
  return (
    <main>
      <Header />
      <TextArea />
      <ImageArea />
      <Photography/>
      <Footer />
    </main>
  );
}