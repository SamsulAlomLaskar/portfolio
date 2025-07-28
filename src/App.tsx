"use client"

import { useSelector } from "react-redux"
import type { RootState } from "./store/store"
import Navigation from "./components/Navigation"
import Hero from "./components/sections/Hero"
import About from "./components/sections/About"
import Skills from "./components/sections/Skills"
import Projects from "./components/sections/Projects"
import Experience from "./components/sections/Experience"
import Contact from "./components/sections/Contact"
import { useEffect } from "react"
import Resume from "./components/sections/Resume"

function App() {
  const { isDark } = useSelector((state: RootState) => state.theme)
  const { activeSection } = useSelector((state: RootState) => state.portfolio)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <Hero />
      case "about":
        return <About />
      case "skills":
        return <Skills />
      case "projects":
        return <Projects />
      case "experience":
        return <Experience />
      case "resume":
        return <Resume />
      case "contact":
        return <Contact />
      default:
        return <Hero />
    }
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <Navigation />
      <main className="pt-16">{renderSection()}</main>
    </div>
  )
}

export default App
