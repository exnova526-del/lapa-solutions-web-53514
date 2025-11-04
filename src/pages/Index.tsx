import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicosLapa from "@/components/ServicosLapa";
import FrotaVeiculos from "@/components/FrotaVeiculos";
import VehicleComparison from "@/components/VehicleComparison";
import ServicoTaxi from "@/components/ServicoTaxi";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ServicosLapa />
        <FrotaVeiculos />
        <VehicleComparison />
        <ServicoTaxi />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
