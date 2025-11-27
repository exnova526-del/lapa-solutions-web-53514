import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Clock, Shield, Sparkles, HeadphonesIcon, TrendingDown, Truck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicosPersonalizados = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal();

  const services = [
    {
      icon: Clock,
      title: "Flexibilidade Total",
      description: "Contratos diários, semanais ou mensais adaptados às suas necessidades",
    },
    {
      icon: HeadphonesIcon,
      title: "Suporte 24/7",
      description: "Atendimento disponível a qualquer hora para garantir sua tranquilidade",
    },
    {
      icon: Shield,
      title: "Frota Renovada",
      description: "Veículos revisados e em excelente estado de conservação",
    },
    {
      icon: TrendingDown,
      title: "Preços Competitivos",
      description: "Melhores tarifas do mercado sem taxas ocultas",
    },
    {
      icon: Truck,
      title: "Entrega e Coleta",
      description: "Levamos e buscamos o veículo onde você precisar",
    },
    {
      icon: Sparkles,
      title: "Atendimento Personalizado",
      description: "Soluções sob medida para cada cliente e situação",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            Serviços Personalizados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos muito mais do que apenas aluguel de veículos. Conheça nossos diferenciais.
          </p>
        </div>

        <div
          ref={cardsRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/50 ${
                  cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: cardsVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicosPersonalizados;
