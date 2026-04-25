import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import portfolioData from './data/portfolioData.json'

function App() {
  return (
    <>
      <Navbar name={portfolioData.personal.name} />
      <main>
        <Hero personal={portfolioData.personal} />
        <About summary={portfolioData.personal.summary} collaboration={portfolioData.personal.collaboration} />
        <Experience experiences={portfolioData.experience} />
        <Projects projects={portfolioData.projects} />
        <Skills skills={portfolioData.skills} />
        <Contact personal={portfolioData.personal} />
      </main>
      <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid var(--glass-border)', color: 'var(--text-secondary)' }}>
        <p>© {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
