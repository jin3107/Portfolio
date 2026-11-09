import { useEffect, useState } from 'react'

const TYPE_MS = 70
const DELETE_MS = 35
const HOLD_MS = 1500

// Types and deletes each role in turn. One tiny state update every ~50ms, scoped to this span.
export default function TypedRole({ roles }: { roles: string[] }) {
  const [text, setText] = useState('')
  const reduced =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (reduced || roles.length === 0) return
    let index = 0
    let length = 0
    let deleting = false
    let timer = 0

    const tick = () => {
      const word = roles[index % roles.length]
      length += deleting ? -1 : 1
      setText(word.slice(0, length))

      let delay = deleting ? DELETE_MS : TYPE_MS
      if (!deleting && length === word.length) {
        deleting = true
        delay = HOLD_MS
      } else if (deleting && length === 0) {
        deleting = false
        index += 1
        delay = 300
      }
      timer = window.setTimeout(tick, delay)
    }

    timer = window.setTimeout(tick, 400)
    return () => window.clearTimeout(timer)
  }, [roles, reduced])

  return (
    <>
      <span>{reduced ? roles[0] : text}</span>
      <span className="cursor" aria-hidden="true" />
    </>
  )
}
