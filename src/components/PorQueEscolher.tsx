import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Award, Users, Car, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PorQueEscolher = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal();
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollReveal();

  const stats = [
    {
      icon: Award,
      number: "15+",
      label: "Anos de Mercado",
      description: "Experiência e confiabilidade",
    },
    {
      icon: Users,
      number: "5.000+",
      label: "Clientes Satisfeitos",
      description: "Atendimento de excelência",
    },
    {
      icon: Car,
      number: "50+",
      label: "Veículos na Frota",
      description: "Variedade e qualidade",
    },
    {
      icon: TrendingUp,
      number: "98%",
      label: "Taxa de Satisfação",
      description: "Compromisso com você",
    },
  ];

  const benefits = [
    "Frota moderna e constantemente renovada",
    "Veículos revisados e higienizados",
    "Atendimento personalizado e humanizado",
    "Flexibilidade nos contratos e pagamentos",
    "Suporte técnico 24 horas por dia",
    "Sem burocracias desnecessárias",
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            Por Que Nos Escolher?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Números que comprovam nossa excelência e compromisso com você
          </p>
        </div>

        {/* Statistics Grid */}
        <div
          ref={statsRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-primary/50 hover:-translate-y-2 ${
                  statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: statsVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{stat.label}</h3>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div
          ref={benefitsRef as React.RefObject<HTMLDivElement>}
          className={`bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border/50 transition-all duration-700 ${
            benefitsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Nossos Diferenciais
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 p-4 rounded-lg hover:bg-primary/5 transition-all duration-300 ${
                  benefitsVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
                style={{
                  transitionDelay: benefitsVisible ? `${400 + index * 80}ms` : "0ms",
                }}
              >
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-foreground font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PorQueEscolher;
