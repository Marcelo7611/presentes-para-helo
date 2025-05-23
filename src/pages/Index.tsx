
import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import BestSellers from '@/components/BestSellers';
import Categories from '@/components/Categories';
import Gallery from '@/components/Gallery';
import AboutMe from '@/components/AboutMe';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const Index = () => {
  // Smooth scroll behavior for the entire page
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-pink-pastel overflow-hidden">
      <Header />
      <main>
        <HeroBanner />
        <BestSellers />
        <Categories />
        <Gallery />
        <AboutMe />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
