import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: accordionRef, isVisible: accordionVisible } = useScrollReveal();

  const faqs = [
    {
      question: "Quais documentos são necessários para alugar um veículo?",
      answer: "Para alugar um veículo, você precisará apresentar: CNH válida (com no mínimo 2 anos de emissão), documento de identidade (RG ou CNH), comprovante de residência atualizado e cartão de crédito para caução. Para empresas, são necessários CNPJ e contrato social.",
    },
    {
      question: "Qual é a idade mínima para alugar um carro?",
      answer: "A idade mínima para locação é de 21 anos, e a CNH deve ter sido emitida há pelo menos 2 anos. Para algumas categorias de veículos premium, pode ser exigida idade mínima de 25 anos.",
    },
    {
      question: "Como funciona o seguro do veículo?",
      answer: "Todos os nossos veículos possuem seguro básico incluso na diária. Oferecemos também coberturas adicionais opcionais que reduzem ou eliminam a franquia em caso de sinistro. Nossa equipe explicará todas as opções no momento da locação.",
    },
    {
      question: "Posso devolver o veículo em local diferente?",
      answer: "Sim! Oferecemos o serviço de entrega e coleta do veículo. Você pode combinar a retirada e devolução em endereços diferentes mediante agendamento prévio. Consulte condições e taxas aplicáveis.",
    },
    {
      question: "Qual é a política de combustível?",
      answer: "O veículo é entregue com tanque cheio e deve ser devolvido nas mesmas condições. Caso contrário, será cobrado o valor do combustível utilizado mais uma taxa administrativa.",
    },
    {
      question: "Posso viajar para outros estados?",
      answer: "Sim, você pode viajar para qualquer estado do Brasil. Recomendamos informar seu roteiro no momento da locação para garantir a melhor cobertura de seguro e assistência 24 horas em todo território nacional.",
    },
    {
      question: "O que está incluído na diária?",
      answer: "A diária inclui: seguro básico, quilometragem livre, assistência 24 horas e impostos. Não estão inclusos: combustível, pedágios, estacionamentos e coberturas adicionais opcionais.",
    },
    {
      question: "Como funciona o sistema de reservas?",
      answer: "Você pode reservar pelo nosso WhatsApp, telefone ou presencialmente. Recomendamos reservar com antecedência para garantir a disponibilidade do veículo desejado, especialmente em períodos de alta temporada.",
    },
    {
      question: "Posso adicionar motoristas adicionais?",
      answer: "Sim, você pode adicionar motoristas adicionais ao contrato. Cada motorista adicional deve apresentar os mesmos documentos exigidos do locatário principal. Pode haver uma taxa adicional por motorista.",
    },
    {
      question: "O que fazer em caso de problemas mecânicos?",
      answer: "Todos os nossos veículos contam com assistência 24 horas. Em caso de problemas mecânicos, entre em contato imediatamente pelo telefone de emergência fornecido no contrato. Providenciaremos reparo ou substituição do veículo o mais rápido possível.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="w-10 h-10 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Perguntas Frequentes
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos serviços de aluguel de veículos
          </p>
        </div>

        <div
          ref={accordionRef as React.RefObject<HTMLDivElement>}
          className={`transition-all duration-700 ${
            accordionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/50 rounded-lg px-6 bg-card hover:border-primary/50 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div
          className={`mt-12 text-center transition-all duration-700 delay-300 ${
            accordionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-muted-foreground mb-4">
            Ainda tem dúvidas? Entre em contato conosco!
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a
              href="tel:+5511999999999"
              className="text-primary hover:underline font-medium"
            >
              📞 (11) 99999-9999
            </a>
            <span className="text-muted-foreground">•</span>
            <a
              href="https://wa.me/5511999999999"
              className="text-primary hover:underline font-medium"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
