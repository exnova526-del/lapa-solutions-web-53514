import { Phone, Mail, MapPin, Instagram, Car, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contato" className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                <Car className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-foreground leading-tight">
                  Thiago Locadora
                </span>
                <span className="text-xs text-muted-foreground leading-tight">
                  de Veículos
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Sua mobilidade com agilidade, segurança e profissionalismo.
            </p>
            <div className="flex items-center gap-2 text-sm text-accent">
              <Clock className="h-4 w-4" />
              <span className="font-semibold">Atendimento 24h</span>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-base font-bold text-foreground mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById("servicos");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById("frota");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Frota
                </button>
              </li>
              <li>
                <Link to="/contato" className="text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-base font-bold text-foreground mb-4">Contato</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <a 
                    href="tel:+5577991088000"
                    className="text-muted-foreground hover:text-primary transition-colors block"
                  >
                    (77) 9 9108-8000
                  </a>
                  <a 
                    href="tel:+5577999402485"
                    className="text-muted-foreground hover:text-primary transition-colors block"
                  >
                    (77) 99940-2485
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a 
                  href="mailto:contato@thiagolocadora.com.br"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  contato@thiagolocadora.com.br
                </a>
              </div>
            </div>
          </div>

          {/* Localização & Redes */}
          <div>
            <h3 className="text-base font-bold text-foreground mb-4">Localização</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Bom Jesus da Lapa - BA
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href="https://instagram.com/thiagolocadora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  @thiagolocadora
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-muted-foreground">
              © 2025 Thiago Locadora de Veículos. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                Política de Privacidade
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                Termos de Uso
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
