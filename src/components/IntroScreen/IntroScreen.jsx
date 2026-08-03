import { useState, useEffect } from 'react';
import './IntroScreen.css';

const GREETINGS = [
  { text: 'নমস্কাৰ', lang: 'as', fontClass: 'greeting-bengali' },
  { text: 'Hello', lang: 'en', fontClass: 'greeting-english' },
  { text: 'नमस्ते', lang: 'hi', fontClass: 'greeting-devanagari' },
  { text: 'नमस्कारम्', lang: 'sa', fontClass: 'greeting-devanagari' },
];

const GREETING_DURATION = 1000;
const SLIDE_DELAY = 600;

export default function IntroScreen({ onComplete }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [phase, setPhase] = useState('greetings'); // 'greetings' | 'sliding' | 'done'

  useEffect(() => {
    if (phase !== 'greetings') return;

    const timer = setTimeout(() => {
      if (activeIndex < GREETINGS.length - 1) {
        setActiveIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setPhase('sliding');
        }, SLIDE_DELAY);
      }
    }, GREETING_DURATION);

    return () => clearTimeout(timer);
  }, [activeIndex, phase]);

  useEffect(() => {
    if (phase === 'sliding') {
      const timer = setTimeout(() => {
        setPhase('done');
        onComplete?.();
      }, 900);
      return () => clearTimeout(timer);
    }
  }, [phase, onComplete]);

  if (phase === 'done') return null;

  return (
    <div
      className={`intro-screen ${phase === 'sliding' ? 'intro-screen--sliding' : ''}`}
      aria-hidden={phase === 'sliding'}
    >
      {/* Subtle ambient glow */}
      <div className="intro-screen__glow" />

      {/* Greeting text */}
      <div className="intro-screen__content">
        {GREETINGS.map((greeting, index) => (
          <h1
            key={greeting.lang}
            lang={greeting.lang}
            className={`intro-screen__greeting ${greeting.fontClass} ${
              index === activeIndex && phase === 'greetings'
                ? 'intro-screen__greeting--active'
                : ''
            } ${index < activeIndex ? 'intro-screen__greeting--past' : ''}`}
          >
            {greeting.text}
          </h1>
        ))}
      </div>

      {/* Subtle bottom hint */}
      <div className="intro-screen__hint">
        <div className="intro-screen__hint-dots">
          {GREETINGS.map((_, i) => (
            <span
              key={i}
              className={`intro-screen__dot ${i === activeIndex ? 'intro-screen__dot--active' : ''} ${i < activeIndex ? 'intro-screen__dot--past' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
