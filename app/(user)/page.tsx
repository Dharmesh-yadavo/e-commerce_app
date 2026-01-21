import Navigation from "@/components/user/Navigation";
import HeroSection from "@/components/user/HeroSection";
import ProductShowcase from "@/components/user/ProductShowcase";
import Footer from "@/components/user/Footer";

export default function LuxuryStorefront() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/*ProductShowcase  */}
      <ProductShowcase />

      {/* Footer CTA */}
      <Footer />
    </div>
  );
}
