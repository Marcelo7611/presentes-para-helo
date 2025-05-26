
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const Gallery = () => {
  const galleryImages = [
    {
      src: "/presentes-para-helo/lovable-uploads/eu.jpeg",
      alt: "Acessórios elegantes"
    },
    {
      src: "/presentes-para-helo/lovable-uploads/arte.jpeg",
      alt: "Flores e decoração"
    },
    {
      src: "/presentes-para-helo/lovable-uploads/praia.jpeg",
      alt: "Ambiente aconchegante"
    },
  ];

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-pink-dark mb-5 tracking-wide">
            Inspirações
          </h2>
          <div className="w-20 h-1 bg-pink-vibrant mx-auto mb-5"></div>
          <p className="text-lg text-pink-dark/70 italic">
            Um pouquinho do meu estilo e personalidade
          </p>
        </div>

        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {galleryImages.slice(0, 3).map((image, index) => (
              <div key={index} className="group overflow-hidden rounded-2xl shadow-2xl h-96">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="block md:hidden">
          <Carousel className="w-full max-w-sm mx-auto">
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="overflow-hidden rounded-2xl shadow-lg h-80">
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-4">
              <CarouselPrevious className="static transform-none bg-pink-pastel border-pink-vibrant text-pink-dark hover:bg-pink-vibrant hover:text-white" />
              <CarouselNext className="static transform-none bg-pink-pastel border-pink-vibrant text-pink-dark hover:bg-pink-vibrant hover:text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
