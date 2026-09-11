import { useRef, useEffect, useCallback } from 'react';
import './DynamicBackground.css';

/* ---------- Configuration ---------- */
const CONFIG = {
  particleCount: 65,
  connectionDistance: 160,
  mouseInfluenceRadius: 200,
  mouseRepelStrength: 0.06,
  baseDrift: 0.25,
  particleMinSize: 1.2,
  particleMaxSize: 3,
  glowOrbCount: 4,
};

/* ---------- Color Palette (matching site theme) ---------- */
const COLORS = [
  { r: 255, g: 0, b: 85 },      // #ff0055 — maroon-pink
  { r: 255, g: 102, b: 140 },    // #ff668c — soft pink
  { r: 123, g: 44, b: 191 },     // #7b2cbf — purple
  { r: 129, g: 140, b: 248 },    // #818cf8 — indigo
  { r: 96, g: 165, b: 250 },     // #60a5fa — blue
  { r: 255, g: 179, b: 198 },    // #ffb3c6 — blush
];

function randomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

/* ---------- Particle Class ---------- */
class Particle {
  constructor(w, h) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    const color = randomColor();
    this.r = color.r;
    this.g = color.g;
    this.b = color.b;
    this.size =
      CONFIG.particleMinSize +
      Math.random() * (CONFIG.particleMaxSize - CONFIG.particleMinSize);
    this.baseAlpha = 0.25 + Math.random() * 0.45;
    this.alpha = this.baseAlpha;
    this.vx = (Math.random() - 0.5) * CONFIG.baseDrift;
    this.vy = (Math.random() - 0.5) * CONFIG.baseDrift;
    // Subtle pulse
    this.pulsePhase = Math.random() * Math.PI * 2;
    this.pulseSpeed = 0.008 + Math.random() * 0.015;
    this.w = w;
    this.h = h;
  }

  update(mouseX, mouseY) {
    // Pulse alpha
    this.pulsePhase += this.pulseSpeed;
    this.alpha =
      this.baseAlpha + Math.sin(this.pulsePhase) * 0.15;

    // Mouse repulsion
    if (mouseX !== null && mouseY !== null) {
      const dx = this.x - mouseX;
      const dy = this.y - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < CONFIG.mouseInfluenceRadius && dist > 0) {
        const force =
          (1 - dist / CONFIG.mouseInfluenceRadius) *
          CONFIG.mouseRepelStrength;
        this.vx += (dx / dist) * force;
        this.vy += (dy / dist) * force;
      }
    }

    // Dampen velocity
    this.vx *= 0.988;
    this.vy *= 0.988;

    this.x += this.vx;
    this.y += this.vy;

    // Wrap edges
    if (this.x < -20) this.x = this.w + 20;
    if (this.x > this.w + 20) this.x = -20;
    if (this.y < -20) this.y = this.h + 20;
    if (this.y > this.h + 20) this.y = -20;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.r},${this.g},${this.b},${this.alpha.toFixed(2)})`;
    ctx.fill();

    // Tiny glow
    if (this.size > 2) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.r},${this.g},${this.b},${(this.alpha * 0.08).toFixed(3)})`;
      ctx.fill();
    }
  }
}

