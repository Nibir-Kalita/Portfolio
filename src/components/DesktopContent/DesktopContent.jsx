import { useState } from 'react';
import HangingProjects from './HangingProjects';
import './DesktopContent.css';

const DESIGN_WORKS_ITEMS = [
  {
    id: 'treasure-hunt',
    category: 'EVENT POSTER',
    image: '/designs/treasure-hunt.png',
  },
  {
    id: 'silipo-khai',
    category: 'DRAMA POSTER',
    image: '/designs/silipo-khai.png',
  },
  {
    id: 'year-night',
    category: 'EVENT POSTER',
    image: '/designs/year-night.png',
  },
  {
    id: 'independence-day',
    category: 'SOCIAL MEDIA',
    image: '/designs/independence-day.png',
  },
  {
    id: 'cultural-dance',
    category: 'DIGITAL ART',
    image: '/designs/cultural-dance.jpg',
  },
];

export default function DesktopContent({ onOpenWindow }) {
  const [activeDesignIndex, setActiveDesignIndex] = useState(2);
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="desktop-content">
      {/* ---------- Ambient Grainy Blurred Background Soul Elements (Canva Retro Aesthetic) ---------- */}
      <div className="desktop-bg-soul-container" aria-hidden="true">
        {/* Soul Shape 1: Amorphous Morphing Blob (Hero / About Background) */}
        <div className="soul-element soul-element--blob1" />

        {/* Soul Shape 2: Curved Arch Gradient (My Designs Background) */}
        <div className="soul-element soul-element--arch" />

        {/* Soul Shape 3: 8-Point Asterisk Starburst (Skills & Experience Background) */}
        <div className="soul-element soul-element--asterisk">
          <svg viewBox="0 0 200 200" fill="none">
            <path d="M100 0 L120 70 L190 30 L140 90 L200 100 L140 110 L190 170 L120 130 L100 200 L80 130 L10 170 L60 110 L0 100 L60 90 L10 30 L80 70 Z" fill="url(#soul-grad-asterisk)" />
            <defs>
              <linearGradient id="soul-grad-asterisk" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff0055" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#ff668c" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#7b2cbf" stopOpacity="0.75" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Soul Shape 4: Flame Wave Gradient (Contact Section Background) */}
        <div className="soul-element soul-element--flame" />

        {/* Ambient Grain Overlay for Retro Noisy Texture */}
        <div className="soul-grain-overlay" />
      </div>

      {/* ---------- Section 1: Hero (Editorial Modern Brutalist Aesthetic) ---------- */}
      <section className="desktop-section hero-section" id="hero">
        {/* Pastel Aesthetic Sparkle Accents */}
        <div className="pastel-accent pastel-accent--sparkle-hero-l">
          <svg viewBox="0 0 40 40" fill="none">
            <path d="M20 0 C20 11 11 20 0 20 C11 20 20 29 20 40 C20 29 29 20 40 20 C29 20 20 11 20 0 Z" fill="#ff668c" />
          </svg>
        </div>

        <div className="pastel-accent pastel-accent--sparkle-hero-r">
          <svg viewBox="0 0 40 40" fill="none">
            <path d="M20 0 C20 11 11 20 0 20 C11 20 20 29 20 40 C20 29 29 20 40 20 C29 20 20 11 20 0 Z" fill="#ffb3c6" />
          </svg>
        </div>

        {/* Center Graphic Container with Orbs & Orbit Ring */}
        <div className="hero-graphic-container">
          {/* White Sphere (formerly orange ball) */}
          <div className="hero-orb hero-orb--white" />

          {/* Maroon Neon Sphere (formerly blue ball) */}
          <div className="hero-orb hero-orb--maroon" />

          {/* 3D Double Orbit Ring SVG with Star Sparkles (Matching Reference Image) */}
          <div className="hero-orbit-wrapper">
            <svg className="hero-orbit-svg" viewBox="0 0 700 350" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Primary Flat Horizontal Orbit Ellipse */}
              <ellipse
                cx="350"
                cy="175"
                rx="300"
                ry="85"
                stroke="rgba(255, 255, 255, 0.45)"
                strokeWidth="1.5"
              />

              {/* Secondary Intersecting Tilted Orbit Ellipse */}
              <ellipse
                cx="350"
                cy="175"
                rx="290"
                ry="125"
                transform="rotate(-24 350 175)"
                stroke="rgba(255, 255, 255, 0.55)"
                strokeWidth="1.5"
              />

              {/* Sparkle Star 1 (Top Right of Tilted Orbit Ring) */}
              <g transform="translate(585, 65)">
                <path d="M12 0 C12 7 7 12 0 12 C7 12 12 17 12 24 C12 17 17 12 24 12 C17 12 12 7 12 0 Z" fill="#ffffff" />
                <path d="M12 0 C12 7 7 12 0 12 C7 12 12 17 12 24 C12 17 17 12 24 12 C17 12 12 7 12 0 Z" fill="#ff668c" opacity="0.75" filter="blur(3px)" />
              </g>

              {/* Sparkle Star 2 (Bottom Left of Tilted Orbit Ring) */}
              <g transform="translate(115, 260)">
                <path d="M12 0 C12 7 7 12 0 12 C7 12 12 17 12 24 C12 17 17 12 24 12 C17 12 12 7 12 0 Z" fill="#ffffff" />
                <path d="M12 0 C12 7 7 12 0 12 C7 12 12 17 12 24 C12 17 17 12 24 12 C17 12 12 7 12 0 Z" fill="#ffb3c6" opacity="0.75" filter="blur(3px)" />
              </g>
            </svg>
          </div>

          {/* Main Typography Overlay */}
          <div className="hero-text-overlay">
            <span className="hero-text-sub">WELCOME TO MY</span>
            <h1 className="hero-text-main">PORTFOLIO</h1>
          </div>
        </div>

        {/* Bottom Corner Labels */}
        <div className="hero-corner hero-corner--bottom-left">
          <span className="hero-corner__text">© NIBIR VISUAL</span>
        </div>

        <div className="hero-corner hero-corner--bottom-right">
          <a href="#section-about" className="hero-corner__arrow" aria-label="Scroll down">
            <span>───────►</span>
          </a>
        </div>
      </section>

      {/* ---------- Section 2: About Me (Editorial ID Badge + Description) ---------- */}
      <section className="desktop-section about-section" id="section-about">
        <div className="about-container">
          {/* Left Column: Attached 3D ID Badge Card */}
          <div className="about-id-wrapper">
            <div className="about-id-strap">
              <div className="about-id-clip" />
              <div className="about-id-ribbon" />
            </div>

            <div className="about-id-card">
              {/* Card Top Header */}
              <div className="about-id-card__header">
                <span className="about-id-card__chip">PASS ID</span>
                <span className="about-id-card__status">● ONLINE</span>
              </div>

              {/* Photo Box Placeholder for User Photo */}
              <div className="about-id-card__photo-box">
                <div className="about-id-card__photo">
                  <span className="photo-placeholder-icon">👨‍💻</span>
                </div>
                <span className="about-id-card__photo-label">PHOTO SLOT</span>
              </div>

              {/* Member Details */}
              <div className="about-id-card__info">
                <h4 className="about-id-card__name">NIBIR</h4>
                <span className="about-id-card__role">Full Stack Developer & Designer</span>

                <div className="about-id-card__details">
                  <div className="id-detail">
                    <span className="id-detail__key">ID NO:</span>
                    <span className="id-detail__val">#NBR-2026-X</span>
                  </div>
                  <div className="id-detail">
                    <span className="id-detail__key">LOCATION:</span>
                    <span className="id-detail__val">INDIA 📍</span>
                  </div>
                </div>

                {/* Barcode Graphic */}
                <div className="about-id-card__barcode">
                  <span className="barcode-line w-1" />
                  <span className="barcode-line w-3" />
                  <span className="barcode-line w-2" />
                  <span className="barcode-line w-4" />
                  <span className="barcode-line w-1" />
                  <span className="barcode-line w-3" />
                  <span className="barcode-line w-2" />
                  <span className="barcode-line w-4" />
                  <span className="barcode-line w-1" />
                  <span className="barcode-line w-3" />
                  <span className="barcode-code">0 94817 2026 8</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Creative & Big Description Section */}
          <div className="about-desc-wrapper">
            <div className="about-desc__tag">
              <span>ABOUT THE CREATOR</span>
            </div>

            <div className="about-desc__title-wrapper">
              <div className="about-desc__title-bg-glow" />
              <h2 className="about-desc__title">
                <span className="about-desc__title-outline">I'M</span>{" "}
                <span className="about-desc__title-solid">NIBIR</span>
              </h2>
              {/* Pure Red/Maroon Star Graphic */}
              <div className="about-desc__star-sparkle">
                <svg width="76" height="76" viewBox="0 0 60 60" fill="none">
                  <path d="M30 0 L34 24 L58 30 L34 36 L30 60 L26 36 L2 30 L26 24 Z" fill="#ff0055" />
                  <path d="M30 0 L34 24 L58 30 L34 36 L30 60 L26 36 L2 30 L26 24 Z" fill="#ff0055" opacity="0.6" filter="blur(8px)" />
                </svg>
              </div>
            </div>

            <p className="about-desc__text">
              Passionate about building beautiful digital experiences that blend creativity with engineering precision. I love exploring the intersection of modern UI design, systems architecture, and responsive web technology.
            </p>

            <p className="about-desc__text">
              When I'm not coding, you'll find me exploring new web platforms, tinkering with interactive interfaces, or designing side projects that push the limits of modern web browsers.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Section 3: My Designs (Enlarged 3D Perspective Stage, Border Removed) ---------- */}
      <section className="desktop-section design-works-section" id="section-design-works">
        {/* Giant Bold Title */}
        <div className="design-works-header" style={{ position: 'relative' }}>
          <div className="pastel-accent pastel-accent--starburst-designs">
            <svg viewBox="0 0 60 60">
              <path d="M30 0 L33 18 L48 6 L40 23 L58 24 L44 34 L56 46 L38 42 L36 60 L28 44 L16 54 L22 36 L4 38 L18 26 L2 14 L20 18 Z" fill="#ff99b3" opacity="0.85" />
            </svg>
          </div>

          <h2 className="design-works-title">MY DESIGNS</h2>
        </div>

        <div className="design-works-wrapper">
          {/* 5-Card Enlarged 3D Perspective Stage */}
          <div className="design-works-stage">
            {DESIGN_WORKS_ITEMS.map((item, index) => {
              const offset = index - activeDesignIndex;
              let cardPosClass = 'pos-center';
              if (offset <= -2) cardPosClass = 'pos-far-left';
              else if (offset === -1) cardPosClass = 'pos-left';
              else if (offset === 0) cardPosClass = 'pos-center';
              else if (offset === 1) cardPosClass = 'pos-right';
              else if (offset >= 2) cardPosClass = 'pos-far-right';

              return (
                <div
                  key={item.id}
                  className={`design-stage-card ${cardPosClass}`}
                  onClick={() => setActiveDesignIndex(index)}
                >
                  <div className="design-card__bg">
                    <img src={item.image} alt={item.title} className="design-card__img" />
                    <div className="design-card__overlay" />
                    {offset === 0 && <span className="design-card__pill-badge">{item.category}</span>}
                    <div className="design-card__title-label">
                      <span>{item.title}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button className="hero-btn hero-btn--glass" onClick={() => window.open('https://www.behance.net/nibirkalitax', '_blank')} > VIEW MORE </button>

          {/* Bottom Slider Controls */}
          <div className="design-works-controls">
            <button
              className="design-control-btn"
              onClick={() =>
                setActiveDesignIndex((prev) => (prev > 0 ? prev - 1 : DESIGN_WORKS_ITEMS.length - 1))
              }
              aria-label="Previous Design Work"
            >
              <span>←</span>
            </button>
            <button
              className="design-control-btn design-control-btn--active"
              onClick={() =>
                setActiveDesignIndex((prev) => (prev < DESIGN_WORKS_ITEMS.length - 1 ? prev + 1 : 0))
              }
              aria-label="Next Design Work"
            >
              <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* ---------- Section 4: Projects Showcase (Hanging Physics Cards String Layout) ---------- */}


      <section className="desktop-section projects-section" id="section-projects">
        <div className="design-works-header">
          <h2 className="design-works-title">MY PROJECTS</h2>
        </div>

        {/* Hanging Physics Cards Component */}
        <HangingProjects onOpenWindow={onOpenWindow} />
      </section>

      {/* ---------- Section 5: Skills & Experience (Dual Window Layout matching Reference) ---------- */}
      <section className="desktop-section skills-experience-section" id="section-skills">
        <div className="design-works-header">
          <h2 className="design-works-title">SKILLS & EXPERIENCE</h2>
        </div>

        <div className="skills-exp-container">
          {/* Left Window: WWW.MYSKILL.COM Browser Window */}
          <div className="skill-window">
            {/* Window Titlebar */}
            <div className="skill-window__bar">
              <div className="skill-window__dots">
                <span className="dot dot--red" />
                <span className="dot dot--yellow" />
                <span className="dot dot--green" />
              </div>
              <div className="skill-window__url">WWW.MYSKILL.COM</div>
              <span className="skill-window__launch" onClick={() => onOpenWindow?.('skills')}>↗</span>
            </div>

            <div className="skill-window__body">
              {/* Top Label */}
              <div className="skill-window__badge-row">
                <div className="pixel-label">S-KILLS</div>
              </div>

              {/* Circular Tech Stack Icons Grid */}
              <div className="tech-icons-grid">
                <div className="tech-icon-item">
                  <div className="tech-icon-circle bg-react">⚛️</div>
                  <span className="tech-icon-name">React</span>
                </div>
                <div className="tech-icon-item">
                  <div className="tech-icon-circle bg-next">▲</div>
                  <span className="tech-icon-name">Next.js</span>
                </div>
                <div className="tech-icon-item">
                  <div className="tech-icon-circle bg-node">🟢</div>
                  <span className="tech-icon-name">Node.js</span>
                </div>
                <div className="tech-icon-item">
                  <div className="tech-icon-circle bg-python">🐍</div>
                  <span className="tech-icon-name">Python</span>
                </div>
                <div className="tech-icon-item">
                  <div className="tech-icon-circle bg-ts">📘</div>
                  <span className="tech-icon-name">TypeScript</span>
                </div>
                <div className="tech-icon-item">
                  <div className="tech-icon-circle bg-tailwind">🌊</div>
                  <span className="tech-icon-name">Tailwind</span>
                </div>
                <div className="tech-icon-item">
                  <div className="tech-icon-circle bg-postgres">🐘</div>
                  <span className="tech-icon-name">PostgreSQL</span>
                </div>
                <div className="tech-icon-item">
                  <div className="tech-icon-circle bg-docker">🐳</div>
                  <span className="tech-icon-name">Docker</span>
                </div>
              </div>

              {/* Proficiency Progress Bars */}
              <div className="proficiency-list">
                <div className="prof-item">
                  <span className="prof-name">Frontend Engineering</span>
                  <div className="prof-bar-track">
                    <div className="prof-bar-fill w-95" />
                  </div>
                </div>
                <div className="prof-item">
                  <span className="prof-name">Backend & APIs</span>
                  <div className="prof-bar-track">
                    <div className="prof-bar-fill w-88" />
                  </div>
                </div>
                <div className="prof-item">
                  <span className="prof-name">UI / UX Design</span>
                  <div className="prof-bar-track">
                    <div className="prof-bar-fill w-90" />
                  </div>
                </div>
              </div>

              {/* Bottom Languages Badge */}
              <div className="languages-badge-box">
                <div className="pixel-label">LANGUAGES</div>
                <p className="lang-text">Assamese • English • Hindi </p>
              </div>
            </div>
          </div>

          {/* Right Window: EXPERIENCE Window Frame */}
          <div className="experience-window">
            {/* Window Titlebar */}
            <div className="exp-window__bar">
              <div className="exp-window__controls">
                <span className="btn-min">_</span>
                <span className="btn-max">□</span>
                <span className="btn-close" onClick={() => onOpenWindow?.('resume')}>✕</span>
              </div>
            </div>

            <div className="exp-window__body">
              {/* Title Header with Cursor pointing right above the last two letters "CE" */}
              <div className="exp-title-header">
                <h2 className="exp-window__title">EXPERIENCE</h2>

                <div className="pixel-cursor-graphic">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                    <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" fill="#ff0055" stroke="#ffffff" strokeWidth="2" />
                  </svg>
                </div>
              </div>

              {/* Timeline Bullet Points */}
              <div className="exp-timeline">
                <div className="exp-item">
                  <h4 className="exp-item__role">- Full Stack Developer</h4>
                  <p className="exp-item__desc">
                    Building modern web applications, scalable REST/GraphQL backend services, and interactive user interfaces with React, Next.js, and Node.js.
                  </p>
                </div>

                <div className="exp-item">
                  <div className="exp-item__role">- UI & Frontend Craftsman</div>
                  <p className="exp-item__desc">
                    Specializing in hyper-realistic glassmorphism, responsive web layouts, custom animations, and macOS-inspired desktop interfaces.
                  </p>
                </div>

                <div className="exp-item">
                  <div className="exp-item__role">- Systems & Cloud Architecture</div>
                  <p className="exp-item__desc">
                    Tinkering with Linux servers, Docker containers, AI integration APIs, and open source web developer tooling.
                  </p>
                </div>
              </div>

              <button className="exp-btn-action" onClick={() => onOpenWindow?.('resume')}>
                <span>📄 View Full Resume →</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Section 6: Polished Off-White Glass Contact Card ---------- */}
      <section className="desktop-section contact-banner-section" id="section-contact">
        <div className="design-works-header">
          <h2 className="design-works-title">GET IN TOUCH</h2>
        </div>

        <div className="contact-glass-card">
          {/* macOS Title Bar with Traffic Lights */}
          <div className="contact-glass-card__bar">
            <div className="contact-glass-card__dots">
              <span className="light light--red" />
              <span className="light light--yellow" />
              <span className="light light--green" />
            </div>
            <span className="contact-glass-card__title">contact@nibir.dev</span>
          </div>

          {/* Card Main Body */}
          <div className="contact-glass-card__body">
            {/* Left Column: Direct Contact Info (No duplicate header) */}
            <div className="contact-info-col">
              <div className="contact-badge-pill">
                <span>DIRECT INQUIRIES</span>
              </div>

              <div className="contact-info-block">
                <span className="info-label">Email:</span>
                <a href="mailto:hello@nibir.dev" className="info-value">raag8757@gmail.com</a>
              </div>


              {/* High Contrast Dark Circle Social Icons */}
              <div className="contact-social-block">
                <span className="info-label">FOLLOW US:</span>
                <div className="contact-social-icons">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a href="mailto:raag8757@gmail.com" className="social-icon-btn" aria-label="Email">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </a>
                  <a href="#hero" className="social-icon-btn" aria-label="Terminal">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="4 17 10 11 4 5" />
                      <line x1="12" x2="20" y1="19" y2="19" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Form */}
            <div className="contact-form-col">
              <form className="contact-glass-form" onSubmit={handleContactSubmit}>
                <div className="contact-form-row">
                  <div className="contact-input-group">
                    <label htmlFor="card-name">Your Name</label>
                    <input id="card-name" type="text" placeholder="Your full name" required />
                  </div>

                  <div className="contact-input-group">
                    <label htmlFor="card-email">Email address</label>
                    <input id="card-email" type="email" placeholder="Your email address" required />
                  </div>
                </div>

                <div className="contact-input-group">
                  <label htmlFor="card-message">Message</label>
                  <textarea id="card-message" rows={4} placeholder="Write something..." required />
                </div>

                <button type="submit" className={`contact-glass-submit ${submitted ? 'contact-glass-submit--sent' : ''}`}>
                  <span>{submitted ? '✓ Message Sent!' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        <footer className="desktop-footer">
          <p>© {new Date().getFullYear()} Nibir</p>
        </footer>
      </section>
    </main>
  );
}
