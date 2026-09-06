import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'
import { useLanguage } from '../i18n/LanguageContext'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'navbar-link active' : 'navbar-link'

export default function Navbar() {
  const { t } = useLanguage()

  return (
    <header className="navbar">
      <NavLink to="/" className="navbar-logo">
        {t.greeting.nickname}
      </NavLink>
      <nav className="navbar-links">
        <NavLink to="/" end className={navLinkClass}>
          {t.nav.home}
        </NavLink>
        <NavLink to="/projects" className={navLinkClass}>
          {t.nav.projects}
        </NavLink>
        <NavLink to="/contact" className={navLinkClass}>
          {t.nav.contact}
        </NavLink>
      </nav>
      <div className="navbar-actions">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </header>
  )
}
