import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FrotaVeiculos from "@/components/FrotaVeiculos";
import VehicleComparison from "@/components/VehicleComparison";
import ServicoTaxi from "@/components/ServicoTaxi";
import ServicosPersonalizados from "@/components/ServicosPersonalizados";
import PorQueEscolher from "@/components/PorQueEscolher";
import InsuranceCompanies from "@/components/InsuranceCompanies";
import FAQ from "@/components/FAQ";
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
        <PorQueEscolher />
        <InsuranceCompanies />
        <FAQ />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
