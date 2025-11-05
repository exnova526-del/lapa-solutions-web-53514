import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, X, Users, Calendar, Palette, Zap } from "lucide-react";
import voyageImg from "@/assets/voyage.jpg";
import hiluxImg from "@/assets/hilux.jpg";
import corollaImg from "@/assets/corolla.jpg";
import sw4Img from "@/assets/sw4-edited.jpg";
import stradaImg from "@/assets/strada.jpg";
import poloImg from "@/assets/polo.jpg";

const VehicleComparison = () => {
  const veiculos = [
    { 
      nome: "Volkswagen Polo", 
      imagem: poloImg,
      ano: "2025",
      cor: "Prata",
      passageiros: 5,
      caracteristicas: {
        arCondicionado: true,
        direcaoHidraulica: true,
        vidrosEletricos: true,
        tracao4x4: false,
        automatico: true,
        multimidia: true,
      }
    },
    { 
      nome: "Volkswagen Voyage", 
      imagem: voyageImg,
      ano: "2023",
      cor: "Prata",
      passageiros: 5,
      caracteristicas: {
        arCondicionado: true,
        direcaoHidraulica: true,
        vidrosEletricos: true,
        tracao4x4: false,
        automatico: false,
        multimidia: false,
      }
    },
    { 
      nome: "Toyota Hilux", 
      imagem: hiluxImg,
      ano: "2023",
      cor: "Prata",
      passageiros: 5,
      caracteristicas: {
        arCondicionado: true,
        direcaoHidraulica: true,
        vidrosEletricos: true,
        tracao4x4: true,
        automatico: true,
        multimidia: true,
      }
    },
    { 
      nome: "Toyota Corolla", 
      imagem: corollaImg,
      ano: "2023",
      cor: "Cinza",
      passageiros: 5,
      caracteristicas: {
        arCondicionado: true,
        direcaoHidraulica: true,
        vidrosEletricos: true,
        tracao4x4: false,
        automatico: true,
        multimidia: true,
      }
    },
    { 
      nome: "Toyota SW4", 
      imagem: sw4Img,
      ano: "2023",
      cor: "Prata",
      passageiros: 7,
      caracteristicas: {
        arCondicionado: true,
        direcaoHidraulica: true,
        vidrosEletricos: true,
        tracao4x4: true,
        automatico: true,
        multimidia: true,
      }
    },
    { 
      nome: "Fiat Strada", 
      imagem: stradaImg,
      ano: "2023",
      cor: "Branca",
      passageiros: 2,
      caracteristicas: {
        arCondicionado: true,
        direcaoHidraulica: true,
        vidrosEletricos: true,
        tracao4x4: false,
        automatico: false,
        multimidia: false,
      }
    },
  ];

  const [selectedVehicles, setSelectedVehicles] = useState<number[]>([0, 1]);

  const handleSelectVehicle = (index: number, position: 0 | 1) => {
    const newSelection = [...selectedVehicles];
    newSelection[position] = index;
    setSelectedVehicles(newSelection);
  };

  const caracteristicasLabels = {
    arCondicionado: "Ar Condicionado",
    direcaoHidraulica: "Direção Hidráulica",
    vidrosEletricos: "Vidros Elétricos",
    tracao4x4: "Tração 4x4",
    automatico: "Câmbio Automático",
    multimidia: "Central Multimídia",
  };

  return (
    <section id="comparacao" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-block mb-6">
            <div className="bg-primary/10 text-primary px-6 py-2 rounded-lg font-black text-sm tracking-wide border border-primary/20 animate-scale-in-bounce">
              COMPARE VEÍCULOS
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 leading-tight animate-slide-up">
            Compare e Escolha o <span className="text-gradient-primary">Melhor para Você</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Veja as características lado a lado e escolha o veículo ideal
          </p>
        </div>

        {/* Vehicle Selectors */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {[0, 1].map((position) => (
            <div key={position} className="animate-fade-in-up" style={{ animationDelay: `${position * 0.1}s` }}>
              <label className="block text-sm font-bold text-foreground mb-3">
                Veículo {position + 1}:
              </label>
              <select
                value={selectedVehicles[position]}
                onChange={(e) => handleSelectVehicle(Number(e.target.value), position as 0 | 1)}
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              >
                {veiculos.map((veiculo, index) => (
                  <option key={index} value={index}>
                    {veiculo.nome}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {selectedVehicles.map((vehicleIndex, position) => {
            const veiculo = veiculos[vehicleIndex];
            return (
              <Card 
                key={position} 
                className="card-metallic p-6 rounded-2xl border-2 hover:border-primary transition-all animate-zoom-in"
                style={{ animationDelay: `${position * 0.15}s` }}
              >
                {/* Vehicle Image */}
                <div className="relative rounded-xl overflow-hidden mb-6 group">
                  <img
                    src={veiculo.imagem}
                    alt={veiculo.nome}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-black text-white mb-1">{veiculo.nome}</h3>
                    <div className="flex gap-3 text-white/90 text-sm">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {veiculo.ano}
                      </span>
                      <span className="flex items-center gap-1">
                        <Palette className="h-4 w-4" />
                        {veiculo.cor}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {veiculo.passageiros} pessoas
                      </span>
                    </div>
                  </div>
                </div>

                {/* Características */}
                <div className="space-y-3">
                  {Object.entries(caracteristicasLabels).map(([key, label], idx) => {
                    const hasFeature = veiculo.caracteristicas[key as keyof typeof veiculo.caracteristicas];
                    return (
                      <div 
                        key={key} 
                        className="flex items-center justify-between p-3 bg-background/50 rounded-lg animate-fade-in"
                        style={{ animationDelay: `${(position * 0.15) + (idx * 0.05)}s` }}
                      >
                        <span className="text-foreground font-medium text-sm">{label}</span>
                        {hasFeature ? (
                          <div className="bg-primary/20 p-1.5 rounded-full">
                            <Check className="h-4 w-4 text-primary" />
                          </div>
                        ) : (
                          <div className="bg-muted/20 p-1.5 rounded-full">
                            <X className="h-4 w-4 text-muted-foreground" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* CTA Button */}
                <Button
                  className="w-full mt-6 btn-speed bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12 gap-2"
                  onClick={() =>
                    window.open(
                      `https://wa.me/5577991088000?text=Olá! Gostaria de alugar o ${veiculo.nome}.`,
                      "_blank"
                    )
                  }
                >
                  <Zap className="h-5 w-5" />
                  Reservar {veiculo.nome}
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Winner Indicator */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <div className="card-metallic inline-block px-8 py-6 rounded-2xl">
            <p className="text-muted-foreground mb-2">
              Ainda com dúvidas? Nossa equipe pode ajudar você a escolher!
            </p>
            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                window.open(
                  "https://wa.me/5577991088000?text=Olá! Preciso de ajuda para escolher um veículo.",
                  "_blank"
                )
              }
              className="btn-speed border-2 border-accent hover:bg-accent hover:text-accent-foreground font-bold"
            >
              Falar com Especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleComparison;
