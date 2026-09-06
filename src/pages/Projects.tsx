import { useEffect, useState } from 'react'
import { greeting } from '../data/portfolio'
import { StarIcon, ForkIcon, IssueIcon, ClockIcon } from '../components/icons'
import LanguageBars from '../components/LanguageBars'
import { useLanguage } from '../i18n/LanguageContext'
import type { Lang } from '../i18n/translations'

type Repo = {
  id: number
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  forks_count: number
  open_issues_count: number
  language: string | null
  fork: boolean
  pushed_at: string
  topics: string[]
}

const githubUsername = greeting.githubProfile.replace(/\/$/, '').split('/').pop()

function timeAgo(dateString: string, lang: Lang) {
  const days = Math.floor((Date.now() - new Date(dateString).getTime()) / 86_400_000)
  if (lang === 'vi') {
    if (days < 1) return 'Hôm nay'
    if (days < 30) return `${days} ngày trước`
    const months = Math.floor(days / 30)
    if (months < 12) return `${months} tháng trước`
    return `${Math.floor(months / 12)} năm trước`
  }
  if (days < 1) return 'Today'
  if (days < 30) return `${days}d ago`
  const months = Math.floor(days / 30)
  if (months < 12) return `${months}mo ago`
  return `${Math.floor(months / 12)}y ago`
}

export default function Projects() {
  const { t, lang } = useLanguage()
  const [repos, setRepos] = useState<Repo[] | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=12`)
      .then((res) => {
        if (!res.ok) throw new Error('GitHub API error')
        return res.json()
      })
      .then((data: Repo[]) => setRepos(data.filter((repo) => !repo.fork)))
      .catch(() => setError(true))
  }, [])

  const totalStars = repos?.reduce((sum, repo) => sum + repo.stargazers_count, 0) ?? 0
  const totalForks = repos?.reduce((sum, repo) => sum + repo.forks_count, 0) ?? 0
  const languages = repos?.map((repo) => repo.language).filter((l): l is string => l !== null) ?? []

  return (
    <div className="bento-grid">
      <section className="bento-tile bento-page-header">
        <div className="bento-page-header-text">
          <span className="bento-tag">🚀 Projects</span>
          <h1>{t.projects.header}</h1>
          <p>{t.projects.description}</p>
        </div>
        {repos && repos.length > 0 && (
          <div className="bento-page-header-stats">
            <LanguageBars languages={languages} title={t.projects.languagesTitle} />
            <div className="repo-stat-grid">
              <div className="repo-stat-cell">
                <p className="repo-stat-value">{repos.length}</p>
                <p className="repo-stat-label">{t.projects.totalRepos}</p>
              </div>
              <div className="repo-stat-cell">
                <p className="repo-stat-value">{totalStars}</p>
                <p className="repo-stat-label">{t.projects.totalStars}</p>
              </div>
              <div className="repo-stat-cell">
                <p className="repo-stat-value">{totalForks}</p>
                <p className="repo-stat-label">{t.projects.totalForks}</p>
              </div>
            </div>
          </div>
        )}
      </section>

      {error && (
        <p className="bento-error">
          {t.projects.loadError}{' '}
          <a href={greeting.githubProfile} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>{' '}
          {t.projects.loadErrorSuffix}
        </p>
      )}

      {repos?.map((repo) => (
        <a
          key={repo.id}
          className="bento-tile bento-project"
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {repo.topics?.includes('wip') && (
            <span className="bento-tag bento-tag-wip">{t.projects.wip}</span>
          )}
          <h3>{repo.name}</h3>
          <p>{repo.description ?? t.projects.noDescription}</p>
          <div className="bento-meta bento-project-meta">
            {repo.language && <span className="stat-chip">{repo.language}</span>}
            <span className="stat-chip">
              <StarIcon /> {repo.stargazers_count}
            </span>
            <span className="stat-chip">
              <ForkIcon /> {repo.forks_count}
            </span>
            <span className="stat-chip">
              <IssueIcon /> {repo.open_issues_count}
            </span>
            <span className="stat-chip">
              <ClockIcon /> {timeAgo(repo.pushed_at, lang)}
            </span>
          </div>
        </a>
      ))}
    </div>
  )
}
