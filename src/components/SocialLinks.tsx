import type { CSSProperties, ReactNode } from 'react'
import { Download, Mail } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { socialLinks } from '../data/portfolio'
import { cvFile } from '../data/cv'
import { useLanguage } from '../i18n/LanguageContext'

const iconMap: Record<string, ReactNode> = {
  GitHub: <FaGithub size={16} />,
  LinkedIn: <FaLinkedinIn size={16} />,
  Gmail: <Mail size={16} />,
}

export default function SocialLinks({ showCv = false }: { showCv?: boolean }) {
  const { t, lang } = useLanguage()
  return (
    <div className="social-links">
      {showCv && (
        <a className="social-link btn-primary" href={cvFile(lang)} download>
          <Download size={16} /> {t.home.downloadCv}
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
          {iconMap[social.name]} {social.name}
        </a>
      ))}
    </div>
  )
}
