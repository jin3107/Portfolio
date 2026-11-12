import { Star, GitFork, CircleDot, Clock, type LucideProps } from 'lucide-react'

const defaults = { size: 14, strokeWidth: 1.8 }

export const StarIcon = (p: LucideProps) => <Star {...defaults} {...p} />
export const ForkIcon = (p: LucideProps) => <GitFork {...defaults} {...p} />
export const IssueIcon = (p: LucideProps) => <CircleDot {...defaults} {...p} />
export const ClockIcon = (p: LucideProps) => <Clock {...defaults} {...p} />
