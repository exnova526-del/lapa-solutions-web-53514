import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    // Se não estiver na página inicial, navega primeiro
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-xl shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
          >
            <img 
              src={logo} 
              alt="Thiago Locadora de Veículos" 
              className="h-12 w-auto group-hover:scale-105 transition-transform"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("frota")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all"
            >
              Frota
            </button>
            <Link
              to="/contato"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all"
            >
              Contato
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open("tel:+5577991088000", "_self")}
              className="gap-2 border-border hover:border-primary hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              Ligar
            </Button>
            <Button
              size="sm"
              onClick={() =>
                window.open(
                  "https://wa.me/5577991088000?text=Olá! Gostaria de alugar um veículo.",
                  "_blank"
                )
              }
              className="btn-speed bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              Alugar Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-left text-base font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-left text-base font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("frota")}
                className="text-left text-base font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                Frota
              </button>
              <Link
                to="/contato"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-left text-base font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                Contato
              </Link>
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open("tel:+5577991088000", "_self")}
                  className="w-full gap-2"
                >
                  <Phone className="h-4 w-4" />
                  Ligar Agora
                </Button>
                <Button
                  size="sm"
                  onClick={() =>
                    window.open(
                      "https://wa.me/5577991088000?text=Olá! Gostaria de alugar um veículo.",
                      "_blank"
                    )
                  }
                  className="w-full btn-speed bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                >
                  Alugar Agora
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
