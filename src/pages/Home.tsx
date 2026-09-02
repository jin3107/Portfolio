import SocialLinks from '../components/SocialLinks'
import GithubStats from '../components/GithubStats'
import avatar from '../assets/chibiboy.jpg'
import { greeting, skills, education, experience } from '../data/portfolio'

export default function Home() {
  return (
    <div className="bento-grid">
      <section className="bento-tile bento-hero">
        <div className="hero-top">
          <div>
            <h1 className="hero-name">{greeting.name}</h1>
            <p className="hero-nickname">( {greeting.nickname} )</p>
          </div>
          <img className="hero-avatar" src={avatar} alt="" aria-hidden="true" />
        </div>
        <p className="hero-subtitle">{greeting.subtitle}</p>
        <SocialLinks />
      </section>

      <section className="bento-tile bento-stats">
        <span className="bento-tag">🐙 GitHub</span>
        <GithubStats />
      </section>

      {skills.map((skill) => (
        <section className="bento-tile bento-skill" key={skill.title}>
          <h3>{skill.title}</h3>
          <p className="bento-skill-highlight">{skill.highlight}</p>
          <ul className="tag-list">
            {skill.tags.map((tag) => (
              <li key={tag} className="tag-pill">
                {tag}
              </li>
            ))}
          </ul>
        </section>
      ))}

      <a
        className="bento-tile bento-edu"
        href={education.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="bento-tag">🎓 Học vấn</span>
        <h3>{education.school}</h3>
        <p>{education.subtitle}</p>
        <p className="bento-meta">{education.duration}</p>
      </a>

      <section className="bento-tile bento-exp">
        <span className="bento-tag">🧑‍💻 Kinh nghiệm</span>
        <h3>{experience.title}</h3>
        <p>{experience.company}</p>
        <p>{experience.description}</p>
        <p className="bento-meta">{experience.duration}</p>
      </section>
    </div>
  )
}
