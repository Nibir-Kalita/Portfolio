import { useState, useCallback } from 'react';
import IntroScreen from './components/IntroScreen/IntroScreen';
import MenuBar from './components/MenuBar/MenuBar';
import Dock from './components/Dock/Dock';
import Window from './components/Window/Window';
import DesktopContent from './components/DesktopContent/DesktopContent';
import AboutMe from './components/WindowContents/AboutMe';
import Projects from './components/WindowContents/Projects';
import Skills from './components/WindowContents/Skills';
import Contact from './components/WindowContents/Contact';
import Resume from './components/WindowContents/Resume';
import Terminal from './components/WindowContents/Terminal';
import './App.css';

const WINDOW_CONFIG = {
  about: {
    title: 'About Me',
    component: AboutMe,
    defaultPosition: { x: 120, y: 80 },
    defaultSize: { width: 650, height: 520 },
  },
  projects: {
    title: 'Projects',
    component: Projects,
    defaultPosition: { x: 200, y: 100 },
    defaultSize: { width: 780, height: 560 },
  },
  skills: {
    title: 'Skills',
    component: Skills,
    defaultPosition: { x: 160, y: 90 },
    defaultSize: { width: 720, height: 520 },
  },
  contact: {
    title: 'Contact',
    component: Contact,
    defaultPosition: { x: 180, y: 85 },
    defaultSize: { width: 750, height: 500 },
  },
  resume: {
    title: 'Resume',
    component: Resume,
    defaultPosition: { x: 140, y: 75 },
    defaultSize: { width: 680, height: 550 },
  },
  terminal: {
    title: 'Terminal',
    component: Terminal,
    defaultPosition: { x: 220, y: 110 },
    defaultSize: { width: 650, height: 420 },
  },
};

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);
  const [openWindows, setOpenWindows] = useState([]);
  const [activeWindow, setActiveWindow] = useState(null);
  const [windowOrder, setWindowOrder] = useState([]);

  const handleOpenWindow = useCallback((id) => {
    setOpenWindows((prev) => {
      if (prev.includes(id)) {
        // Already open — focus it
        setActiveWindow(id);
        setWindowOrder((order) => [...order.filter((w) => w !== id), id]);
        return prev;
      }
      return [...prev, id];
    });
    setActiveWindow(id);
    setWindowOrder((prev) => [...prev.filter((w) => w !== id), id]);
  }, []);

  const handleCloseWindow = useCallback((id) => {
    setOpenWindows((prev) => prev.filter((w) => w !== id));
    setWindowOrder((prev) => {
      const newOrder = prev.filter((w) => w !== id);
      if (activeWindow === id) {
        setActiveWindow(newOrder.length > 0 ? newOrder[newOrder.length - 1] : null);
      }
      return newOrder;
    });
  }, [activeWindow]);

  const handleFocusWindow = useCallback((id) => {
    setActiveWindow(id);
    setWindowOrder((prev) => [...prev.filter((w) => w !== id), id]);
  }, []);

  const handleDesktopClick = useCallback((e) => {
    // Only unfocus active window if user clicks directly on desktop canvas or wallpaper
    if (e.target.classList.contains('desktop') || e.target.classList.contains('desktop__wallpaper')) {
      setActiveWindow(null);
    }
  }, []);

  return (
    <>
      {!introComplete && (
        <IntroScreen onComplete={() => setIntroComplete(true)} />
      )}

      <div
        className={`desktop ${introComplete ? 'desktop--visible' : ''}`}
        onClick={handleDesktopClick}
      >
        {/* Fixed Wallpaper in Background */}
        <div className="desktop__wallpaper" />

        {/* Fixed Top Menu Bar */}
        <MenuBar />

        {/* Scrollable Main Landing Page Content */}
        <DesktopContent onOpenWindow={handleOpenWindow} />

        {/* Windows (Floating over content) */}
        {openWindows.map((id) => {
          const config = WINDOW_CONFIG[id];
          if (!config) return null;
          const ContentComponent = config.component;
          const zIndex = 100 + windowOrder.indexOf(id);

          return (
            <Window
              key={id}
              id={id}
              title={config.title}
              isActive={activeWindow === id}
              defaultPosition={config.defaultPosition}
              defaultSize={config.defaultSize}
              onClose={handleCloseWindow}
              onFocus={handleFocusWindow}
              zIndex={zIndex}
            >
              <ContentComponent />
            </Window>
          );
        })}

        {/* Fixed Bottom Dock / Toolbar */}
        <Dock
          openWindows={openWindows}
          onOpenWindow={handleOpenWindow}
        />
      </div>
    </>
  );
}
