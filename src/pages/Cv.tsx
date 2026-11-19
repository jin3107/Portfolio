import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { cvContent, cvContact, cvFile } from '../data/cv'
import type { Lang } from '../i18n/translations'
import './Cv.css'

// Standalone, print-ready A4 page. `?lang=vi|en` overrides the site language so the
// PDF build script can render each version deterministically.
export default function Cv() {
  const { lang: siteLang } = useLanguage()
  const [params] = useSearchParams()
  const q = params.get('lang')
  const lang: Lang = q === 'vi' || q === 'en' ? q : siteLang
  const c = cvContent[lang]

  useEffect(() => {
    const prev = document.title
    document.title = `${c.name} CV`
    return () => {
      document.title = prev
    }
  }, [c.name])

  return (
    <div className="cv-root">
      <div className="cv-toolbar">
        <a href={cvFile(lang)} download>
          {lang === 'vi' ? 'Tải PDF' : 'Download PDF'}
        </a>
        <button type="button" onClick={() => window.print()}>
          {lang === 'vi' ? 'In' : 'Print'}
        </button>
      </div>

      <article className="cv-sheet" lang={lang}>
        <header className="cv-head">
          <h1>{c.name}</h1>
          <div className="cv-titlerow">
            <p className="cv-title">{c.title}</p>
            <span className="cv-loc">
              <a href={cvContact.phoneUrl}>{cvContact.phone}</a> · {c.location}
            </span>
          </div>
          <p className="cv-contact">
            <a href={`mailto:${cvContact.email}`}>{cvContact.email}</a>
            <a href={cvContact.githubUrl}>{cvContact.github}</a>
            <a href={cvContact.linkedinUrl}>{cvContact.linkedin}</a>
            <a href={cvContact.portfolioUrl}>{cvContact.portfolio}</a>
          </p>
        </header>

        <section>
          <h2>{c.headings.summary}</h2>
          <p>{c.summary}</p>
        </section>

        <section>
          <h2>{c.headings.projects}</h2>
          {c.projects.map((p) => (
            <div className="cv-item" key={p.name}>
              <div className="cv-row">
                <h3>
                  {p.name}
                  <span className="cv-role">, {p.role}</span>
                </h3>
                <a className="cv-link" href={`https://${p.link}`}>
                  {p.link}
                </a>
              </div>
              <p className="cv-stack">
                <b>{c.headings.stack}:</b> {p.stack}
              </p>
              <ul>
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section>
          <h2>{c.headings.skills}</h2>
          <dl className="cv-skills">
            {c.skills.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.items}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section>
          <h2>{c.headings.experience}</h2>
          <div className="cv-item">
            <div className="cv-row">
              <h3>
                {c.experience.title}
                <span className="cv-role">, {c.experience.org}</span>
              </h3>
              <span className="cv-date">{c.experience.period}</span>
            </div>
            <ul>
              {c.experience.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2>{c.headings.education}</h2>
          <div className="cv-row">
            <h3>
              {c.education.school}
              <span className="cv-role">, {c.education.degree}</span>
            </h3>
            <span className="cv-date">{c.education.period}</span>
          </div>
        </section>
      </article>
    </div>
  )
}
