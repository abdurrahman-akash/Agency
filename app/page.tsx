import { ClientsSection } from "@/components/section/ClientSection";
import HeroSection from "@/components/section/HeroSection";
// import Projects from "@/components/section/ProjectsSection";
import { ServicesGrid } from "@/components/section/ServicesGrid";
import Team from "@/components/section/TeamSection";
// import Testimonials from "@/components/section/Testimonials";
import StarsSection from "@/components/section/StarsSection";
import CTA from "@/components/section/CTA";
// import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import AnimatedTestimonialsDemo  from "@/components/section/animated-testmonial";
import ProjectParallaxDemo from "@/components/section/AgencyProjectsParallax";
// import { cn } from "@/lib/utils";


export default function Home() {
  return (
    <main className="relative min-h-screen">
      <HeroSection/>
      <ClientsSection/>
      <ServicesGrid/>
      {/* <Projects/> */}
      <div className="p-10 md:p-20 bg-gradient-to-br  from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <ProjectParallaxDemo />
      </div>
      <div>
         
        <Team/>
      {/* <Testimonials/> */}
      <AnimatedTestimonialsDemo />
      <StarsSection />
      </div>
      <CTA/>
    </main>
  );
}