import { useState } from "react";
import logo1 from "../../assets/logos/logo1.png";
import logo2 from "../../assets/logos/logo2.png";
import logo3 from "../../assets/logos/logo3.png";
const projects = [
  {
    id: 1,
    name: "SkinWise",
    logo: logo1,
    link : "https://riddevs.github.io/SKINWISE/",
    description:
      "An AI-powered skin disease detection app called Skinwise was created to provide prompt, accurate diagnosis. Get immediate insights based on medical data and machine learning by uploading an image, enabling users to manage their skin health more effectively and detect problems early.",
    roles: ["Head UI/UX Designer", "Project Head"],
  },
  {
    id: 2,
    name: "HireWise",
    logo: logo2,
    link : "https://riddevs.github.io/HireWise/homenew.html",
    description:
      "A clever resume analysis platform, to assess applicants.It ensures hiring accuracy by comparing resume skills with real-time assessments.created to assist recruiters in making data-driven decisions more quickly.",
    roles : ["Head UI/UX Designer", "Project Lead"],
    },
  {
    id: 3,
    name: "Carbonlens",
    logo: logo3,
    link : "https://www.carbonlens.space/",
    description:
      "A smart platform that tracks, analyzes, and visualizes carbon emissions to help individuals and organizations make sustainable decisions. It simplifies climate data into actionable insights for building a greener, low-carbon future.",
    roles: ["UI/UX Designer", "Content Director", "System Architecture Designer"],
  },
];

function ArrowButton({ direction, onClick }: { direction: "left" | "right"; onClick: () => void }) {
  const arrowSrc =
    direction === "left"
      ? "https://api.builder.io/api/v1/image/assets/TEMP/be6de5e60ffc57a619a44234b698e8f31c14328e?width=100"
      : "https://api.builder.io/api/v1/image/assets/TEMP/c174a5c28314483e21fbf4c2c800ab359e2bd139?width=100";

  return (
    <button
      onClick={onClick}
      aria-label={`${direction} arrow`}
      className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] rounded-full flex items-center justify-center flex-shrink-0 hover:opacity-80 transition-opacity duration-200"
      style={{
        background:
          "linear-gradient(209deg, rgba(217,217,217,0.50) 10.14%, rgba(115,115,115,0.50) 87.05%)",
        border: "1px solid rgba(255,255,255,0.11)",
        boxShadow: "0 4px 12.2px 0 rgba(255,255,255,0.25) inset",
      }}
    >
      <img src={arrowSrc} alt={direction} className="w-6 h-6 md:w-7 md:h-7 lg:w-[50px] lg:h-[50px]" />
    </button>
  );
}

export default function ProjectsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + projects.length) % projects.length);
  const next = () => setCurrent((c) => (c + 1) % projects.length);

  const project = projects[current];

  return (
    <section id="projects" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background blob */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "#BED92D", filter: "blur(180px)", opacity: 0.25 }}
      />

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 md:px-10">
        {/* Section Heading */}
        <h2 className="font-display text-[48px] md:text-[56px] lg:text-[64px] font-medium text-white text-center mb-10 md:mb-16">
          PROJECTS
        </h2>

        {/* Carousel row */}
        <div className="flex items-center justify-center gap-4 md:gap-8 lg:gap-12">
          {/* Left arrow */}
          <ArrowButton direction="left" onClick={prev} />

          {/* Card */}
          <div
            className="glass-card relative w-full max-w-[520px] md:max-w-[600px] lg:max-w-[650px] px-6 md:px-10 py-8 md:py-12 transition-all duration-300"
            style={{ minHeight: "380px" }}
          >
            {/* Project header */}
            <div className="flex items-center gap-4 mb-6">
              {project.logo ? (
                <img
                  src={project.logo}
                  alt={project.name}
                    className="w-[100px] h-[100px] object-contain transition duration-1000 hover:scale-500"
                  style={{
                    transform: "rotate(0deg)",
                  }}
                />
              ) : (
                <div className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-white/60 text-2xl">✦</span>
                </div>
              )}
              
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body font-semibold text-[28px] md:text-[36px] lg:text-[40px] text-[#F1F1F1] hover:text-[#BED92D] transition"
>
                {project.name}
              </a>
              
            </div>

            {/* Description */}
            <p className="font-body font-semibold text-[15px] md:text-[17px] lg:text-[18px] text-[#F1F1F1] leading-relaxed mb-8">
              {project.description}
            </p>

            {/* Role badge */}
            <div className="flex flex-wrap items-center gap-3 mt-auto">
              <div
                className="px-4 py-1 rounded-full"
                style={{ background: "#D9D9D9" }}
              >
                <span className="font-body font-semibold text-[14px] text-black">
                  My role :
                </span>
              </div>
              {project.roles.map((role) => (
                <span
                  key={role}
                  className="font-body font-semibold text-[15px] md:text-[17px] lg:text-[18px] text-[#F1F1F1]"
                  style={{ textShadow: "0 0 18px rgba(255,255,255,0.7)" }}
                >
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* Right arrow */}
          <ArrowButton direction="right" onClick={next} />
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 h-2 bg-[#BED92D]"
                  : "w-2 h-2 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
