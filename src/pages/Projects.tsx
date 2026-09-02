import { useEffect, useState } from 'react'
import { greeting } from '../data/portfolio'
import { StarIcon, ForkIcon, IssueIcon, ClockIcon } from '../components/icons'

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

function timeAgo(dateString: string) {
  const days = Math.floor((Date.now() - new Date(dateString).getTime()) / 86_400_000)
  if (days < 1) return 'Hôm nay'
  if (days < 30) return `${days} ngày trước`
  const months = Math.floor(days / 30)
  if (months < 12) return `${months} tháng trước`
  return `${Math.floor(months / 12)} năm trước`
}

export default function Projects() {
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

  return (
    <div className="bento-grid">
      <section className="bento-tile bento-page-header">
        <span className="bento-tag">🚀 Projects</span>
        <h1>Dự án trên GitHub</h1>
        <p>Một số repository gần đây của tôi, chủ yếu xoay quanh ASP.NET Core + React.</p>
      </section>

      {error && (
        <p className="bento-error">
          Không tải được danh sách dự án, ghé{' '}
          <a href={greeting.githubProfile} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>{' '}
          trực tiếp nhé.
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
            <span className="bento-tag bento-tag-wip">🚧 Đang phát triển</span>
          )}
          <h3>{repo.name}</h3>
          <p>{repo.description ?? 'Chưa có mô tả.'}</p>
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
              <ClockIcon /> {timeAgo(repo.pushed_at)}
            </span>
          </div>
        </a>
      ))}
    </div>
  )
}
