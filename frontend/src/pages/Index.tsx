import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServiceSection";
import PricingSection from "../components/PriceSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#ffffff] text-[#ffffff]">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        {/* <PricingSection /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
