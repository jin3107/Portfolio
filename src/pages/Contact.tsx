import SocialLinks from '../components/SocialLinks'
import { contact } from '../data/portfolio'
import { useLanguage } from '../i18n/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <div className="bento-grid">
      <section className="bento-tile bento-page-header">
        <span className="bento-tag">✉️ Contact</span>
        <h1>{t.contact.title}</h1>
        <p>{t.contact.description}</p>
      </section>

      <div className="bento-tile bento-contact-card">
        <h3>{t.contact.emailLabel}</h3>
        <p>{contact.email}</p>
        <a className="contact-btn" href={`mailto:${contact.email}`}>
          {t.contact.sendEmail}
        </a>
      </div>

      <a
        className="bento-tile bento-contact-card"
        href={contact.address.mapLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>{t.contact.addressTitle}</h3>
        <p>{t.contact.addressSubtitle}</p>
      </a>

      <div className="bento-tile bento-contact-card">
        <h3>{t.contact.socialLabel}</h3>
        <SocialLinks />
      </div>
    </div>
  )
}
