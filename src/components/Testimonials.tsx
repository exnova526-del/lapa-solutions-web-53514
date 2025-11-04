import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Empresário",
      text: "Excelente serviço! A frota é nova e o atendimento é rápido. Já aluguei veículos várias vezes e sempre fui muito bem atendido.",
      rating: 5,
    },
    {
      name: "Marina Oliveira",
      role: "Arquiteta",
      text: "A Lapa Entulhos salvou minha obra! Entrega pontual das caçambas e retirada no prazo. Profissionalismo e qualidade nota 10!",
      rating: 5,
    },
    {
      name: "João Santos",
      role: "Gerente Comercial",
      text: "Uso o táxi da Thiago Locadora há anos. Motoristas educados, carros limpos e sempre pontuais. Recomendo!",
      rating: 5,
    },
    {
      name: "Ana Paula",
      role: "Advogada",
      text: "Aluguei um carro para viagem e foi perfeito. Preço justo, carro novo e sem burocracias. Voltarei a alugar com certeza!",
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 animate-scale-in-bounce">
            <div className="bg-accent/10 text-accent px-4 py-2 rounded-lg font-bold text-sm tracking-wide border border-accent/20">
              DEPOIMENTOS
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 leading-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            O que dizem <span className="text-gradient-primary">nossos clientes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Experiências reais de quem confia em nossos serviços
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-metallic p-6 rounded-xl hover:scale-105 transition-transform animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Quote className="h-6 w-6 text-primary" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground text-base mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-bold text-foreground text-base">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
