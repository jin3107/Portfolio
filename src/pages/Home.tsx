import SocialLinks from '../components/SocialLinks'
import GithubStats from '../components/GithubStats'
import avatar from '../assets/chibiboy.jpg'
import { education as educationLink } from '../data/portfolio'
import { useLanguage } from '../i18n/LanguageContext'

const SKILL_PASTELS = ['pastel-green', 'pastel-yellow', 'pastel-pink']
const SKILL_TILTS = ['tilt-neg', 'tilt-pos', 'tilt-neg']

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="bento-grid">
      <section className="bento-tile bento-hero pastel-cream">
        <div className="hero-dot-grid" aria-hidden="true" />
        <div className="hero-star" aria-hidden="true" />
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

      <section className="bento-tile bento-stats pastel-blue">
        <span className="bento-tag">🐙 GitHub</span>
        <GithubStats />
      </section>

      {t.skills.map((skill, index) => (
        <section
          className={`bento-tile bento-skill ${SKILL_PASTELS[index % SKILL_PASTELS.length]} ${SKILL_TILTS[index % SKILL_TILTS.length]}`}
          key={skill.title}
        >
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
        className="bento-tile bento-edu pastel-cream tilt-neg"
        href={educationLink.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="bento-tag">{t.education.label}</span>
        <h3>{t.education.school}</h3>
        <p>{t.education.subtitle}</p>
        <p className="bento-meta">{t.education.duration}</p>
      </a>

      <section className="bento-tile bento-exp pastel-blue tilt-pos">
        <span className="bento-tag">{t.experience.label}</span>
        <h3>{t.experience.title}</h3>
        <p>{t.experience.company}</p>
        <p>{t.experience.description}</p>
        <p className="bento-meta">{t.experience.duration}</p>
      </section>
    </div>
  )
}
