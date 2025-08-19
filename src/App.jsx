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

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
