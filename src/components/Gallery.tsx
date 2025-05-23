
const Gallery = () => {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&h=600&fit=crop&auto=format",
      alt: "Acessórios elegantes"
    },
    {
      src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500&h=600&fit=crop&auto=format",
      alt: "Flores e decoração"
    },
    {
      src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=600&fit=crop&auto=format",
      alt: "Ambiente aconchegante"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-pink-dark mb-4">
            Inspirações
          </h2>
          <p className="text-lg text-pink-dark/70">
            Um pouquinho do meu estilo e personalidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div key={index} className="group overflow-hidden rounded-2xl shadow-lg">
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
