import { useState, useRef, useEffect } from 'react';
import './WindowContents.css';

const COMMANDS = {
  help: () =>
    `Available commands:
  whoami      — About me
  skills      — My tech stack
  projects    — My projects
  contact     — How to reach me
  education   — My education
  clear       — Clear terminal
  neofetch    — System info
  echo [msg]  — Echo a message
  date        — Current date & time
  help        — Show this help`,

  whoami: () =>
    `nibir@portfolio
━━━━━━━━━━━━━━━━━━━
Name:     Nibir
Role:     Full Stack Developer
Location: India
Status:   Building cool things 🚀`,

  skills: () =>
    `🔧 Tech Stack
━━━━━━━━━━━━━━━━━━━
Languages:   JavaScript, TypeScript, Python, Java, SQL
Frameworks:  React, Next.js, Node.js, Express, FastAPI
Tools:       Git, Docker, AWS, Firebase, Figma, Linux
Databases:   PostgreSQL, MongoDB, Redis
Currently Learning: Rust, WebAssembly`,

  projects: () =>
    `📁 Projects
━━━━━━━━━━━━━━━━━━━
1. macOS Portfolio     — This very website you're exploring!
2. AI Chat App         — Real-time AI-powered chat
3. E-Commerce Platform — Full-stack with payments
4. Weather Dashboard   — Interactive weather viz
5. Task Manager        — Kanban board with collab
6. Music Player        — Web audio visualizer`,

  contact: () =>
    `📬 Contact Info
━━━━━━━━━━━━━━━━━━━
Email:    hello@nibir.dev
GitHub:   github.com/nibir
LinkedIn: linkedin.com/in/nibir
Twitter:  twitter.com/nibir`,

  education: () =>
    `🎓 Education
━━━━━━━━━━━━━━━━━━━
Computer Science — University
Relevant Coursework:
  • Data Structures & Algorithms
  • Web Development
  • Software Engineering
  • Database Systems`,

  neofetch: () =>
    `         ████████          nibir@portfolio
       ██████████████       ━━━━━━━━━━━━━━━━
     ████████████████████   OS: macOS Portfolio
   ████████████████████████ Host: React 18 + Vite
  ██████████████████████████ Kernel: JavaScript ES2024
 ████████████  ████████████ Shell: /bin/portfolio
 ████████████  ████████████ Terminal: web-terminal v1.0
 ████████████  ████████████ CPU: 🧠 × ∞ cores
 ████████████  ████████████ Memory: Limitless curiosity
  ██████████████████████████ Uptime: Since forever
   ████████████████████████ Theme: Glassmorphism Dark
     ████████████████████
       ██████████████
         ████████`,

  date: () => `📅 ${new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'medium' })}`,
};

export default function Terminal() {
  const [history, setHistory] = useState([
    { type: 'output', text: 'Welcome to Nibir\'s Portfolio Terminal 💻' },
    { type: 'output', text: 'Type "help" for available commands.\n' },
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const newHistory = [...history, { type: 'input', text: trimmed }];
    const cmd = trimmed.toLowerCase().split(' ')[0];
    const args = trimmed.slice(cmd.length).trim();

    if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    if (cmd === 'echo') {
      newHistory.push({ type: 'output', text: args || '' });
    } else if (COMMANDS[cmd]) {
      newHistory.push({ type: 'output', text: COMMANDS[cmd]() });
    } else {
      newHistory.push({
        type: 'error',
        text: `zsh: command not found: ${cmd}\nType "help" for available commands.`,
      });
    }

    setHistory(newHistory);
    setInput('');
  };

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="wc-terminal" onClick={handleTerminalClick}>
      <div className="wc-terminal__output" ref={scrollRef}>
        {history.map((entry, i) => (
          <div key={i} className={`wc-terminal__line wc-terminal__line--${entry.type}`}>
            {entry.type === 'input' && (
              <span className="wc-terminal__prompt">
                <span className="wc-terminal__user">nibir</span>
                <span className="wc-terminal__at">@</span>
                <span className="wc-terminal__host">portfolio</span>
                <span className="wc-terminal__dollar"> $ </span>
              </span>
            )}
            <span className="wc-terminal__text">{entry.text}</span>
          </div>
        ))}
      </div>
      <form className="wc-terminal__input-line" onSubmit={handleSubmit}>
        <span className="wc-terminal__prompt">
          <span className="wc-terminal__user">nibir</span>
          <span className="wc-terminal__at">@</span>
          <span className="wc-terminal__host">portfolio</span>
          <span className="wc-terminal__dollar"> $ </span>
        </span>
        <input
          ref={inputRef}
          className="wc-terminal__input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          spellCheck={false}
          autoComplete="off"
          autoFocus
        />
      </form>
    </div>
  );
}
