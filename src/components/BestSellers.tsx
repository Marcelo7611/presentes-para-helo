
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

const BestSellers = () => {
  const favoriteGifts = [
    {
      id: 1,
      name: "Air MAx Tn Pink",
      price: "R$ 1.200",
      image: "/presentes-para-helo/lovable-uploads/TN.jpeg",
      description: "Conforto e estilo em cada passo"
    },
    {
      id: 2,
      name: "kit elseve",
      price: "R$ 100",
      image: "/presentes-para-helo/lovable-uploads/Elseve.jpeg",
      description: "cabelo saudável e radiante cuidados Elseve"
    },
    {
      id: 3,
      name: "Puma 180",
      price: "R$ 699",
      image: "/presentes-para-helo/lovable-uploads/puma.jpeg",
      description: "puma 180 perfeito para conforto e estilo"
    }
  ];

  return (
    <section id="lista" className="py-24 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-pink-dark mb-5 tracking-wide">
            Presentes Favoritos
          </h2>
          <div className="w-20 h-1 bg-pink-vibrant mx-auto mb-5"></div>
          <p className="text-lg text-pink-dark/70 max-w-2xl mx-auto italic">
            Estes são os itens que estão no topo da minha lista de desejos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {favoriteGifts.map((gift) => (
            <Card key={gift.id} className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-none">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden relative group">
                  <img 
                    src={gift.image} 
                    alt={gift.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button 
                      size="icon" 
                      variant="outline" 
                      className="rounded-full bg-white/80 hover:bg-white border-none"
                    >
                      <Heart className="h-5 w-5 text-pink-vibrant" />
                    </Button>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-serif font-semibold text-pink-dark mb-2">
                    {gift.name}
                  </h3>
                  <p className="text-pink-dark/70 mb-4 text-sm">
                    {gift.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-pink-vibrant">
                      {gift.price}
                    </span>
                    <Button 
                      variant="outline" 
                      className="border-pink-vibrant text-pink-vibrant hover:bg-pink-vibrant hover:text-white rounded-full px-6 transition-colors duration-300"
                    >
                      Ver detalhes
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button 
            className="bg-white text-pink-dark border border-pink-dark hover:bg-pink-pastel rounded-full px-10 py-6 text-lg transition-all duration-300"
          >
            Ver todos os presentes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
