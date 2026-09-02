import type { CSSProperties } from 'react'
import { socialLinks } from '../data/portfolio'

export default function SocialLinks() {
  return (
    <div className="social-links">
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
