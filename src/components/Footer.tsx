
import { Heart, Instagram, Mail, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contato" className="pt-20">
      <div className="bg-gradient-to-r from-pink-dark to-pink-vibrant text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand */}
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-serif font-bold mb-6">Lista de Presentes</h3>
              <p className="text-white/90 leading-relaxed">
                Presentes escolhidos com amor e carinho especial para você.
                Cada item representa um sonho e um desejo especial.
              </p>
              <div className="mt-8">
                <a href="mailto:contato@listadepresentes.com" className="text-white/80 hover:text-white flex items-center justify-center md:justify-start gap-2 transition-colors">
                  <Mail className="h-5 w-5" />
                  <span>contato@listadepresentes.com</span>
                </a>
              </div>
            </div>

            {/* Links */}
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-6">Links Úteis</h4>
              <div className="space-y-3">
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
                <a href="#" className="block text-white/80 hover:text-white transition-colors">
                  Política de Privacidade
                </a>
                <a href="#" className="block text-white/80 hover:text-white transition-colors">
                  Termos de Uso
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="text-center md:text-right">
              <h4 className="text-xl font-semibold mb-6">Conecte-se</h4>
              <div className="flex justify-center md:justify-end space-x-6">
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <Heart className="h-6 w-6" />
                </a>
              </div>
              
              <div className="mt-8">
                <div className="p-6 bg-white/10 rounded-xl">
                  <h5 className="text-lg font-medium mb-4">Receba novidades</h5>
                  <div className="flex items-center">
                    <input 
                      type="email" 
                      placeholder="Seu email"
                      className="bg-white/20 text-white placeholder:text-white/60 border-0 rounded-l-full py-2 px-4 focus:outline-none focus:ring-1 focus:ring-white w-full"
                    />
                    <button className="bg-white text-pink-vibrant px-4 py-2 rounded-r-full hover:bg-pink-pastel transition-colors">
                      →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center">
            <p className="text-white/80">
              © {currentYear} Lista de Presentes. Feito com 💕 para pessoas especiais.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
