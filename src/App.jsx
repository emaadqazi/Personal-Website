import { useMemo } from 'react'
import Navbar from './components/Navbar.jsx'
import Background from './components/Background.jsx'
import About from './sections/About.jsx'
import Experiences from './sections/Experiences.jsx'
import Resume from './sections/Resume.jsx'
import Recent from './sections/Recent.jsx'
import Contact from './sections/Contact.jsx'

export default function App() {
  const sectionOrder = useMemo(
    () => ['about', 'experiences', 'resume', 'recent', 'contact'],
    []
  )

  return (
    <div className="relative min-h-screen font-sans">
      <Background />
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-100">
        <div className="container-default">
          <Navbar sectionIds={sectionOrder} />
        </div>
      </header>

      <main className="container-default space-y-32 py-16">
        <About id="about" />
        <Experiences id="experiences" />
        <Resume id="resume" />
        <Recent id="recent" />
        <Contact id="contact" />
      </main>

      <footer className="mt-24 pb-12 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Emaad Qazi. All rights reserved.
      </footer>
    </div>
  )
}
