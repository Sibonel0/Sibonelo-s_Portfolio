'use client'

import { motion } from 'motion/react'
import { useState, useEffect } from 'react'

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Detect active section
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/5 backdrop-blur-2xl border-b border-white/20 shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white text-xl font-medium"
          >
            Welcome to My Portfolio
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-3">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item, index) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => scrollToSection(item)}
                className={`relative px-6 py-2.5 rounded-full capitalize overflow-hidden group transition-all duration-300 ${
                  activeSection === item 
                    ? 'text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {/* Glass background layer */}
                <div className={`absolute inset-0 rounded-full transition-all duration-300 backdrop-blur-md ${
                  activeSection === item
                    ? 'bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 border border-white/30'
                    : 'bg-white/5 border border-white/10 group-hover:bg-gradient-to-r group-hover:from-cyan-500/20 group-hover:via-blue-500/20 group-hover:to-purple-500/20 group-hover:border-white/20'
                }`} />
                
                {/* Animated neon glow */}
                <div className={`absolute inset-0 rounded-full blur-xl transition-all duration-300 ${
                  activeSection === item
                    ? 'bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 opacity-60 animate-pulse'
                    : 'bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 opacity-0 group-hover:opacity-40'
                }`} />
                
                {/* Text */}
                <span className="relative z-10 font-medium tracking-wide">
                  {item}
                </span>
                
                {/* Bottom neon line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: activeSection === item ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}