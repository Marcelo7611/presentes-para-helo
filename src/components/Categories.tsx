
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  
  const categories = [
    'Cabelo',
    'Skincare',
    'hobbies',
    'diferentes',
    'estilo',
    'maquiagem',
    'perfumes',
    'lugares'
  ];

  return (
    <section className="py-20 px-4 bg-pink-pastel/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-pink-dark mb-5 tracking-wide">
            Categorias
          </h2>
          <div className="w-20 h-1 bg-pink-vibrant mx-auto mb-5"></div>
          <p className="text-lg text-pink-dark/70 max-w-2xl mx-auto italic">
            Explore os presentes por categoria
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={`rounded-full px-8 py-5 transition-all duration-500 mb-3 ${
                activeCategory === category
                  ? 'bg-pink-vibrant hover:bg-pink-dark text-white shadow-lg'
                  : 'border-2 border-pink-vibrant text-pink-vibrant hover:bg-pink-vibrant hover:text-white'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-center text-pink-dark font-medium">
              Moda
              <div className="text-pink-vibrant text-sm mt-1">32 itens</div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-center text-pink-dark font-medium">
              Lugares
              <div className="text-pink-vibrant text-sm mt-1">18 itens</div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-center text-pink-dark font-medium">
              Beleza
              <div className="text-pink-vibrant text-sm mt-1">25 itens</div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-center text-pink-dark font-medium">
              Acessórios
              <div className="text-pink-vibrant text-sm mt-1">41 itens</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
