import { Button } from "@/components/ui/button";
import { MessageCircle, Zap, Shield, Clock } from "lucide-react";
import heroImage from "@/assets/hero-vehicles.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Frota moderna de veículos da Thiago Locadora"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        {/* Red glow effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl py-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-primary/20 animate-fade-in-down">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </div>
            <span className="text-sm font-semibold text-foreground tracking-wide">Disponível 24 horas</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-foreground mb-6 leading-none tracking-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Aluguel de Veículos
            <br />
            <span className="text-gradient-primary">Rápido e Seguro</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Frota moderna, atendimento profissional e os melhores preços de Bom Jesus da Lapa. 
            Sua mobilidade é nossa prioridade.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button
              size="lg"
              onClick={() =>
                window.open(
                  "https://wa.me/5577991088000?text=Olá! Gostaria de alugar um veículo.",
                  "_blank"
                )
              }
              className="btn-speed bg-accent hover:bg-accent/90 text-accent-foreground gap-3 text-base h-14 px-8 font-bold"
            >
              <MessageCircle className="h-5 w-5" />
              Alugar Agora
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById("frota");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="gap-3 text-base h-14 px-8 border-2 border-border hover:border-primary hover:bg-primary/5 font-semibold"
            >
              Ver Frota
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground">Agilidade</h3>
                <p className="text-xs text-muted-foreground">Processo rápido</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border hover:border-accent/50 transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground">Segurança</h3>
                <p className="text-xs text-muted-foreground">Veículos revisados</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground">24 Horas</h3>
                <p className="text-xs text-muted-foreground">Sempre disponível</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
