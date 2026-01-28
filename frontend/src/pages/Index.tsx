import { lazy, Suspense } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";

// Lazy load components below the fold for better initial load performance
const AboutSection = lazy(() => import("../components/AboutSection"));
const ServicesSection = lazy(() => import("../components/ServiceSection"));
const ContactSection = lazy(() => import("../components/ContactSection"));
const Footer = lazy(() => import("../components/Footer"));
// Eager load ScrollToTop since it might be needed quickly if user scrolls fast, or lazy load is fine too.
// Let's lazy load it for consistency but it's small.
const ScrollToTop = lazy(() => import("../components/ScrollToTop"));

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <Header />
      <main className="overflow-x-hidden">
        {/* Keep HeroSection eager as it's the LCP element */}
        <HeroSection />

        {/* Wrap lazy loaded sections in Suspense */}
        <Suspense fallback={null}>
          <AboutSection />
          <ServicesSection />
          <ContactSection />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
        <ScrollToTop />
      </Suspense>
    </div>
  );
};

export default Index;
