import { useRef } from "react";

const works = [
  {
    id: 1,
    src: "https://api.builder.io/api/v1/image/assets/TEMP/fc53a02f56fda1b92735e92b45948d5fbf91d34c?width=5496",
    alt: "Antarikhya T-shirt Design",
    crop: "0% 0%",
    label: "Antarikhya Merch",
  },
  {
    id: 2,
    src: "https://api.builder.io/api/v1/image/assets/TEMP/fc53a02f56fda1b92735e92b45948d5fbf91d34c?width=5496",
    alt: "Couple Portrait Design",
    crop: "22% 0%",
    label: "Portrait Design",
  },
  {
    id: 3,
    src: "https://api.builder.io/api/v1/image/assets/TEMP/fc53a02f56fda1b92735e92b45948d5fbf91d34c?width=5496",
    alt: "Ozone is Life - Save the Ozone",
    crop: "44% 0%",
    label: "Ozone Poster",
  },
  {
    id: 4,
    src: "https://api.builder.io/api/v1/image/assets/TEMP/d6631eedf3f9746ce9717a2ea2d0591aa8f3e5da?width=193",
    alt: "SkinWise App",
    crop: "0% 0%",
    label: "SkinWise App",
  },
];

// Individual work cards with unique images
const workCards = [
  {
    id: 1,
    label: "Antarikhya Merch",
    bg: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    icon: "👕",
    description: "T-shirt & Apparel Design",
  },
  {
    id: 2,
    label: "Portrait Design",
    bg: "linear-gradient(135deg, #ff6b9d 0%, #c44de8 50%, #9b5de5 100%)",
    icon: "🎨",
    description: "Digital Portrait Illustration",
  },
  {
    id: 3,
    label: "Ozone Poster",
    bg: "linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 30%, #2d4a1e 100%)",
    icon: "🌍",
    description: "Environmental Awareness Campaign",
  },
  {
    id: 4,
    label: "SkinWise App",
    bg: "linear-gradient(135deg, #0a192f 0%, #112240 50%, #1a3a5c 100%)",
    icon: "🔬",
    description: "UI/UX Design & App Branding",
  },
  {
    id: 5,
    label: "Brand Identity",
    bg: "linear-gradient(135deg, #1a0533 0%, #2d1b69 50%, #11998e 100%)",
    icon: "✦",
    description: "Logo & Visual Identity System",
  },
  {
    id: 6,
    label: "Motion Graphics",
    bg: "linear-gradient(135deg, #232526 0%, #414345 50%, #232526 100%)",
    icon: "🎬",
    description: "Animated Visual Content",
  },
];

export default function MyWorksSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="works" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background blob bottom-left */}
      <div
        className="absolute bottom-0 left-[-100px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "#BED92D", filter: "blur(200px)", opacity: 0.35 }}
      />

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 md:px-10">
        {/* Section Heading */}
        <h2 className="font-display text-[48px] md:text-[56px] lg:text-[64px] font-medium text-white text-center mb-10 md:mb-16">
          MY WORKS
        </h2>

        {/* Scrollable gallery row */}
        <div className="relative">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #070707, transparent)" }} />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #070707, transparent)" }} />

          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar pb-4 px-4"
          >
            {workCards.map((work) => (
              <div
                key={work.id}
                className="flex-shrink-0 w-[220px] h-[220px] md:w-[260px] md:h-[260px] lg:w-[300px] lg:h-[300px] rounded-2xl overflow-hidden relative group cursor-pointer"
                style={{ background: work.bg }}
              >
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-5xl md:text-6xl mb-3">{work.icon}</span>
                  <p className="font-body font-semibold text-white text-[14px] md:text-[16px]">
                    {work.label}
                  </p>
                  <p className="font-body text-white/60 text-[11px] md:text-[12px] mt-1">
                    {work.description}
                  </p>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#BED92D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Border */}
                <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-[#BED92D]/40 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Marquee strip - design works preview */}
        <div className="mt-8 overflow-hidden">
          <div className="flex animate-marquee gap-6 w-max">
            {/* First set */}
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/fc53a02f56fda1b92735e92b45948d5fbf91d34c?width=5496"
              alt="Design works"
              className="h-[160px] md:h-[200px] lg:h-[240px] w-auto rounded-xl object-cover flex-shrink-0"
            />
            {/* Second set (duplicate for seamless loop) */}
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/a0aec7389b59c267fe9e6cb147a75e605ac97963?width=5496"
              alt="Design works 2"
              className="h-[160px] md:h-[200px] lg:h-[240px] w-auto rounded-xl object-cover flex-shrink-0"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/fc53a02f56fda1b92735e92b45948d5fbf91d34c?width=5496"
              alt="Design works"
              className="h-[160px] md:h-[200px] lg:h-[240px] w-auto rounded-xl object-cover flex-shrink-0"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/a0aec7389b59c267fe9e6cb147a75e605ac97963?width=5496"
              alt="Design works 2"
              className="h-[160px] md:h-[200px] lg:h-[240px] w-auto rounded-xl object-cover flex-shrink-0"
            />
          </div>
        </div>

        {/* View More button */}
        <div className="flex justify-center mt-10 md:mt-14">
          <button className="glass-button px-10 py-3 font-body font-semibold text-white text-[18px] md:text-[20px] hover:bg-white/10 transition-all duration-200">
            VIEW MORE
          </button>
        </div>
      </div>
    </section>
  );
}
