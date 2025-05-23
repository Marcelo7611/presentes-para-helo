
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Search, Heart, ShoppingBag } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`fixed top-0 w-full bg-white/95 backdrop-blur-lg z-50 transition-all duration-500 ${
      scrolled ? 'py-3 shadow-md' : 'py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl md:text-3xl font-serif font-bold text-pink-dark">
            Lista de Presentes
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <a href="#home" className="text-pink-dark hover:text-pink-vibrant transition-colors font-medium tracking-wide">
              Home
            </a>
            <a href="#lista" className="text-pink-dark hover:text-pink-vibrant transition-colors font-medium tracking-wide">
              Minha Lista
            </a>
            <a href="#sobre" className="text-pink-dark hover:text-pink-vibrant transition-colors font-medium tracking-wide">
              Sobre mim
            </a>
            <a href="#contato" className="text-pink-dark hover:text-pink-vibrant transition-colors font-medium tracking-wide">
              Contato
            </a>
          </nav>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" size="icon" className="hover:bg-pink-pastel rounded-full">
              <Search className="h-5 w-5 text-pink-dark" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-pink-pastel rounded-full">
              <Heart className="h-5 w-5 text-pink-dark" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-pink-pastel rounded-full">
              <ShoppingBag className="h-5 w-5 text-pink-dark" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden hover:bg-pink-pastel rounded-full"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-pink-pastel">
            <div className="flex flex-col space-y-6 pt-4">
              <a href="#home" className="text-pink-dark hover:text-pink-vibrant transition-colors font-medium text-lg">
                Home
              </a>
              <a href="#lista" className="text-pink-dark hover:text-pink-vibrant transition-colors font-medium text-lg">
                Minha Lista
              </a>
              <a href="#sobre" className="text-pink-dark hover:text-pink-vibrant transition-colors font-medium text-lg">
                Sobre mim
              </a>
              <a href="#contato" className="text-pink-dark hover:text-pink-vibrant transition-colors font-medium text-lg">
                Contato
              </a>
              <div className="flex space-x-6 pt-2">
                <Button variant="ghost" size="icon" className="hover:bg-pink-pastel rounded-full">
                  <Search className="h-5 w-5 text-pink-dark" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-pink-pastel rounded-full">
                  <Heart className="h-5 w-5 text-pink-dark" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-pink-pastel rounded-full">
                  <ShoppingBag className="h-5 w-5 text-pink-dark" />
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
