
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const BestSellers = () => {
  const favoriteGifts = [
    {
      id: 1,
      name: "Sandália Rosa Glamour",
      price: "R$ 299",
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop&auto=format",
      description: "Sandália elegante com detalhes em strass"
    },
    {
      id: 2,
      name: "Bolsa de Couro Rosa",
      price: "R$ 450",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop&auto=format",
      description: "Bolsa de couro genuíno em tom rosa suave"
    },
    {
      id: 3,
      name: "Perfume Floral",
      price: "R$ 180",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop&auto=format",
      description: "Fragrância delicada com notas florais"
    }
  ];

  return (
    <section id="lista" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-pink-dark mb-4">
            Presentes Favoritos
          </h2>
          <p className="text-lg text-pink-dark/70 max-w-2xl mx-auto">
            Estes são os itens que estão no topo da minha lista de desejos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {favoriteGifts.map((gift) => (
            <Card key={gift.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-scale overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={gift.image} 
                    alt={gift.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-pink-dark mb-2">
                    {gift.name}
                  </h3>
                  <p className="text-pink-dark/60 mb-3 text-sm">
                    {gift.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-pink-vibrant">
                      {gift.price}
                    </span>
                    <Button 
                      size="sm" 
                      className="bg-pink-vibrant hover:bg-pink-dark text-white rounded-full px-6"
                    >
                      Ver detalhes
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
