import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroBanner = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-pink-pastel/30 to-pink-pastel"></div>
        <div className="w-full h-full flex items-center justify-center overflow-hidden">
          <img
            src="/presentes-para-helo/lovable-uploads/fundo2.jpeg"
            alt="Presentes elegantes"
            className="w-auto h-full md:w-full md:h-auto object-cover opacity-95"
          />
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Hero Content */}
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-pink-dark mb-8 leading-tight tracking-wide">
              Lista de Presentes
              <br />
              da Helo
            </h1>
            <p className="text-lg md:text-xl text-pink-dark/90 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Aqui você encontra os presentes que vão me deixar muito feliz.
              <br />
              Cada item foi escolhido com carinho especialmente para você.
            </p>
            <div className="flex flex-col items-center">
              <Button
                size="lg"
                className="bg-pink-vibrant hover:bg-pink-dark text-white px-10 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                onClick={() =>
                  document
                    .getElementById("lista")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Ver minha lista
              </Button>

              <div className="mt-20 animate-bounce">
                <ChevronDown className="h-10 w-10 text-pink-dark/50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
