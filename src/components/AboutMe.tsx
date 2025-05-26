
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const AboutMe = () => {
  return (
    <section id="sobre" className="py-24 px-4 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center max-w-6xl mx-auto gap-12">
          <div className="w-full lg:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/presentes-para-helo/lovable-uploads/helloisaBanner.jpeg" 
                alt="Foto de perfil elegante"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="mb-8">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-pink-dark mb-5 tracking-wide">
                Sobre mim
              </h2>
              <div className="w-20 h-1 bg-pink-vibrant mb-8"></div>
            </div>
            
            <Card className="bg-pink-pastel/20 border-pink-vibrant/10 rounded-2xl shadow-xl">
              <CardContent className="p-8 md:p-10">
                <div className="text-lg leading-relaxed text-pink-dark space-y-6">
                  <p className="font-serif text-xl italic">
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
                  className="mt-10 bg-pink-vibrant hover:bg-pink-dark text-white px-10 py-6 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                  onClick={() => document.getElementById('lista')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Veja minha lista completa
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
