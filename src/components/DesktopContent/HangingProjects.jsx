import { useState, useRef, useEffect } from 'react';
import './HangingProjects.css';

const PROJECTS_DATA = [
  {
    id: 'mac-portfolio',
    title: 'macOS Desktop Portfolio',
    category: 'React • Glassmorphic UI',
    desc: 'Interactive desktop portfolio with draggable glass windows, spring-dock, and custom icons.',
    emoji: '🖥️',
    bgGradient: 'linear-gradient(135deg, #1e1e2e 0%, #800020 100%)',
    tags: ['React', 'CSS3', 'Vite'],
    windowId: 'projects',
  },
  {
    id: 'ai-assistant',
    title: 'AI Chat Assistant',
    category: 'Python • FastAPI • LLM',
    desc: 'Contextual conversational AI agent with real-time streaming and multimodal understanding.',
    emoji: '🤖',
    bgGradient: 'linear-gradient(135deg, #a00032 0%, #ff0055 100%)',
    tags: ['Python', 'FastAPI', 'LLM'],
    windowId: 'projects',
  },
  {
    id: 'ecommerce-glass',
    title: 'Full Stack E-Commerce',
    category: 'Next.js • PostgreSQL',
    desc: 'Scalable online store with real-time inventory management, checkout, and sales analytics.',
    emoji: '🛒',
    bgGradient: 'linear-gradient(135deg, #111827 0%, #374151 100%)',
    tags: ['Next.js', 'PostgreSQL', 'Stripe'],
    windowId: 'projects',
  },
  {
    id: 'fintech-dashboard',
    title: 'Hyper-Dashboard UI',
    category: 'React • Recharts • Financials',
    desc: 'Real-time analytics platform monitoring crypto portfolios and market indicators.',
    emoji: '📈',
    bgGradient: 'linear-gradient(135deg, #1c1917 0%, #78350f 100%)',
    tags: ['React', 'TypeScript', 'D3.js'],
    windowId: 'projects',
  },
  {
    id: 'devops-cli',
    title: 'Terminal CLI Suite',
    category: 'Node.js • System Admin',
    desc: 'Custom web terminal emulator with neofetch, file navigation, and system diagnostics.',
    emoji: '💻',
    bgGradient: 'linear-gradient(135deg, #09090b 0%, #27272a 100%)',
    tags: ['Node.js', 'CLI', 'WebAssembly'],
    windowId: 'terminal',
  },
  {
    id: 'raytracer-3d',
    title: 'WebGL 3D Engine',
    category: 'Three.js • Shader Code',
    desc: 'Real-time 3D raytracing shader experiment featuring glass refractions and soft shadows.',
    emoji: '✨',
    bgGradient: 'linear-gradient(135deg, #3b0764 0%, #7e22ce 100%)',
    tags: ['Three.js', 'GLSL', 'WebGL'],
    windowId: 'projects',
  },
];

export default function HangingProjects({ onOpenWindow }) {
  const stageRef = useRef(null);
  const scrollXRef = useRef(0);
  const velocityRef = useRef(0);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const animFrameRef = useRef(null);

  const [, setRerender] = useState(0);

  const cardWidth = 260;
  const cardGap = 40;
  const step = cardWidth + cardGap;
  const minScroll = 0;
  const maxScroll = Math.max(0, (PROJECTS_DATA.length - 2) * step);

  // 60FPS Physics Engine Loop with Inertia & Wind Sway
  useEffect(() => {
    let startTime = performance.now();

    const loop = (now) => {
      const timeElapsed = now - startTime;

      if (!isDraggingRef.current) {
        // Friction decay for velocity
        velocityRef.current *= 0.92;

        // Apply velocity to scroll position
        scrollXRef.current += velocityRef.current;

        // Boundary spring bounce
        if (scrollXRef.current < minScroll) {
          scrollXRef.current += (minScroll - scrollXRef.current) * 0.15;
          velocityRef.current *= 0.5;
        } else if (scrollXRef.current > maxScroll) {
          scrollXRef.current += (maxScroll - scrollXRef.current) * 0.15;
          velocityRef.current *= 0.5;
        }
      }

      // Update DOM transform directly for max performance
      if (stageRef.current) {
        const cards = stageRef.current.querySelectorAll('.hanging-card-wrapper');
        const containerWidth = stageRef.current.offsetWidth || 1000;
        const centerX = containerWidth / 2;

        cards.forEach((card, i) => {
          const cardX = i * step - scrollXRef.current + 80;
          const distFromCenter = Math.abs(cardX + cardWidth / 2 - centerX);
          const normalizedDist = Math.min(1, distFromCenter / (containerWidth / 1.5));

          // Inverted arch string curve (droop in center)
          const curveY = Math.sin(normalizedDist * Math.PI * 0.5) * -25 + 15;

          // Wind Sway Physics equation (velocity momentum + ambient pendulum oscillation)
          const windSway =
            velocityRef.current * 0.45 +
            Math.sin(timeElapsed * 0.0025 + i * 0.85) * (Math.min(Math.abs(velocityRef.current) * 0.8 + 2.5, 12));

          card.style.transform = `translate3d(${cardX}px, ${curveY}px, 0) rotate(${windSway}deg)`;
        });
      }

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [maxScroll, step]);

  // Mouse & Touch Drag Handlers
  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
    lastXRef.current = e.clientX;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    const now = performance.now();
    const dt = Math.max(1, now - lastTimeRef.current);
    const deltaX = e.clientX - lastXRef.current;

    scrollXRef.current -= deltaX;
    velocityRef.current = (-deltaX / dt) * 14;

    lastXRef.current = e.clientX;
    lastTimeRef.current = now;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleWheel = (e) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.preventDefault();
      scrollXRef.current += e.deltaX * 0.8;
      velocityRef.current = e.deltaX * 0.25;
    }
  };

  return (
    <div className="hanging-projects-container">
      {/* Curved Hanging String Path */}
      <div className="hanging-string-wrapper">
        <svg className="hanging-string-svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M 0,35 Q 600,115 1200,35"
            fill="none"
            stroke="rgba(255, 0, 85, 0.45)"
            strokeWidth="2.5"
            strokeDasharray="6 3"
          />
          <path
            d="M 0,35 Q 600,115 1200,35"
            fill="none"
            stroke="rgba(255, 255, 255, 0.25)"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Drag Stage Area */}
      <div
        className="hanging-projects-stage"
        ref={stageRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
      >
        {PROJECTS_DATA.map((project) => (
          <div key={project.id} className="hanging-card-wrapper">
            {/* Metallic / Neon Peg Clip Hanging from String */}
            <div className="hanging-clip">
              <div className="hanging-clip__head" />
              <div className="hanging-clip__body" />
            </div>

            {/* Glass Polaroid Card */}
            <div
              className="hanging-card"
              onClick={() => onOpenWindow?.(project.windowId)}
            >
              <div className="hanging-card__header" style={{ background: project.bgGradient }}>
                <span className="hanging-card__emoji">{project.emoji}</span>
              </div>

              <div className="hanging-card__body">
                <span className="hanging-card__category">{project.category}</span>
                <h3 className="hanging-card__title">{project.title}</h3>
                <p className="hanging-card__desc">{project.desc}</p>

                <div className="hanging-card__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="hanging-tag">{tag}</span>
                  ))}
                </div>

                <button className="hanging-card__btn">
                  <span>Open Window →</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Helper Drag Instruction */}
      <div className="hanging-drag-hint">
        <span>↔ Drag or Scroll horizontally to explore projects with wind physics</span>
      </div>
    </div>
  );
}
