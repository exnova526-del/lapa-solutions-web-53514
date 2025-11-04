import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, TrendingUp, DollarSign, Leaf, Phone } from "lucide-react";
import equipmentImage from "@/assets/construction-equipment.jpg";

const ServicosLapa = () => {
  const beneficios = [
    {
      icon: Shield,
      title: "Segurança",
      description: "Equipamentos certificados e revisados",
    },
    {
      icon: TrendingUp,
      title: "Praticidade",
      description: "Entrega e retirada no local",
    },
    {
      icon: DollarSign,
      title: "Custo-Benefício",
      description: "Melhores preços da região",
    },
    {
      icon: Leaf,
      title: "Sustentabilidade",
      description: "Descarte consciente de materiais",
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            {/* Brand Badge */}
            <div className="inline-block mb-6 animate-scale-in-bounce">
              <div className="bg-accent/10 text-accent px-4 py-2 rounded-lg font-bold text-sm tracking-wide border border-accent/20">
                LAPA ENTULHOS
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4 leading-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Locação de <span className="text-gradient-accent">Caçambas e Andaimes</span>
            </h2>

            <p className="text-base text-muted-foreground mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              A Lapa Entulhos oferece soluções seguras e sustentáveis para obras e reformas.
              Trabalhamos com aluguel de caçambas e andaimes com foco em segurança, praticidade e custo-benefício.
            </p>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {beneficios.map((beneficio, index) => {
                const Icon = beneficio.icon;
                return (
                  <div 
                    key={index} 
                    className="card-metallic p-5 rounded-lg hover:scale-105 transition-transform animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-accent/10 p-3 rounded-lg">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1 text-base">{beneficio.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{beneficio.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Contact Info */}
            <div className="card-metallic p-6 rounded-lg mb-6">
              <h3 className="font-bold text-foreground mb-4 text-base">Contatos Diretos:</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+5577999084118"
                  className="flex items-center gap-3 text-foreground hover:text-accent transition-colors text-base"
                >
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <span className="font-medium">(77) 99908-4118</span>
                </a>
                <a
                  href="tel:+5577991633330"
                  className="flex items-center gap-3 text-foreground hover:text-accent transition-colors text-base"
                >
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <span className="font-medium">(77) 99163-3330</span>
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              onClick={() =>
                window.open(
                  "https://wa.me/5577999084118?text=Olá! Gostaria de orçamento para caçambas ou andaimes.",
                  "_blank"
                )
              }
              className="w-full sm:w-auto btn-speed bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base h-14 px-8"
            >
              Solicitar Orçamento
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
              <img
                src={equipmentImage}
                alt="Caçambas e andaimes para locação"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 card-metallic p-6 rounded-xl shadow-2xl border border-accent/20">
              <div className="text-3xl font-black text-accent">24h</div>
              <div className="text-sm font-medium text-muted-foreground">Atendimento</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicosLapa;
