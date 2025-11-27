import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import insuranceImage from "@/assets/insurance-companies.png";

const InsuranceCompanies = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal();

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={titleRef as any}
          className={`text-center mb-12 transition-all duration-1000 ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            Seguradoras Parceiras
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trabalhamos com as principais seguradoras do mercado para garantir a melhor cobertura e tranquilidade para você
          </p>
        </div>

        <div
          ref={imageRef as any}
          className={`transition-all duration-1000 delay-200 ${
            imageVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <img
              src={insuranceImage}
              alt="Seguradoras parceiras: Liberty, Allianz, Alfa, Bradesco, Generali, Porto Seguro, Itaú, Azul, Tokio Marine, SulAmérica, Mapfre, Zurich, Marítima e HDI"
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceCompanies;
