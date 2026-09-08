import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import { LanguageProvider } from './i18n/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
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
