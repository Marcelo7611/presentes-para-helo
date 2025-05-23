
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Search, Heart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl md:text-3xl font-serif font-bold text-pink-dark">
            Lista de Presentes
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-pink-dark hover:text-pink-vibrant transition-colors font-medium">
              Home
            </a>
            <a href="#lista" className="text-pink-dark hover:text-pink-vibrant transition-colors font-medium">
              Minha Lista
            </a>
            <a href="#sobre" className="text-pink-dark hover:text-pink-vibrant transition-colors font-medium">
              Sobre mim
            </a>
            <a href="#contato" className="text-pink-dark hover:text-pink-vibrant transition-colors font-medium">
              Contato
            </a>
          </nav>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hover:bg-pink-pastel">
              <Search className="h-5 w-5 text-pink-dark" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-pink-pastel">
              <Heart className="h-5 w-5 text-pink-dark" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden hover:bg-pink-pastel"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-pink-pastel">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#home" className="text-pink-dark hover:text-pink-vibrant transition-colors font-medium">
                Home
              </a>
              <a href="#lista" className="text-pink-dark hover:text-pink-vibrant transition-colors font-medium">
                Minha Lista
              </a>
              <a href="#sobre" className="text-pink-dark hover:text-pink-vibrant transition-colors font-medium">
                Sobre mim
              </a>
              <a href="#contato" className="text-pink-dark hover:text-pink-vibrant transition-colors font-medium">
                Contato
              </a>
              <div className="flex space-x-4 pt-2">
                <Button variant="ghost" size="icon" className="hover:bg-pink-pastel">
                  <Search className="h-5 w-5 text-pink-dark" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-pink-pastel">
                  <Heart className="h-5 w-5 text-pink-dark" />
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
