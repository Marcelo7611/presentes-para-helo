
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const AboutMe = () => {
  return (
    <section id="sobre" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-pink-dark mb-8">
            Sobre mim
          </h2>
          
          <Card className="bg-pink-pastel/30 border-pink-vibrant/20 rounded-2xl shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="text-lg md:text-xl leading-relaxed text-pink-dark space-y-6">
                <p className="font-serif">
                  "Criei esta lista para ajudar meus amigos e familiares a escolherem presentes 
                  que combinam com a minha personalidade, meu estilo e meus sonhos."
                </p>
                
                <p>
                  Aqui estão os itens que eu adoraria receber! Cada presente foi pensado com carinho 
                  e representa um pouquinho de quem eu sou. Espero que essa lista torne mais fácil 
                  e divertido o processo de escolher algo especial para mim.
                </p>
                
                <p>
                  Obrigada por dedicar seu tempo para encontrar o presente perfeito. 
                  Isso significa muito para mim! 💕
                </p>
              </div>
              
              <Button 
                size="lg" 
                className="mt-8 bg-pink-vibrant hover:bg-pink-dark text-white px-8 py-4 rounded-full shadow-xl hover-scale transition-all duration-300"
                onClick={() => document.getElementById('lista')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Veja minha lista completa
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
