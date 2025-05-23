
import { Button } from '@/components/ui/button';

const HeroBanner = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="relative max-w-4xl mx-auto">
          {/* Hero Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-8">
            <img 
              src="/lovable-uploads/c3d6c477-8f50-4ada-ae98-9f064a2f47a3.png" 
              alt="Presentes elegantes" 
              className="w-full h-96 md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-dark/30 to-transparent"></div>
          </div>

          {/* Hero Content */}
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-pink-dark mb-6 leading-tight">
              Lista de Presentes da Ana
            </h1>
            <p className="text-lg md:text-xl text-pink-dark/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Aqui você encontra os presentes que vão me deixar muito feliz! 
              Cada item foi escolhido com carinho especialmente para você.
            </p>
            <Button 
              size="lg" 
              className="bg-pink-vibrant hover:bg-pink-dark text-white px-8 py-4 text-lg rounded-full shadow-xl hover-scale transition-all duration-300"
              onClick={() => document.getElementById('lista')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver minha lista
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
