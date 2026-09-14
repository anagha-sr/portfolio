
import './App.css'
import Footer from './components/Footer.tsx'
import Header from './components/Header.tsx'
import Hero from './components/Hero.tsx'
import Projects from './components/Projects.tsx'
import SkillSection from './components/SkillsSection.tsx'
import { Analytics } from '@vercel/analytics/next';

function App() {

  return (
    <>
        <Header />
        <main className="main">
        <Hero />
        <Projects  />
        <SkillSection />
        </main>
        <Footer />
        <Analytics />
    </>
  )
}

export default App
