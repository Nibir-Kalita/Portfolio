import { useRef, useState, useCallback, useEffect } from 'react';
import './Window.css';

export default function Window({
  id,
  title,
  children,
  isActive,
  defaultPosition,
  defaultSize,
  onClose,
  onFocus,
  zIndex,
}) {
  const windowRef = useRef(null);
  const [position, setPosition] = useState(defaultPosition || { x: 100, y: 60 });
  const [size, setSize] = useState(defaultSize || { width: 700, height: 500 });
  const [isMaximized, setIsMaximized] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const prevGeometry = useRef(null);

  useEffect(() => {
    const checkDevice = () => {
      const w = window.innerWidth;
      setIsMobile(w <= 767);
      setIsTablet(w >= 768 && w <= 1024);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const handleMouseDown = useCallback(
    (e) => {
      if (isMobile || isTablet) return; // No drag on touch devices
      if (e.target.closest('.window__traffic-btn')) return;
      e.preventDefault();
      onFocus?.(id);

      const rect = windowRef.current.getBoundingClientRect();
      dragOffset.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      setIsDragging(true);

      if (isMaximized) {
        const ratio = e.clientX / window.innerWidth;
        prevGeometry.current = null;
        setIsMaximized(false);
        setSize((prev) => {
          const newX = e.clientX - prev.width * ratio;
          const newY = e.clientY - dragOffset.current.y;
          setPosition({ x: Math.max(0, newX), y: Math.max(28, newY) });
          return prev;
        });
      }
    },
    [id, isMaximized, isMobile, isTablet, onFocus]
  );

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e) => {
      setPosition({
        x: Math.max(0, e.clientX - dragOffset.current.x),
        y: Math.max(28, e.clientY - dragOffset.current.y),
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => onClose?.(id), 200);
  };

  const handleMaximize = () => {
    if (isMobile) return; // Always fullscreen on mobile
    if (isMaximized) {
      if (prevGeometry.current) {
        setPosition(prevGeometry.current.position);
        setSize(prevGeometry.current.size);
      }
      setIsMaximized(false);
    } else {
      prevGeometry.current = { position, size };
      setPosition({ x: 0, y: 28 });
      setSize({ width: window.innerWidth, height: window.innerHeight - 28 });
      setIsMaximized(true);
    }
  };

  const handleMinimize = () => {
    handleClose();
  };

  // On mobile: always full-screen, iOS-style
  // On tablet: centered card with max dimensions
  const isFullScreen = isMobile || isMaximized;

  const windowStyle = isMobile
    ? {
        zIndex: zIndex || 100,
      }
    : isTablet
    ? {
        zIndex: zIndex || 100,
      }
    : isMaximized
    ? {
        left: 0,
        top: 28,
        width: '100vw',
        height: 'calc(100dvh - 28px)',
        borderRadius: 0,
        zIndex: zIndex || 100,
      }
    : {
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height,
        zIndex: zIndex || 100,
      };

  return (
    <div
      ref={windowRef}
      className={`window ${isActive ? 'window--active' : ''} ${
        isClosing ? 'window--closing' : 'window--opening'
      } ${isFullScreen ? 'window--maximized' : ''} ${
        isMobile ? 'window--mobile' : ''
      } ${isTablet ? 'window--tablet' : ''}`}
      style={windowStyle}
      onMouseDown={() => onFocus?.(id)}
      role="dialog"
      aria-label={title}
    >
      {/* Title Bar */}
      <div
        className="window__titlebar"
        onMouseDown={handleMouseDown}
        onDoubleClick={handleMaximize}
      >
        {/* Mobile: iOS-style back/close */}
        {isMobile ? (
          <>
            <button className="window__mobile-back" onClick={handleClose} aria-label="Close">
              <svg width="10" height="16" viewBox="0 0 10 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 1L1 8l7 7" />
              </svg>
              <span>Back</span>
            </button>
            <span className="window__title">{title}</span>
            <div className="window__titlebar-spacer" />
          </>
        ) : (
          <>
            <div className="window__traffic-lights">
              <button
                className="window__traffic-btn window__traffic-btn--close"
                onClick={handleClose}
                aria-label="Close window"
              >
                <svg width="8" height="8" viewBox="0 0 8 8">
                  <path d="M1 1l6 6M7 1L1 7" stroke="rgba(0,0,0,0.5)" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </button>
              <button
                className="window__traffic-btn window__traffic-btn--minimize"
                onClick={handleMinimize}
                aria-label="Minimize window"
              >
                <svg width="8" height="8" viewBox="0 0 8 8">
                  <path d="M1 4h6" stroke="rgba(0,0,0,0.5)" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </button>
              <button
                className="window__traffic-btn window__traffic-btn--maximize"
                onClick={handleMaximize}
                aria-label="Maximize window"
              >
                <svg width="8" height="8" viewBox="0 0 8 8">
                  <path d="M1 1h6v6H1z" stroke="rgba(0,0,0,0.5)" strokeWidth="1.1" fill="none" />
                </svg>
              </button>
            </div>
            <span className="window__title">{title}</span>
            <div className="window__titlebar-spacer" />
          </>
        )}
      </div>

      {/* Content */}
      <div className="window__content">
        {children}
      </div>
    </div>
  );
}
