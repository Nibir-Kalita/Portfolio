export default function HeroSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center pt-[85px] overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute top-[-80px] right-[-100px] w-[500px] h-[500px] rounded-full opacity-60"
        style={{ background: "#BED92D", filter: "blur(180px)" }} />
      <div className="absolute top-[300px] left-[-150px] w-[500px] h-[500px] rounded-full opacity-50"
        style={{ background: "#BED92D", filter: "blur(200px)" }} />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

          {/* Left: iMac Monitor */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[420px] md:max-w-[500px] lg:max-w-[460px] animate-float-up">
              {/* Monitor Body */}
              <div className="relative">
                {/* Screen bezel */}
                <div className="rounded-2xl overflow-hidden"
                  style={{
                    background: "linear-gradient(145deg, #2a2a2a, #1a1a1a)",
                    padding: "14px 14px 0 14px",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.05)",
                  }}>
                  {/* Camera dot */}
                  <div className="flex justify-center mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#3a3a3a]" />
                  </div>
                  {/* Screen */}
                  <div
                    className="rounded-lg overflow-hidden relative flex flex-col items-center justify-center"
                    style={{
                      background: "linear-gradient(180deg, #D9D9D9 0%, #A9B17C 50%, #C4CE33 100%)",
                      aspectRatio: "4/3",
                      minHeight: "260px",
                    }}
                  >
                    <p className="font-display text-[28px] md:text-[36px] lg:text-[40px] font-medium text-black text-center mb-2">
                      Hey !
                    </p>
                    <p className="font-display text-[14px] md:text-[18px] lg:text-[20px] font-medium text-black text-center px-6">
                      Welcome to my portfolio
                    </p>
                    {/* Arrow button */}
                    <div className="mt-6 w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-black flex items-center justify-center cursor-pointer hover:bg-black/10 transition-colors">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Monitor stand neck */}
                <div className="flex justify-center">
                  <div
                    className="w-16 h-10"
                    style={{
                      background: "linear-gradient(to bottom, #2a2a2a, #1e1e1e)",
                      clipPath: "polygon(25% 0%, 75% 0%, 85% 100%, 15% 100%)",
                    }}
                  />
                </div>
                {/* Monitor base */}
                <div className="flex justify-center">
                  <div
                    className="h-3 w-40 rounded-full"
                    style={{
                      background: "linear-gradient(to right, #1a1a1a, #2e2e2e, #1a1a1a)",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Profile + Title */}
          <div className="flex-1 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-0">
            {/* Title text */}
            <div className="flex-1 order-2 lg:order-1 text-center lg:text-left">
              <h1 className="font-display font-medium leading-tight">
                <span className="block text-white text-[52px] md:text-[72px] lg:text-[80px] xl:text-[96px]">
                  Developer
                </span>
                <span
                  className="block text-[52px] md:text-[72px] lg:text-[80px] xl:text-[96px]"
                  style={{
                    WebkitTextStroke: "2px white",
                    color: "transparent",
                  }}
                >
                  &amp; Designer
                </span>
              </h1>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 mt-4 lg:mt-6 justify-center lg:justify-start">
                <p className="font-nav font-medium text-white text-[15px] md:text-[16px]">
                  Based in Assam, India
                </p>
                <p className="font-nav font-medium text-white text-[15px] md:text-[16px]">
                  19 , CSE Undergrad
                </p>
              </div>
            </div>

            {/* Profile photo */}
            <div className="order-1 lg:order-2 flex-shrink-0">
              <div
                className="relative rounded-full overflow-hidden border border-white/40"
                style={{
                  width: "clamp(200px, 28vw, 340px)",
                  height: "clamp(200px, 28vw, 340px)",
                  boxShadow: "0 4px 74px 0 rgba(255,255,255,0.10)",
                  background: "rgba(0,0,0,0.2)",
                }}
              >
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/d960ceed18df31e725da43aa05c5ea3c9d8aa90a?width=794"
                  alt="Nibir Kalita"
                  className="w-full h-full object-cover object-top"
                  style={{ objectPosition: "50% 10%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
