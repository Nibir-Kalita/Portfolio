export default function HeroSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-start overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute top-[-80px] right-[-100px] w-[500px] h-[500px] rounded-full opacity-100"
        style={{ background: "#BED92D", filter: "blur(180px)" }} />
      <div className="absolute top-[300px] left-[-150px] w-[500px] h-[500px] rounded-full opacity-100"
        style={{ background: "#BED92D", filter: "blur(200px)" }} />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

          {/* Left: iMac Monitor */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <div className="relative -top-8 w-full max-w-[460px] md:max-w-[540px] lg:max-w-[600px] animate-float-up">
              {/* Monitor Body */}
              <div className="relative">
                {/* Screen bezel */}
                <div className="rounded-2xl overflow-hidden"
                  style={{
                    background: "linear-gradient(145deg, #000000, #7b7b7b)",
                    padding: "14px 14px 14px 14px",
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
                    <p className="font-display text-[28px] md:text-[50px] lg:text-[70px] font-medium text-black text-center mb-2">
                      Hey !
                    </p>
                    <p className="font-display text-[14px] md:text-[38px] lg:text-[30px] font-medium text-black text-center px-6">
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

          {/* Right: Shield Layout */}
<div className="flex-1 flex justify-end relative pr-12">

  <div className="relative w-full max-w-[600px] h-[720px]">

    {/* Shield Container */}
    <div className="absolute top-0 left-12 w-full h-[600px] rounded-b-[440px] border border-white/30 overflow-hidden">

      {/* Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, rgba(190,217,45,0.55) 0%, rgba(7,7,7,0.98) 75%)",
        }}
      />

      {/* IMAGE (placed FIRST so text can layer above cleanly) */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/d960ceed18df31e725da43aa05c5ea3c9d8aa90a?width=794"
        alt="Nibir Kalita"
        className="absolute bottom-[-30px] left-1/2 -translate-x-[42%] w-[80%] object-contain z-30"
      />

      {/* TEXT */}
      <div className="relative z-20 text-center mt-12 px-1">
        <h1 className="font-display font-medium leading-[0.82]">
          <span className="block text-white text-[72px] md:text-[95px] lg:text-[110px]">
            Developer
          </span>
          <span
            className="block text-[72px] md:text-[95px] lg:text-[110px]"
            style={{
              WebkitTextStroke: "2px white",
              color: "transparent",
            }}
          >
            &amp; Designer
          </span>
        </h1>

        <div className="flex justify-center gap-40 mt-16 text-white text-[16px] font-nav">
          <p>Based in Assam, India</p>
          <p>20 , CSE Undergrad</p>
        </div>
      </div>
    </div>

  </div>
</div>
        </div>
      </div>
    </section>
  );
}
