import { useRef, useState, useCallback, useEffect } from 'react';
import './Dock.css';

const DOCK_ITEMS = [
  { id: 'about', icon: '👤', label: 'About Me', type: 'window' },
  { id: 'projects', icon: '🚀', label: 'Projects', type: 'window' },
  { id: 'skills', icon: '⚡', label: 'Skills', type: 'window' },
  { id: 'contact', icon: '/icons/contact.png', label: 'Contact', type: 'window' },
  { id: 'resume', icon: '/icons/resume.png', label: 'Resume', type: 'window' },
  { id: 'terminal', icon: '/icons/terminal.png', label: 'Terminal', type: 'window' },
  { id: 'divider1', type: 'divider' },
  { id: 'github', icon: '/icons/github.png', label: 'GitHub', type: 'link', url: 'https://github.com' },
  { id: 'linkedin', icon: '/icons/linkedin.png', label: 'LinkedIn', type: 'link', url: 'https://linkedin.com' },
];

export default function Dock({ openWindows, onOpenWindow }) {
  const dockRef = useRef(null);
  const [mouseX, setMouseX] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const itemRefs = useRef([]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 767);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (isMobile || !dockRef.current) return;
    const rect = dockRef.current.getBoundingClientRect();
    setMouseX(e.clientX - rect.left);
  }, [isMobile]);

  const handleMouseLeave = useCallback(() => {
    setMouseX(null);
  }, []);

  // Use CSS custom properties for smooth spring-back animation
  useEffect(() => {
    if (isMobile) return;
    const items = itemRefs.current;
    if (!dockRef.current || items.length === 0) return;

    items.forEach((el) => {
      if (!el) return;
      if (mouseX === null) {
        // Mouse left — reset to 1, CSS transition handles spring-back
        el.style.setProperty('--dock-scale', '1');
        el.style.setProperty('--dock-translate-y', '0px');
        return;
      }

      const dockRect = dockRef.current.getBoundingClientRect();
      const itemRect = el.getBoundingClientRect();
      const itemCenter = itemRect.left + itemRect.width / 2 - dockRect.left;
      const distance = Math.abs(mouseX - itemCenter);
      const maxDistance = 150;
      const maxScale = 1.72;

      if (distance > maxDistance) {
        el.style.setProperty('--dock-scale', '1');
        el.style.setProperty('--dock-translate-y', '0px');
      } else {
        const progress = 1 - distance / maxDistance;
        const scale = 1 + (maxScale - 1) * Math.pow(progress, 1.4);
        const translateY = -16 * Math.pow(progress, 1.4);
        el.style.setProperty('--dock-scale', scale.toFixed(3));
        el.style.setProperty('--dock-translate-y', `${translateY.toFixed(1)}px`);
      }
    });
  }, [mouseX, isMobile]);

  const handleItemClick = (item) => {
    if (item.type === 'window') {
      onOpenWindow?.(item.id);
    } else if (item.type === 'link') {
      window.open(item.url, '_blank', 'noopener');
    }
  };

  let refIndex = 0;

  return (
    <nav className="dock-container" aria-label="Application dock">
      <div
        className={`dock ${mouseX !== null ? 'dock--hovering' : ''}`}
        ref={dockRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {DOCK_ITEMS.map((item) => {
          if (item.type === 'divider') {
            return <div key={item.id} className="dock__divider" />;
          }

          const currentRefIndex = refIndex++;
          const isOpen = openWindows?.includes(item.id);
          const isImg = item.icon.startsWith('/');

          return (
            <button
              key={item.id}
              className={`dock__item ${isOpen ? 'dock__item--active' : ''}`}
              ref={(el) => { itemRefs.current[currentRefIndex] = el; }}
              onClick={() => handleItemClick(item)}
              aria-label={item.label}
              title={item.label}
            >
              <span className={`dock__icon ${isImg ? 'dock__icon--img-container' : ''}`}>
                {isImg ? (
                  <img src={item.icon} alt={item.label} className="dock__icon-img" />
                ) : (
                  item.icon
                )}
              </span>
              {isOpen && <span className="dock__indicator" />}
              <span className="dock__tooltip">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