/* ---------- Glow Orb Class ---------- */
class GlowOrb {
  constructor(w, h) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    const color = randomColor();
    this.r = color.r;
    this.g = color.g;
    this.b = color.b;
    this.radius = 120 + Math.random() * 200;
    this.baseAlpha = 0.03 + Math.random() * 0.04;
    this.alpha = this.baseAlpha;
    this.vx = (Math.random() - 0.5) * 0.15;
    this.vy = (Math.random() - 0.5) * 0.15;
    this.pulsePhase = Math.random() * Math.PI * 2;
    this.pulseSpeed = 0.003 + Math.random() * 0.006;
    this.w = w;
    this.h = h;
  }

  update(mouseX, mouseY) {
    this.pulsePhase += this.pulseSpeed;
    this.alpha =
      this.baseAlpha + Math.sin(this.pulsePhase) * 0.015;

    // Gentle mouse attraction for orbs (opposite of particles)
    if (mouseX !== null && mouseY !== null) {
      const dx = mouseX - this.x;
      const dy = mouseY - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > 50) {
        this.vx += (dx / dist) * 0.003;
        this.vy += (dy / dist) * 0.003;
      }
    }

    this.vx *= 0.995;
    this.vy *= 0.995;

    this.x += this.vx;
    this.y += this.vy;

    // Soft boundary bounce
    if (this.x < -this.radius) this.x = this.w + this.radius;
    if (this.x > this.w + this.radius) this.x = -this.radius;
    if (this.y < -this.radius) this.y = this.h + this.radius;
    if (this.y > this.h + this.radius) this.y = -this.radius;
  }

  draw(ctx) {
    const gradient = ctx.createRadialGradient(
      this.x,
      this.y,
      0,
      this.x,
      this.y,
      this.radius,
    );
    gradient.addColorStop(
      0,
      `rgba(${this.r},${this.g},${this.b},${(this.alpha * 1.6).toFixed(3)})`,
    );
    gradient.addColorStop(
      0.5,
      `rgba(${this.r},${this.g},${this.b},${(this.alpha * 0.5).toFixed(3)})`,
    );
    gradient.addColorStop(1, `rgba(${this.r},${this.g},${this.b},0)`);

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();
  }
}

/* ---------- Component ---------- */
export default function DynamicBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null });
  const particlesRef = useRef([]);
  const orbsRef = useRef([]);
  const animFrameRef = useRef(null);

  const initEntities = useCallback((w, h) => {
    const particles = [];
    for (let i = 0; i < CONFIG.particleCount; i++) {
      particles.push(new Particle(w, h));
    }
    particlesRef.current = particles;

    const orbs = [];
    for (let i = 0; i < CONFIG.glowOrbCount; i++) {
      orbs.push(new GlowOrb(w, h));
    }
    orbsRef.current = orbs;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Re-init entities if size changed substantially
      if (
        particlesRef.current.length === 0 ||
        Math.abs(particlesRef.current[0].w - w) > 200
      ) {
        initEntities(w, h);
      } else {
        // Just update bounds
        particlesRef.current.forEach((p) => {
          p.w = w;
          p.h = h;
        });
        orbsRef.current.forEach((o) => {
          o.w = w;
          o.h = h;
        });
      }
    };

    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Touch support
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        mouseRef.current.x = e.touches[0].clientX;
        mouseRef.current.y = e.touches[0].clientY;
      }
    };
    const handleTouchEnd = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    /* ---------- Animation Loop ---------- */
    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const { x: mx, y: my } = mouseRef.current;

      ctx.clearRect(0, 0, w, h);

      // Draw glow orbs first (behind particles)
      for (const orb of orbsRef.current) {
        orb.update(mx, my);
        orb.draw(ctx);
      }

      const particles = particlesRef.current;

      // Update & draw particles
      for (const p of particles) {
        p.update(mx, my);
      }

      // Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONFIG.connectionDistance) {
            const opacity = (1 - dist / CONFIG.connectionDistance) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity.toFixed(3)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw mouse proximity glow & connections
      if (mx !== null && my !== null) {
        // Subtle radial glow at cursor
        const cursorGlow = ctx.createRadialGradient(mx, my, 0, mx, my, 120);
        cursorGlow.addColorStop(0, 'rgba(255, 0, 85, 0.04)');
        cursorGlow.addColorStop(0.5, 'rgba(255, 0, 85, 0.015)');
        cursorGlow.addColorStop(1, 'rgba(255, 0, 85, 0)');
        ctx.beginPath();
        ctx.arc(mx, my, 120, 0, Math.PI * 2);
        ctx.fillStyle = cursorGlow;
        ctx.fill();

        // Brighter lines near cursor
        for (const p of particles) {
          const dx = p.x - mx;
          const dy = p.y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONFIG.mouseInfluenceRadius) {
            const opacity =
              (1 - dist / CONFIG.mouseInfluenceRadius) * 0.25;
            ctx.beginPath();
            ctx.moveTo(mx, my);
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = `rgba(255, 0, 85, ${opacity.toFixed(3)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw particles (on top)
      for (const p of particles) {
        p.draw(ctx);
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [initEntities]);

  return (
    <canvas
      ref={canvasRef}
      className="dynamic-bg-canvas"
      aria-hidden="true"
    />
  );
}
