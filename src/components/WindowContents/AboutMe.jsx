import './WindowContents.css';

export default function AboutMe() {
  return (
    <div className="wc-about">
      <div className="wc-about__header">
        <div className="wc-about__avatar">
          <span className="wc-about__avatar-emoji">👨‍💻</span>
        </div>
        <div className="wc-about__intro">
          <h2 className="wc-about__name">Nibir</h2>
          <p className="wc-about__tagline">Developer · Creator · Builder</p>
          <div className="wc-about__location">
            <span>📍</span>
            <span>India</span>
          </div>
        </div>
      </div>

      <div className="wc-about__bio">
        <p>
          Passionate about building beautiful digital experiences that blend
          creativity with technology. I love exploring the intersection of design
          and engineering, crafting solutions that are both elegant and functional.
        </p>
        <p>
          When I'm not coding, you'll find me exploring new technologies,
          contributing to open source, or tinkering with side projects that push
          the boundaries of what's possible on the web.
        </p>
      </div>

      <div className="wc-about__stats">
        <div className="wc-about__stat">
          <span className="wc-about__stat-value">10+</span>
          <span className="wc-about__stat-label">Projects</span>
        </div>
        <div className="wc-about__stat">
          <span className="wc-about__stat-value">5+</span>
          <span className="wc-about__stat-label">Technologies</span>
        </div>
        <div className="wc-about__stat">
          <span className="wc-about__stat-value">∞</span>
          <span className="wc-about__stat-label">Curiosity</span>
        </div>
      </div>

      <div className="wc-about__links">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="wc-about__link">
          <img src="/icons/github.png" alt="GitHub" className="wc-inline-icon" /> GitHub
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="wc-about__link">
          <img src="/icons/linkedin.png" alt="LinkedIn" className="wc-inline-icon" /> LinkedIn
        </a>
      </div>
    </div>
  );
}
