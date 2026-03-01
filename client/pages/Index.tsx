import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import MyWorksSection from "@/components/portfolio/MyWorksSection";

export default function Index() {
  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 75% 20%, rgba(190,217,45,0.25), transparent 40%),
          radial-gradient(circle at 20% 80%, rgba(190,217,45,0.20), transparent 45%),
          #070707
        `
      }}
    >
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <MyWorksSection />
    </div>
  );
}