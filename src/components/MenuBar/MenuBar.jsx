import { useState, useEffect } from 'react';
import './MenuBar.css';

export default function MenuBar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 30000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  const formattedDate = time.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });

  return (
    <header className="menubar" role="banner">
      <div className="menubar__left">
        <button className="menubar__apple" aria-label="Apple menu">
          <svg width="14" height="17" viewBox="0 0 14 17" fill="currentColor">
            <path d="M13.1 12.48c-.29.66-.63 1.27-1.02 1.83-.53.76-.96 1.28-1.3 1.58-.52.49-1.07.74-1.67.76-.43 0-.95-.12-1.55-.37-.61-.25-1.17-.37-1.67-.37-.53 0-1.1.12-1.71.37-.62.25-1.11.38-1.5.39-.57.02-1.13-.24-1.68-.78-.37-.33-.83-.88-1.38-1.65C.58 13.1.19 11.89.02 10.72c-.18-1.26 0-2.35.55-3.27a4.01 4.01 0 011.45-1.46c.61-.38 1.28-.58 2-.6.46 0 1.05.14 1.8.42.74.28 1.21.42 1.42.42.16 0 .7-.17 1.6-.5.85-.31 1.57-.44 2.16-.39 1.6.13 2.8.77 3.58 1.93-1.43.87-2.14 2.09-2.12 3.65.02 1.22.46 2.23 1.3 3.05.39.37.82.65 1.3.86-.1.3-.21.59-.33.87zM10.02.34c0 .95-.35 1.84-1.04 2.67-.84.98-1.85 1.54-2.95 1.45a2.97 2.97 0 01-.02-.36c0-.92.4-1.9 1.11-2.7.35-.4.8-.74 1.35-1.01.54-.26 1.06-.41 1.54-.45.02.13.02.27.02.4z"/>
          </svg>
        </button>
        <span className="menubar__app-name">Nibir's Portfolio</span>
        <nav className="menubar__nav">
          <button className="menubar__menu-item">File</button>
          <button className="menubar__menu-item">Edit</button>
          <button className="menubar__menu-item">View</button>
          <button className="menubar__menu-item">Window</button>
          <button className="menubar__menu-item">Help</button>
        </nav>
      </div>

      <div className="menubar__right">
        <div className="menubar__status-icons">
          {/* Battery */}
          <svg className="menubar__icon" width="22" height="12" viewBox="0 0 22 12" fill="none" stroke="currentColor" strokeWidth="1">
            <rect x="0.5" y="1" width="18" height="10" rx="2" />
            <rect x="2" y="2.5" width="12" height="7" rx="1" fill="currentColor" opacity="0.6" />
            <path d="M20 4.5v3" strokeLinecap="round" />
          </svg>
          {/* Wi-Fi */}
          <svg className="menubar__icon" width="16" height="12" viewBox="0 0 16 12" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
            <path d="M1 3.5a10 10 0 0114 0" />
            <path d="M3.5 6a6.5 6.5 0 019 0" />
            <path d="M6 8.5a3 3 0 014 0" />
            <circle cx="8" cy="11" r="1" fill="currentColor" />
          </svg>
          {/* Search */}
          <svg className="menubar__icon" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.3">
            <circle cx="6" cy="6" r="4.5" />
            <path d="M9.5 9.5L13 13" strokeLinecap="round" />
          </svg>
        </div>
        <span className="menubar__datetime">
          <span className="menubar__date">{formattedDate}</span>
          <span className="menubar__time">{formattedTime}</span>
        </span>
      </div>
    </header>
  );
}
