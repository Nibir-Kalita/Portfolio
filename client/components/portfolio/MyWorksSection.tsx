export default function MyWorksSection() {
  // Automatically import all images from works folder
  const images = Object.values(
    import.meta.glob("../../assets/works/*.{png,jpg,jpeg,webp}", {
      eager: true,
      import: "default",
    })
  ) as string[];

  return (
    <section
      id="works"
      className="relative py-16 md:py-24 overflow-hidden bg-[#070707]"
    >
      {/* Background Glow */}
      <div
        className="absolute bottom-0 left-[-100px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "#BED92D",
          filter: "blur(200px)",
          opacity: 0.35,
        }}
      />

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 md:px-10">
        {/* Heading */}
        <h2 className="font-display text-[48px] md:text-[56px] lg:text-[64px] font-medium text-white text-center mb-14">
          MY WORKS
        </h2>

        {/* Marquee */}
        <div className="overflow-hidden w-full">
          <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] w-max">
            {[...images, ...images].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Design ${index + 1}`}
                className="h-[180px] md:h-[220px] lg:h-[260px] rounded-xl object-cover flex-shrink-0 hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-14">
          <a
            href="https://www.behance.net/nibirkalitax"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button px-10 py-3 font-body font-semibold text-white text-[18px] md:text-[20px] hover:bg-white/10 transition-all duration-200 inline-block text-center"
          >
          VIEW MORE
          </a>
        </div>
      </div>
    </section>
  );
}