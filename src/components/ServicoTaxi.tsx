import { Button } from "@/components/ui/button";
import { Clock, Shield, CreditCard, Wind, Phone, MessageCircle, Car } from "lucide-react";
import taxiImage from "@/assets/taxi-service.jpg";
import poloImg from "@/assets/polo.jpg";

const ServicoTaxi = () => {
  const destaques = [
    {
      icon: Clock,
      title: "Atendimento 24 Horas",
      description: "Disponível a qualquer momento do dia ou da noite",
    },
    {
      icon: Shield,
      title: "Segurança Garantida",
      description: "Motoristas experientes e veículos vistoriados",
    },
    {
      icon: CreditCard,
      title: "Pagamento Facilitado",
      description: "Aceitamos diversas formas de pagamento",
    },
    {
      icon: Wind,
      title: "Conforto Total",
      description: "Veículos climatizados e bem conservados",
    },
  ];

  return (
    <section id="taxi" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6 animate-scale-in-bounce">
            <div className="bg-accent/10 text-accent px-6 py-2 rounded-lg font-black text-sm tracking-wide border border-accent/20">
              SERVIÇO DE TÁXI
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 leading-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Táxi <span className="text-gradient-accent">24 Horas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Deslocamentos dentro e fora da cidade com segurança, conforto e pontualidade
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Por que escolher <span className="text-primary">nosso táxi?</span>
            </h3>
            
            <div className="space-y-4 mb-8">
              {destaques.map((destaque, index) => {
                const Icon = destaque.icon;
                return (
                  <div 
                    key={index} 
                    className="card-metallic p-5 rounded-lg hover:scale-105 transition-transform animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1 text-base">{destaque.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{destaque.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Vehicle Card */}
            <div className="card-metallic p-6 rounded-lg mb-6">
              <h4 className="font-bold text-foreground mb-4 text-lg flex items-center gap-2">
                <Car className="h-5 w-5 text-accent" />
                Veículo Disponível:
              </h4>
              <div className="flex gap-4 items-center">
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 border-2 border-accent/20 bg-white">
                  <img 
                    src={poloImg} 
                    alt="Volkswagen Polo 2025"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h5 className="font-bold text-foreground text-base mb-2">Volkswagen Polo 2025</h5>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-accent/10 text-accent px-2.5 py-1 rounded-md text-xs font-medium">
                      Automático
                    </span>
                    <span className="bg-accent/10 text-accent px-2.5 py-1 rounded-md text-xs font-medium">
                      Ar Condicionado
                    </span>
                    <span className="bg-accent/10 text-accent px-2.5 py-1 rounded-md text-xs font-medium">
                      5 Passageiros
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Highlights */}
            <div className="card-metallic p-6 rounded-lg">
              <h4 className="font-bold text-foreground mb-4 text-lg">Nossos Serviços:</h4>
              <ul className="space-y-2 text-muted-foreground text-base">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Transporte rápido e confiável</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Corridas locais e intermunicipais</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Conforto e atendimento personalizado</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Ideal para trabalho ou viagens de última hora</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
              <img
                src={taxiImage}
                alt="Serviço de táxi confortável e seguro"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Floating Contact Card */}
              <div className="absolute bottom-6 left-6 right-6 card-metallic p-6 rounded-xl shadow-2xl border border-accent/20">
                <h4 className="font-bold text-foreground mb-4 text-base">Chamar Táxi Agora:</h4>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <a
                    href="tel:+5577991088000"
                    className="flex items-center gap-2 text-foreground hover:text-accent transition-colors text-sm"
                  >
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    <span className="font-medium">(77) 9108-8000</span>
                  </a>
                  <a
                    href="tel:+5577999094669"
                    className="flex items-center gap-2 text-foreground hover:text-accent transition-colors text-sm"
                  >
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    <span className="font-medium">(77) 9909-4669</span>
                  </a>
                </div>
                <Button
                  onClick={() =>
                    window.open(
                      "https://wa.me/5577991088000?text=Olá! Preciso de um táxi agora.",
                      "_blank"
                    )
                  }
                  className="w-full btn-speed bg-accent hover:bg-accent/90 text-accent-foreground gap-2 font-bold h-12"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="card-metallic p-8 md:p-12 rounded-2xl text-center animate-scale-in border border-primary/20">
          <h3 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            Precisando de um <span className="text-gradient-primary">Táxi</span>?
          </h3>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Estamos aqui 24h para você! Seja para uma ida ao trabalho ou uma viagem de última hora, 
            conte com nosso serviço de qualidade e confiança.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => window.open("tel:+5577991088000", "_self")}
              className="btn-speed bg-primary hover:bg-primary/90 text-primary-foreground gap-3 font-bold text-base h-14 px-8"
            >
              <Phone className="h-5 w-5" />
              Ligar Agora
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                window.open(
                  "https://wa.me/5577991088000?text=Olá! Preciso de um táxi.",
                  "_blank"
                )
              }
              className="border-2 border-border hover:border-accent hover:bg-accent/5 gap-3 font-bold text-base h-14 px-8"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicoTaxi;
