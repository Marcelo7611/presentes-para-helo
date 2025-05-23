
import { Heart, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="pink-gradient text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold mb-4">Lista de Presentes</h3>
            <p className="text-white/80">
              Presentes escolhidos com amor e carinho especial para você.
            </p>
          </div>

          {/* Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Links Úteis</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-white/80 hover:text-white transition-colors">
                Home
              </a>
              <a href="#lista" className="block text-white/80 hover:text-white transition-colors">
                Minha Lista
              </a>
              <a href="#sobre" className="block text-white/80 hover:text-white transition-colors">
                Sobre
              </a>
              <a href="#contato" className="block text-white/80 hover:text-white transition-colors">
                Contato
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Conecte-se</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Mail className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Heart className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60">
            © 2024 Lista de Presentes. Feito com 💕 para pessoas especiais.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
