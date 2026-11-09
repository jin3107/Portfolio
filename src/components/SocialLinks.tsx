import type { CSSProperties } from 'react'
import { socialLinks, cv } from '../data/portfolio'
import { useLanguage } from '../i18n/LanguageContext'

export default function SocialLinks({ showCv = false }: { showCv?: boolean }) {
  const { t } = useLanguage()
  return (
    <div className="social-links">
      {showCv && cv.enabled && (
        <a className="social-link btn-primary" href={cv.file} download>
          {t.home.downloadCv}
        </a>
      )}
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          style={{ '--social-color': social.color } as CSSProperties}
        >
          {social.name}
        </a>
      ))}
    </div>
  )
}
