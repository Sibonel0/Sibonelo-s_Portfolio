'use client'

import { motion } from 'motion/react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { ExternalLink, Github } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import SDMS from './images/SDMS.jpg'
import NBS from './images/NBS.jpg'
import SLAEWS from './images/SLAEWS.png'

export function ProjectsSection() {
  const projects = [
    {
      title: 'Fragrance E-commerce Platform',
      description: 'Fragrance1 is a Next.js + React fragrance storefront built with TypeScript and Tailwind CSS. It features a polished homepage, category/product browsing, search overlay, authentication pages, and profile management. I built it to showcase a modern, scalable e-commerce UI with reusable components and clean app routing. The project demonstrates my skills in frontend development, UI/UX design, and building responsive web applications.',
      image: 'https://images.unsplash.com/photo-1719175936556-dbd05e415913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlfGVufDF8fHx8MTc2ODc1MDExMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Firebase'],
      github: 'https://github.com/Sibonel0/fragrance1',
      live: '#',
      featured: true
    },
    {
      title: 'Supplier Database Management System',
      description: 'Built a modern supplier management portal using Next.js and Express, featuring authenticated access, supplier CRUD workflows, advanced search and filtering, export to Excel, and robust role-aware dashboard analytics. The app demonstrates full-stack integration, secure password handling, and user-friendly UI components such as modals and toast notifications.',
      image: SDMS,
      technologies: ['React', 'Node.js', 'Next.js', 'PostgreSQL', 'Tailwind CSS', 'Bootstrap', 'JSON Web Tokens (JWT)', 'Express.js'],
      github: 'https://github.com/Sibonel0/supplier',
      live: '#',
      featured: true
    },
    {
      title: 'Bottle Store',
      description: 'BottleStore is a full-stack mobile retail app built with React Native and a Node.js/Express backend, designed to manage beverage inventory, track damaged stock, process payments, and summarize daily revenue through a polished mobile UI and secure authentication flow, showcasing practical end-to-end development skills in mobile UX, API design, and business-focused retail operations.',
      image: NBS,
      technologies: ['React Native', 'PostgreSQL', 'Node.js, Render', 'Tailwind', 'Express.js'],
      github: 'https://github.com/Sibonel0/BottleStore',
      live: '#',
      featured: false
    },
    {
      title: 'Service Level Agreement Early Warning System',
      description: 'The SLAEWS is a full-stack web application designed to help businesses proactively monitor and manage service level agreements (SLAs) for support tickets. The system tracks ticket creation times and SLA durations, then dynamically calculates real-time status indicators such as safe, warning, high risk, and breached based on time progression. It provides an interactive dashboard built with React that visualizes operational health through KPI cards, SLA countdowns, and analytics such as risk distribution, breach rate, and average SLA usage. The backend, built with Node.js and Express, integrates with Firebase Firestore for data storage and includes a custom SLA logic engine that evaluates ticket urgency and predicts potential breaches. By combining real-time tracking, prioritization, and actionable insights, the system enables teams to identify risks early, prioritize critical tasks, and improve overall service performance.',
      image: SLAEWS,
      technologies: ['TypeScript', 'Javascript', 'React', 'Vite', 'Postman', 'REST API', 'Node.js', 'Express', 'Firebase', 'Recharts', 'Tailwind CSS'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'AI Chat Interface',
      description: 'An intelligent chat interface with natural language processing, context awareness, and multi-language support.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop',
      technologies: ['React', 'OpenAI API', 'Node.js', 'WebSocket'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website with smooth animations, dark theme, and optimized performance built with modern web technologies.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'Framer Motion', 'Tailwind', 'TypeScript'],
      github: 'https://github.com/Sibonel0/Sibonelo-s_Portfolio',
      live: '#',
      featured: false
    }
  ]

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for web development
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="group bg-white/5 backdrop-blur-xl border-white/20 shadow-2xl shadow-black/30 overflow-hidden hover:border-emerald-500/50 hover:shadow-emerald-500/10 transition-all duration-500">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/60 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-emerald-500/30 hover:border-emerald-500/50 transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-emerald-500/30 hover:border-emerald-500/50 transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
                
                <div className="p-6 bg-black/30 backdrop-blur-sm">
                  <h3 className="text-xl text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-emerald-500/20 backdrop-blur-sm text-emerald-400 rounded-full text-sm border border-emerald-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl text-white text-center mb-8">Other Projects</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="group bg-white/5 backdrop-blur-xl border-white/20 shadow-2xl shadow-black/30 hover:bg-white/10 hover:border-white/30 hover:shadow-cyan-500/10 transition-all duration-300 h-full">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute top-3 right-3 flex space-x-2">
                    <a
                      href={project.github}
                      className="w-8 h-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-emerald-500/30 hover:border-emerald-500/50 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.live}
                      className="w-8 h-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-emerald-500/30 hover:border-emerald-500/50 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                
                <div className="p-4 bg-black/20 backdrop-blur-sm">
                  <h4 className="text-lg text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            variant="outline" 
            className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 px-8 py-3"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  )
}