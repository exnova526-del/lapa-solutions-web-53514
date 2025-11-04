import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres").max(100),
  email: z.string().email("Email inválido").max(255),
  phone: z.string().min(10, "Telefone inválido").max(20),
  subject: z.string().min(5, "Assunto deve ter pelo menos 5 caracteres").max(100),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres").max(1000),
});

type FormData = z.infer<typeof formSchema>;

const Contato = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simula envio do formulário
    setTimeout(() => {
      console.log("Form data:", data);
      
      // Envia para WhatsApp
      const message = encodeURIComponent(
        `*Nova mensagem de contato*\n\n` +
        `*Nome:* ${data.name}\n` +
        `*Email:* ${data.email}\n` +
        `*Telefone:* ${data.phone}\n` +
        `*Assunto:* ${data.subject}\n` +
        `*Mensagem:* ${data.message}`
      );
      
      window.open(`https://wa.me/5577991088000?text=${message}`, "_blank");
      
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });
      
      form.reset();
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-b from-card to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Entre em <span className="text-gradient-primary">Contato</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Estamos prontos para atender você. Fale conosco através dos canais abaixo ou envie uma mensagem.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {/* Telefone */}
              <div className="card-metallic p-6 rounded-lg text-center hover:scale-105 transition-transform">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Telefone</h3>
                <a 
                  href="tel:+5577991088000"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  (77) 9 9108-8000
                </a>
              </div>

              {/* WhatsApp */}
              <div className="card-metallic p-6 rounded-lg text-center hover:scale-105 transition-transform">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">WhatsApp</h3>
                <a 
                  href="https://wa.me/5577991088000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Enviar mensagem
                </a>
              </div>

              {/* Email */}
              <div className="card-metallic p-6 rounded-lg text-center hover:scale-105 transition-transform">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
                <a 
                  href="mailto:contato@thiagolocadora.com.br"
                  className="text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  contato@thiagolocadora.com.br
                </a>
              </div>

              {/* Horário */}
              <div className="card-metallic p-6 rounded-lg text-center hover:scale-105 transition-transform">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Horário</h3>
                <p className="text-muted-foreground">
                  Disponível 24h
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-16 bg-gradient-to-b from-background to-card">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Form */}
              <div className="card-metallic p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Envie sua <span className="text-gradient-accent">Mensagem</span>
                </h2>
                <p className="text-muted-foreground mb-6">
                  Preencha o formulário abaixo e retornaremos o mais breve possível.
                </p>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome completo</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Seu nome" 
                              {...field} 
                              className="bg-background/50 border-border"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input 
                                type="email"
                                placeholder="seu@email.com" 
                                {...field}
                                className="bg-background/50 border-border"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Telefone</FormLabel>
                            <FormControl>
                              <Input 
                                type="tel"
                                placeholder="(77) 9 9999-9999" 
                                {...field}
                                className="bg-background/50 border-border"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Assunto</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Como podemos ajudar?" 
                              {...field}
                              className="bg-background/50 border-border"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mensagem</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Descreva sua necessidade..."
                              rows={5}
                              {...field}
                              className="bg-background/50 border-border resize-none"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full btn-speed bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                      disabled={isSubmitting}
                    >
                      <Send className="w-4 h-4" />
                      {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                    </Button>
                  </form>
                </Form>
              </div>

              {/* Map & Address */}
              <div className="space-y-6">
                <div className="card-metallic p-8 rounded-lg">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Nossa <span className="text-gradient-primary">Localização</span>
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Visite-nos em nossa sede em Bom Jesus da Lapa - BA
                  </p>

                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Endereço</h3>
                      <p className="text-muted-foreground">
                        Bom Jesus da Lapa - BA<br />
                        CEP: 47600-000
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="card-metallic p-2 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123698.35886474937!2d-43.51681668359375!3d-13.256144500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x75c40d88d8a3d9f%3A0x7f8a7a7a7a7a7a7a!2sBom%20Jesus%20da%20Lapa%2C%20BA!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contato;
