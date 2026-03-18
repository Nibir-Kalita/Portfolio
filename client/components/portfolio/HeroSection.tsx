import { useState } from "react";

export default function HeroSection() {
  const [screen, setScreen] = useState<"home" | "about" | "projects">("home");

  return (
    <section id="about" className="relative pt-[120px] pb-[100px]">

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

          {/* ================= LEFT: MONITOR ================= */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <div className="relative -top-8 w-full max-w-[460px] md:max-w-[540px] lg:max-w-[600px] animate-float-up">

              <div className="relative">

                {/* Monitor Body */}
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: "linear-gradient(145deg, #8f8f8f, #474747)",
                    padding: "14px",
                    boxShadow:
                      "0 20px 60px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.05)",
                  }}
                >

                  {/* Camera */}
                  <div className="flex justify-center mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#3a3a3a]" />
                  </div>

                  {/* ================= SCREEN ================= */}
                  <div
                    className="rounded-lg overflow-hidden flex flex-col"
                    style={{
                      background: "#0f0f0f",
                      aspectRatio: "4/3",
                      minHeight: "260px",
                    }}
                  >

                    {/* Top Bar */}
                    <div className="flex items-center justify-between px-3 py-2 bg-[#1a1a1a] border-b border-white/10">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>

                      <p className="text-white text-xs opacity-70">
                        portfolio.app
                      </p>

                      <p className="text-white text-xs opacity-70">
                        {new Date().toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col items-center justify-center px-6 text-white transition-all duration-500">

                      {screen === "home" && (
                        <>
                          <h2 className="text-2xl md:text-3xl font-display mb-2">
                            Hey 👋
                          </h2>
                          <p className="text-sm md:text-base opacity-70 text-center">
                            Welcome to my digital workspace
                          </p>

                          <button
                            onClick={() => setScreen("about")}
                            className="mt-6 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition"
                          >
                            Enter →
                          </button>
                        </>
                      )}

                      {screen === "about" && (
                        <>
                          <h2 className="text-xl md:text-2xl font-display mb-3">
                            About Me
                          </h2>
                          <p className="text-sm md:text-base opacity-70 text-center leading-relaxed">
                            I’m a developer & designer from Assam who loves
                            building clean, aesthetic and functional digital
                            experiences.
                          </p>

                          <div className="flex gap-4 mt-6">
                            <button
                              onClick={() => setScreen("projects")}
                              className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition"
                            >
                              Projects
                            </button>

                            <button
                              onClick={() => setScreen("home")}
                              className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition"
                            >
                              Back
                            </button>
                          </div>
                        </>
                      )}

                      {screen === "projects" && (
                        <>
                          <h2 className="text-xl md:text-2xl font-display mb-4">
                            Projects
                          </h2>

                          <div className="space-y-2 text-center text-sm opacity-80">
                            <p>🚀 CarbonLens</p>
                            <p>🎨 Design Portfolio</p>
                            <p>📱 SkinWise App</p>
                          </div>

                          <button
                            onClick={() => setScreen("home")}
                            className="mt-6 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition"
                          >
                            Home
                          </button>
                        </>
                      )}

                    </div>
                  </div>
                </div>

                {/* Stand */}
                <div className="flex justify-center">
                  <div
                    className="w-16 h-10"
                    style={{
                      background:
                        "linear-gradient(to bottom, #2a2a2a, #1e1e1e)",
                      clipPath:
                        "polygon(25% 0%, 75% 0%, 85% 100%, 15% 100%)",
                    }}
                  />
                </div>

                {/* Base */}
                <div className="flex justify-center">
                  <div
                    className="h-3 w-40 rounded-full"
                    style={{
                      background:
                        "linear-gradient(to right, #1a1a1a, #2e2e2e, #1a1a1a)",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
                    }}
                  />
                </div>

              </div>
            </div>
          </div>

          {/* ================= RIGHT: SHIELD ================= */}
          <div className="flex-1 flex justify-end relative pr-12">
            <div className="relative w-full max-w-[600px] h-[620px]">

              <div className="absolute top-[-80px] right-[-50px] w-[100%] h-[650px] rounded-b-[440px] border border-white/30 overflow-hidden">

                {/* Gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 30%, rgba(190,217,45,0.55) 0%, rgba(7,7,7,0.98) 75%)",
                  }}
                />

                {/* Image */}
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/d960ceed18df31e725da43aa05c5ea3c9d8aa90a?width=794"
                  alt="Nibir Kalita"
                  className="absolute bottom-[-10px] left-1/2 -translate-x-[40%] w-[80%] object-contain z-30"
                />

                {/* Text */}
                <div className="relative z-20 text-center mt-12 px-1">
                  <h1 className="font-display font-medium leading-[0.92]">
                    <span className="block text-white text-[72px] md:text-[95px] lg:text-[100px]">
                      Developer
                    </span>
                    <span
                      className="block text-[72px] md:text-[95px] lg:text-[100px]"
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