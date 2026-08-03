import './WindowContents.css';

export default function Resume() {
  return (
    <div className="wc-resume">
      <div className="wc-resume__header">
        <div>
          <h2 className="wc-resume__name">Nibir</h2>
          <p className="wc-resume__title">Full Stack Developer</p>
        </div>
        <button className="wc-resume__download" onClick={() => alert('Resume download would start here!')}>
          ⬇️ Download PDF
        </button>
      </div>

      <section className="wc-resume__section">
        <h3 className="wc-resume__section-title">Experience</h3>
        <div className="wc-resume__entry">
          <div className="wc-resume__entry-header">
            <strong>Full Stack Developer</strong>
            <span className="wc-resume__date">2024 — Present</span>
          </div>
          <p className="wc-resume__company">Personal & Freelance Projects</p>
          <ul className="wc-resume__list">
            <li>Developed and deployed multiple full-stack web applications</li>
            <li>Built interactive UI experiences with React and modern CSS</li>
            <li>Implemented RESTful APIs and database architectures</li>
          </ul>
        </div>
      </section>

      <section className="wc-resume__section">
        <h3 className="wc-resume__section-title">Education</h3>
        <div className="wc-resume__entry">
          <div className="wc-resume__entry-header">
            <strong>Computer Science</strong>
            <span className="wc-resume__date">2022 — Present</span>
          </div>
          <p className="wc-resume__company">University</p>
          <p className="wc-resume__desc">Relevant coursework in Data Structures, Algorithms, Web Development, and Software Engineering.</p>
        </div>
      </section>

      <section className="wc-resume__section">
        <h3 className="wc-resume__section-title">Certifications & Awards</h3>
        <div className="wc-resume__badges">
          <span className="wc-resume__badge">🏆 Hackathon Winner</span>
          <span className="wc-resume__badge">📜 AWS Certified</span>
          <span className="wc-resume__badge">⭐ Open Source Contributor</span>
        </div>
      </section>
    </div>
  );
}
