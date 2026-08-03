import './WindowContents.css';

const PROJECTS = [
  {
    id: 1,
    title: 'macOS Portfolio',
    description: 'An interactive portfolio built as a macOS desktop experience with glassmorphism, draggable windows, and smooth animations.',
    tech: ['React', 'CSS', 'Vite'],
    emoji: '🖥️',
    color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    id: 2,
    title: 'AI Chat Application',
    description: 'A real-time chat application powered by AI with natural language understanding and contextual responses.',
    tech: ['Python', 'FastAPI', 'React'],
    emoji: '🤖',
    color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    id: 3,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with payment integration, inventory management, and analytics dashboard.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL'],
    emoji: '🛒',
    color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard with real-time data, interactive maps, and 7-day forecasts.',
    tech: ['React', 'D3.js', 'API'],
    emoji: '🌤️',
    color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  },
  {
    id: 5,
    title: 'Task Manager',
    description: 'A Kanban-style task manager with drag-and-drop, real-time collaboration, and smart notifications.',
    tech: ['Vue.js', 'Firebase', 'PWA'],
    emoji: '📋',
    color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  },
  {
    id: 6,
    title: 'Music Player',
    description: 'A sleek music player with visualizer, playlist management, and cross-device sync.',
    tech: ['React', 'Web Audio', 'Canvas'],
    emoji: '🎵',
    color: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
  },
];

export default function Projects() {
  return (
    <div className="wc-projects">
      <h2 className="wc-section-title">Projects</h2>
      <p className="wc-section-subtitle">A collection of things I've built</p>
      <div className="wc-projects__grid">
        {PROJECTS.map((project) => (
          <article key={project.id} className="wc-projects__card">
            <div className="wc-projects__card-header" style={{ background: project.color }}>
              <span className="wc-projects__card-emoji">{project.emoji}</span>
            </div>
            <div className="wc-projects__card-body">
              <h3 className="wc-projects__card-title">{project.title}</h3>
              <p className="wc-projects__card-desc">{project.description}</p>
              <div className="wc-projects__card-tags">
                {project.tech.map((t) => (
                  <span key={t} className="wc-projects__tag">{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
