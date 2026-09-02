import SocialLinks from '../components/SocialLinks'
import { contact } from '../data/portfolio'

export default function Contact() {
  return (
    <div className="bento-grid">
      <section className="bento-tile bento-page-header">
        <span className="bento-tag">✉️ Contact</span>
        <h1>{contact.title}</h1>
        <p>{contact.description}</p>
      </section>

      <div className="bento-tile bento-contact-card">
        <h3>Email</h3>
        <p>{contact.email}</p>
        <a className="contact-btn" href={`mailto:${contact.email}`}>
          Gửi email
        </a>
      </div>

      <a
        className="bento-tile bento-contact-card"
        href={contact.address.mapLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>{contact.address.title}</h3>
        <p>{contact.address.subtitle}</p>
      </a>

      <div className="bento-tile bento-contact-card">
        <h3>Mạng xã hội</h3>
        <SocialLinks />
      </div>
    </div>
  )
}
