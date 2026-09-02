import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { greeting } from '../data/portfolio'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'navbar-link active' : 'navbar-link'

export default function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="navbar-logo">
        {greeting.nickname}
      </NavLink>
      <nav className="navbar-links">
        <NavLink to="/" end className={navLinkClass}>
          Home
        </NavLink>
        <NavLink to="/projects" className={navLinkClass}>
          Projects
        </NavLink>
        <NavLink to="/contact" className={navLinkClass}>
          Contact
        </NavLink>
      </nav>
      <ThemeToggle />
    </header>
  )
}
