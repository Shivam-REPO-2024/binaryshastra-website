import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SpecializationsSection from "@/components/SpecializationsSection";
import YouTubeSection from "@/components/YouTubeSection";
import TeachingApproachSection from "@/components/TeachingApproachSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Toaster position="top-center" richColors />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SpecializationsSection />
      <YouTubeSection />
      <TeachingApproachSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
