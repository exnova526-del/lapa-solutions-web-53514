import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FrotaVeiculos from "@/components/FrotaVeiculos";
import VehicleComparison from "@/components/VehicleComparison";
import ServicoTaxi from "@/components/ServicoTaxi";
import ServicosPersonalizados from "@/components/ServicosPersonalizados";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FrotaVeiculos />
        <VehicleComparison />
        <ServicoTaxi />
        <ServicosPersonalizados />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
