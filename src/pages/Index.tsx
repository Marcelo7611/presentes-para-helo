
import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import BestSellers from '@/components/BestSellers';
import Categories from '@/components/Categories';
import Gallery from '@/components/Gallery';
import AboutMe from '@/components/AboutMe';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-pink-pastel">
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
