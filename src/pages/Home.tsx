import SocialLinks from '../components/SocialLinks'
import GithubStats from '../components/GithubStats'
import avatar from '../assets/chibiboy.jpg'
import { education as educationLink } from '../data/portfolio'
import { useLanguage } from '../i18n/LanguageContext'

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="bento-grid">
      <section className="bento-tile bento-hero">
        <div className="hero-top">
          <img className="hero-avatar" src={avatar} alt="" aria-hidden="true" />
          <div>
            <h1 className="hero-name">{t.greeting.name}</h1>
            <p className="hero-nickname">( {t.greeting.nickname} )</p>
          </div>
        </div>
        <p className="hero-subtitle">{t.greeting.subtitle}</p>
        <SocialLinks />
      </section>

      <section className="bento-tile bento-stats">
        <span className="bento-tag">🐙 GitHub</span>
        <GithubStats />
      </section>

      {t.skills.map((skill) => (
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
        href={educationLink.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="bento-tag">{t.education.label}</span>
        <h3>{t.education.school}</h3>
        <p>{t.education.subtitle}</p>
        <p className="bento-meta">{t.education.duration}</p>
      </a>

      <section className="bento-tile bento-exp">
        <span className="bento-tag">{t.experience.label}</span>
        <h3>{t.experience.title}</h3>
        <p>{t.experience.company}</p>
        <p>{t.experience.description}</p>
        <p className="bento-meta">{t.experience.duration}</p>
      </section>
    </div>
  )
}
