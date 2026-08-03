import './WindowContents.css';

const SKILL_CATEGORIES = [
  {
    title: 'Languages',
    icon: '🔤',
    skills: [
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 82 },
      { name: 'Python', level: 85 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'SQL', level: 75 },
      { name: 'Java', level: 70 },
    ],
  },
  {
    title: 'Frameworks',
    icon: '⚙️',
    skills: [
      { name: 'React', level: 92 },
      { name: 'Next.js', level: 80 },
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 78 },
      { name: 'Vue.js', level: 65 },
      { name: 'FastAPI', level: 72 },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: '🛠️',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 70 },
      { name: 'AWS', level: 65 },
      { name: 'Firebase', level: 80 },
      { name: 'Figma', level: 75 },
      { name: 'Linux', level: 82 },
    ],
  },
];

export default function Skills() {
  return (
    <div className="wc-skills">
      <h2 className="wc-section-title">Skills & Technologies</h2>
      <p className="wc-section-subtitle">What I work with</p>
      <div className="wc-skills__categories">
        {SKILL_CATEGORIES.map((category) => (
          <div key={category.title} className="wc-skills__category">
            <h3 className="wc-skills__category-title">
              <span>{category.icon}</span> {category.title}
            </h3>
            <div className="wc-skills__list">
              {category.skills.map((skill) => (
                <div key={skill.name} className="wc-skills__item">
                  <div className="wc-skills__item-header">
                    <span className="wc-skills__item-name">{skill.name}</span>
                    <span className="wc-skills__item-level">{skill.level}%</span>
                  </div>
                  <div className="wc-skills__bar">
                    <div
                      className="wc-skills__bar-fill"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
