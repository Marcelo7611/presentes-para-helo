
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  
  const categories = [
    'Todos',
    'Decoração',
    'Moda',
    'Livros',
    'Tecnologia',
    'Beleza',
    'Acessórios'
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-pink-dark mb-4">
            Categorias
          </h2>
          <p className="text-lg text-pink-dark/70">
            Explore os presentes por categoria
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={`rounded-full px-6 py-3 transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-pink-vibrant hover:bg-pink-dark text-white shadow-lg'
                  : 'border-pink-vibrant text-pink-vibrant hover:bg-pink-vibrant hover:text-white'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
