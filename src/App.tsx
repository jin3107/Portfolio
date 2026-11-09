import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import NetworkBackground from './components/NetworkBackground'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import { LanguageProvider } from './i18n/LanguageContext'

function App() {
  // Mouse spotlight: updates two CSS vars on the hovered tile, throttled to one write per frame.
  useEffect(() => {
    if (window.matchMedia('(hover: none), (prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const onMove = (e: PointerEvent) => {
      const tile = (e.target as Element).closest?.('.bento-tile') as HTMLElement | null
      if (!tile) return
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const rect = tile.getBoundingClientRect()
        tile.style.setProperty('--mx', `${e.clientX - rect.left}px`)
        tile.style.setProperty('--my', `${e.clientY - rect.top}px`)
      })
    }
    document.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      document.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <LanguageProvider>
      <BrowserRouter>
        <NetworkBackground />
        <Navbar />
        <main className="page-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
