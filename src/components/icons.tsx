type IconProps = { className?: string }

const base = {
  width: 14,
  height: 14,
  viewBox: '0 0 16 16',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function StarIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M8 1.5l1.9 3.85 4.25.62-3.08 3 .73 4.23L8 11.2l-3.8 2 .73-4.23-3.08-3 4.25-.62L8 1.5z" />
    </svg>
  )
}

export function ForkIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="4" cy="3.2" r="1.6" />
      <circle cx="12" cy="3.2" r="1.6" />
      <circle cx="8" cy="12.8" r="1.6" />
      <path d="M4 4.8v1.4a2.4 2.4 0 0 0 2.4 2.4h3.2A2.4 2.4 0 0 0 12 6.2V4.8" />
      <path d="M8 8.6v2.6" />
    </svg>
  )
}

export function IssueIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="8" cy="8" r="6" />
      <circle cx="8" cy="8" r="2" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="8" cy="8" r="6" />
      <path d="M8 4.8V8l2.4 1.4" />
    </svg>
  )
}
