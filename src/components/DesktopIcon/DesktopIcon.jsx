import { useState } from 'react';
import './DesktopIcon.css';

export default function DesktopIcon({ icon, label, onClick, style }) {
  const [selected, setSelected] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    setSelected(true);
  };

  const handleDoubleClick = (e) => {
    e.stopPropagation();
    onClick?.();
  };

  return (
    <button
      className={`desktop-icon ${selected ? 'desktop-icon--selected' : ''}`}
      style={style}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onBlur={() => setSelected(false)}
      aria-label={`Open ${label}`}
    >
      <div className="desktop-icon__image">
        {icon}
      </div>
      <span className="desktop-icon__label">{label}</span>
    </button>
  );
}
