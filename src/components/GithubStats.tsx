import { useEffect, useState } from 'react'
import { greeting } from '../data/portfolio'

type Stats = {
  publicRepos: number
  followers: number
  following: number
  memberSince: number
}

const githubUsername = greeting.githubProfile.replace(/\/$/, '').split('/').pop()

export default function GithubStats() {
  const [stats, setStats] = useState<Stats | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(`https://api.github.com/users/${githubUsername}`)
      .then((res) => {
        if (!res.ok) throw new Error('GitHub API error')
        return res.json()
      })
      .then((data) => {
        setStats({
          publicRepos: data.public_repos,
          followers: data.followers,
          following: data.following,
          memberSince: new Date(data.created_at).getFullYear(),
        })
      })
      .catch(() => setError(true))
  }, [])

  if (error || !stats) return null

  const cards = [
    { label: 'Public Repos', value: stats.publicRepos },
    { label: 'Followers', value: stats.followers },
    { label: 'Following', value: stats.following },
    { label: 'Trên GitHub từ', value: stats.memberSince },
  ]

  return (
    <div className="github-stats-grid">
      {cards.map((card) => (
        <a
          key={card.label}
          className="github-stats-card"
          href={greeting.githubProfile}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="github-stats-value">{card.value}</p>
          <p className="github-stats-label">{card.label}</p>
        </a>
      ))}
    </div>
  )
}
