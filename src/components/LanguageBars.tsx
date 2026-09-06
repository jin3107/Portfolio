const LANGUAGE_COLORS: Record<string, string> = {
  'C#': '#178600',
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  HTML: '#e34c26',
  CSS: '#563d7c',
  SCSS: '#c6538c',
  Python: '#3572A5',
  Java: '#b07219',
  'C++': '#f34b7d',
  Go: '#00ADD8',
  PHP: '#4F5D95',
  Ruby: '#701516',
  Shell: '#89e051',
  Dockerfile: '#384d54',
}

const FALLBACK_COLOR = '#8b8b8b'

type LanguageBarsProps = {
  languages: string[]
  title: string
}

export default function LanguageBars({ languages, title }: LanguageBarsProps) {
  const counts = new Map<string, number>()
  for (const lang of languages) {
    counts.set(lang, (counts.get(lang) ?? 0) + 1)
  }
  const total = languages.length
  const sorted = [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 6)

  if (total === 0 || sorted.length === 0) return null

  return (
    <div className="language-bars">
      <h3 className="language-bars-title">{title}</h3>
      <div className="language-bars-track">
        {sorted.map(([lang, count]) => (
          <span
            key={lang}
            className="language-bars-segment"
            style={{
              width: `${(count / total) * 100}%`,
              backgroundColor: LANGUAGE_COLORS[lang] ?? FALLBACK_COLOR,
            }}
          />
        ))}
      </div>
      <ul className="language-bars-legend">
        {sorted.map(([lang, count]) => (
          <li key={lang}>
            <span
              className="language-bars-dot"
              style={{ backgroundColor: LANGUAGE_COLORS[lang] ?? FALLBACK_COLOR }}
            />
            {lang} {((count / total) * 100).toFixed(1)}%
          </li>
        ))}
      </ul>
    </div>
  )
}
