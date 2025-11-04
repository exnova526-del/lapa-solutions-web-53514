import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, Truck, Wrench, Users, Calendar } from "lucide-react";
import fleetImage from "@/assets/fleet-cars-new.jpg";
import voyageImg from "@/assets/voyage.jpg";
import hiluxImg from "@/assets/hilux.jpg";
import corollaImg from "@/assets/corolla.jpg";
import sw4Img from "@/assets/sw4-edited.jpg";
import stradaImg from "@/assets/strada.jpg";

const FrotaVeiculos = () => {
  const veiculos = [
    { 
      nome: "Volkswagen Voyage", 
      imagem: voyageImg,
      ano: "2023",
      cor: "Prata",
      passageiros: 5,
      caracteristicas: ["Ar Condicionado", "Direção Hidráulica", "Vidros Elétricos"]
    },
    { 
      nome: "Toyota Hilux", 
      imagem: hiluxImg,
      ano: "2023",
      cor: "Prata",
      passageiros: 5,
      caracteristicas: ["4x4", "Cabine Dupla", "Ar Condicionado", "Diesel"]
    },
    { 
      nome: "Toyota Corolla", 
      imagem: corollaImg,
      ano: "2023",
      cor: "Cinza",
      passageiros: 5,
      caracteristicas: ["Automático", "Ar Condicionado", "Central Multimídia"]
    },
    { 
      nome: "Toyota SW4", 
      imagem: sw4Img,
      ano: "2023",
      cor: "Prata",
      passageiros: 7,
      caracteristicas: ["4x4", "7 Lugares", "Ar Condicionado", "Couro"]
    },
    { 
      nome: "Fiat Strada", 
      imagem: stradaImg,
      ano: "2023",
      cor: "Branca",
      passageiros: 2,
      caracteristicas: ["Cabine Simples", "Ar Condicionado", "Direção Elétrica"]
    },
  ];

  const diferenciais = [
    "Frota nova e revisada",
    "Diárias flexíveis",
    "Preços acessíveis",
    "Atendimento rápido",
    "Seguro incluso",
    "Quilometragem livre",
  ];

  return (
    <section id="frota" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          {/* Brand Badge */}
          <div className="inline-block mb-6 animate-scale-in-bounce">
            <div className="bg-primary/10 text-primary px-6 py-2 rounded-lg font-black text-sm tracking-wide border border-primary/20">
              THIAGO LOCADORA DE VEÍCULOS
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 leading-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Nossa <span className="text-gradient-primary">Frota</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Veículos modernos, seguros e sempre disponíveis para você
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Image */}
          <div className="relative animate-slide-in-left">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
              <img
                src={fleetImage}
                alt="Frota de veículos disponíveis para locação"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-primary glow-primary px-6 py-4 rounded-xl shadow-2xl">
              <div className="text-2xl font-black text-white">100%</div>
              <div className="text-xs font-medium text-white/90">Revisados</div>
            </div>
          </div>

          {/* Right Content */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Veículos <span className="text-primary">Disponíveis</span>
            </h3>
            
            <div className="grid gap-4 mb-8">
              {veiculos.map((veiculo, index) => (
                <div
                  key={index}
                  className="card-metallic rounded-xl p-5 hover:scale-[1.02] transition-all animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex gap-4">
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 border-primary/20 bg-white">
                      <img 
                        src={veiculo.imagem} 
                        alt={veiculo.nome}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-foreground text-lg mb-2">{veiculo.nome}</h4>
                      <div className="flex flex-wrap gap-3 mb-3">
                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span>{veiculo.ano}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                          <div className="h-4 w-4 rounded-full border-2 border-primary flex items-center justify-center">
                            <div className="h-2 w-2 rounded-full bg-primary" />
                          </div>
                          <span>{veiculo.cor}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                          <Users className="h-4 w-4 text-primary" />
                          <span>{veiculo.passageiros} passageiros</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {veiculo.caracteristicas.map((caract, idx) => (
                          <span 
                            key={idx}
                            className="bg-primary/10 text-primary px-2.5 py-1 rounded-md text-xs font-medium"
                          >
                            {caract}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-6">
              Nossos <span className="text-accent">Diferenciais</span>
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {diferenciais.map((diferencial, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground text-base font-medium">{diferencial}</span>
                </div>
              ))}
            </div>

            {/* Contact Card */}
            <div className="card-metallic p-6 rounded-xl">
              <h3 className="font-bold text-foreground mb-4 text-lg">Reserve seu veículo:</h3>
              <div className="grid gap-3 mb-6">
                <a
                  href="tel:+5577991088000"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">(77) 9 9108-8000</span>
                </a>
                <a
                  href="tel:+5577999402485"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">(77) 99940-2485</span>
                </a>
              </div>
              <Button
                size="lg"
                onClick={() =>
                  window.open(
                    "https://wa.me/5577991088000?text=Olá! Gostaria de alugar um veículo.",
                    "_blank"
                  )
                }
                className="w-full btn-speed bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base h-14"
              >
                Reserve pelo WhatsApp
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Guincho */}
          <div className="card-metallic p-8 rounded-2xl hover:scale-105 transition-transform">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Serviço de <span className="text-primary">Guincho</span>
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  O melhor serviço de guincho da região. Assistência 24 horas com atendimento rápido e eficiente.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-semibold">
                Assistência 24h
              </span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-semibold">
                Atendimento Rápido
              </span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-semibold">
                Equipe Especializada
              </span>
            </div>
          </div>

          {/* Munck */}
          <div className="card-metallic p-8 rounded-2xl hover:scale-105 transition-transform">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Wrench className="h-8 w-8 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Serviço de <span className="text-accent">Munck</span>
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Especialistas em remoção de veículos. Munck 45 e 60 toneladas para as tarefas mais desafiadoras.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-accent/10 text-accent px-4 py-2 rounded-lg text-sm font-semibold">
                Munck 45T e 60T
              </span>
              <span className="bg-accent/10 text-accent px-4 py-2 rounded-lg text-sm font-semibold">
                Qualquer Situação
              </span>
              <span className="bg-accent/10 text-accent px-4 py-2 rounded-lg text-sm font-semibold">
                Especialistas
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrotaVeiculos;
