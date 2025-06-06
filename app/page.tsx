import { ClientsSection } from "@/components/section/ClientSection";
import HeroSection from "@/components/section/HeroSection";
import Projects from "@/components/section/ProjectsSection";
import { ServicesGrid } from "@/components/section/ServicesGrid";
import Team from "@/components/section/TeamSection";
import Testimonials from "@/components/section/Testimonials";
import StarsSection from "@/components/section/StarsSection";
import CTA from "@/components/section/CTA";


export default function Home() {
  return (
    <main className="relative min-h-screen">
      <HeroSection/>
      <ClientsSection/>
      <ServicesGrid/>
      <Projects/>
      <Team/>
      <Testimonials/>
      <StarsSection />
      <CTA/>
    </main>
  );
}