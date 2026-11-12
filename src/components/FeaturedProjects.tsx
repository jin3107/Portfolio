import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { greeting } from '../data/portfolio'
import { StarIcon, ForkIcon } from './icons'
import { useLanguage } from '../i18n/LanguageContext'

type Repo = {
  id: number
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string | null
  fork: boolean
  pushed_at: string
}

const githubUsername = greeting.githubProfile.replace(/\/$/, '').split('/').pop()
const PASTELS = ['pastel-green', 'pastel-blue', 'pastel-pink']

export default function FeaturedProjects() {
  const { t } = useLanguage()
  const [repos, setRepos] = useState<Repo[]>([])

  useEffect(() => {
    fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=30`)
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error('GitHub API error'))))
      .then((data: Repo[]) => {
        const featured = data
          .filter((repo) => !repo.fork && repo.description && repo.name.toLowerCase() !== githubUsername?.toLowerCase())
          .sort(
            (a, b) =>
              b.stargazers_count - a.stargazers_count ||
              new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime(),
          )
          .slice(0, 3)
        setRepos(featured)
      })
      .catch(() => setRepos([]))
  }, [])

  if (repos.length === 0) return null

  return (
    <>
      <div className="bento-section-title">
        <span className="section-index">02</span>
        <h2>{t.home.projectsTitle}</h2>
        <Link to="/projects" className="section-link">
          {t.home.viewAll} <ArrowRight size={14} />
        </Link>
      </div>
      {repos.map((repo, index) => (
        <a
          key={repo.id}
          className={`bento-tile bento-featured ${PASTELS[index % PASTELS.length]}`}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {repo.language && <span className="bento-tag">{repo.language}</span>}
          <h3>{repo.name}</h3>
          <p>{repo.description}</p>
          <div className="bento-meta bento-project-meta">
            <span className="stat-chip">
              <StarIcon /> {repo.stargazers_count}
            </span>
            <span className="stat-chip">
              <ForkIcon /> {repo.forks_count}
            </span>
          </div>
        </a>
      ))}
    </>
  )
}
