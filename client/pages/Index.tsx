import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import MyWorksSection from "@/components/portfolio/MyWorksSection";

export default function Index() {
  return (
    <div className="min-h-screen bg-[#070707] text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <MyWorksSection />
    </div>
  );
}
