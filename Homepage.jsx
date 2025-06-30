'use client'

import { useState, useEffect, useMemo } from 'react'
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  Download, 
  ExternalLink, 
  Code2,
  Zap,
  User,
  Rocket,
  Target,
  Award,
  Star,
  Briefcase,
  Users,
  TrendingUp,
  Database,
  Smartphone,
  Globe,
  BarChart3,
  ShoppingCart,
  CheckSquare,
  Brain,
  CreditCard,
  Share2,
  Activity,
  Monitor,
  Layers,
  Server,
  Palette,
  Cloud,
  GitBranch,
  Coffee
} from "lucide-react"

// Professional theme configuration with design tokens
const THEME_CONFIG = {
  colors: {
    primary: '#F59E0B',
    primaryHover: '#D97706',
    secondary: '#000000',
    background: '#000000',
    surface: '#1A1A1A',
    surfaceLight: '#2A2A2A',
    border: '#333333',
    text: '#FFFFFF',
    textSecondary: '#E5E7EB',
    textMuted: '#9CA3AF',
    accent: '#F59E0B',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
  },
  animation: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
    },
    easing: {
      ease: 'ease',
      easeIn: 'ease-in',
      easeOut: 'ease-out',
      easeInOut: 'ease-in-out',
    }
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  }
}

// Enhanced project data with proper categorization
const PROJECT_DATA = [
  { 
    title: "E-Commerce Platform", 
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"], 
    description: "Full-stack shopping solution with real-time inventory management",
    icon: ShoppingCart,
    category: "Full-Stack",
    complexity: "High"
  },
  { 
    title: "Task Management App", 
    tech: ["Next.js", "Firebase", "TypeScript"], 
    description: "Collaborative productivity tool with real-time synchronization",
    icon: CheckSquare,
    category: "Frontend",
    complexity: "Medium"
  },
  { 
    title: "AI Analytics Dashboard", 
    tech: ["Python", "React", "TensorFlow", "D3.js"], 
    description: "Machine learning powered data visualization platform",
    icon: Brain,
    category: "Data Science",
    complexity: "High"
  },
  { 
    title: "Mobile Banking App", 
    tech: ["React Native", "Node.js", "MongoDB"], 
    description: "Secure financial interface with biometric authentication",
    icon: CreditCard,
    category: "Mobile",
    complexity: "High"
  },
  { 
    title: "Social Media Dashboard", 
    tech: ["MERN Stack", "Redis", "Socket.io"], 
    description: "Content management system with real-time analytics",
    icon: Share2,
    category: "Full-Stack",
    complexity: "Medium"
  },
  { 
    title: "Performance Analytics", 
    tech: ["Docker", "AWS", "Grafana", "Prometheus"], 
    description: "Real-time monitoring and performance insights platform",
    icon: Activity,
    category: "DevOps",
    complexity: "High"
  }
]

// Enhanced skills data with categories and modern icons
const SKILLS_DATA = [
  { 
    name: 'React', 
    level: 95, 
    icon: Monitor, 
    category: 'Frontend',
    color: '#61DAFB'
  },
  { 
    name: 'Next.js', 
    level: 90, 
    icon: Layers, 
    category: 'Framework',
    color: '#000000'
  },
  { 
    name: 'TypeScript', 
    level: 88, 
    icon: Code2, 
    category: 'Language',
    color: '#3178C6'
  },
  { 
    name: 'Node.js', 
    level: 92, 
    icon: Server, 
    category: 'Backend',
    color: '#339933'
  },
  { 
    name: 'Python', 
    level: 85, 
    icon: Database, 
    category: 'Language',
    color: '#3776AB'
  },
  { 
    name: 'AWS', 
    level: 80, 
    icon: Cloud, 
    category: 'Cloud',
    color: '#FF9900'
  },
  { 
    name: 'UI/UX Design', 
    level: 87, 
    icon: Palette, 
    category: 'Design',
    color: '#FF6B6B'
  },
  { 
    name: 'DevOps', 
    level: 83, 
    icon: GitBranch, 
    category: 'Operations',
    color: '#326CE5'
  }
]

// Stats data with professional metrics
const STATS_DATA = [
  { 
    number: "7+", 
    label: "Years Experience", 
    icon: Rocket,
    description: "Professional development",
    gradient: "from-blue-400 to-blue-600"
  },
  { 
    number: "50+", 
    label: "Projects Completed", 
    icon: Briefcase,
    description: "Successful deliveries",
    gradient: "from-green-400 to-green-600"
  },
  { 
    number: "20+", 
    label: "Happy Clients", 
    icon: Users,
    description: "Satisfied customers",
    gradient: "from-purple-400 to-purple-600"
  },
  { 
    number: "98%", 
    label: "Success Rate", 
    icon: TrendingUp,
    description: "Project completion",
    gradient: "from-amber-400 to-amber-600"
  }
]

// Navigation configuration
const NAV_ITEMS = [
  { value: "about", label: "About", icon: User },
  { value: "portfolio", label: "Work", icon: Briefcase },
  { value: "skills", label: "Skills", icon: Zap },
  { value: "contact", label: "Contact", icon: Mail }
]

// Custom hooks for enhanced functionality
const useAnimatedCounter = (end, duration = 2000) => {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    let startTime = null
    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [end, duration])
  
  return count
}

// Main component with enhanced architecture
export default function ProfessionalPortfolio() {
  const [activeTab, setActiveTab] = useState("about")
  const [hoveredProject, setHoveredProject] = useState(null)
  const [isVisible, setIsVisible] = useState(false)

  // Memoized calculations for performance
  const filteredProjects = useMemo(() => {
    return PROJECT_DATA.sort((a, b) => {
      const complexityOrder = { High: 3, Medium: 2, Low: 1 }
      return complexityOrder[b.complexity] - complexityOrder[a.complexity]
    })
  }, [])

  const skillsByCategory = useMemo(() => {
    return SKILLS_DATA.reduce((acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = []
      acc[skill.category].push(skill)
      return acc
    }, {})
  }, [])

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    )
    
    const target = document.querySelector('#stats-section')
    if (target) observer.observe(target)
    
    return () => observer.disconnect()
  }, [])

  // Enhanced animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-purple-500/3 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10">
        {/* Hero Section with Enhanced Design */}
        <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            {/* Professional Avatar */}
            <div className="relative mb-8 group">
              <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center text-black text-3xl sm:text-4xl font-bold shadow-2xl shadow-amber-500/30 transition-all duration-500 group-hover:shadow-amber-500/50 group-hover:scale-105">
                HN
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-black animate-pulse"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/20 to-transparent blur-xl group-hover:from-amber-400/40 transition-all duration-500"></div>
            </div>

            {/* Enhanced Typography */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-amber-100 to-amber-400 bg-clip-text text-transparent animate-pulse">
              Haris Narrendran
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-400 mb-6 font-light">
              Full-Stack Developer & UI/UX Designer
            </p>
            <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
              Crafting digital experiences that blend beautiful design with powerful functionality.
              Passionate about creating solutions that make a difference in people's lives.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 group">
                <Download className="mr-2 group-hover:animate-bounce" size={20} />
                Download Resume
              </Button>
              <Button className="border-2 border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 group">
                <Mail className="mr-2 group-hover:animate-pulse" size={20} />
                Get In Touch
              </Button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex justify-center space-x-6">
              {[
                { Icon: Github, href: "#", label: "GitHub", color: "hover:text-gray-300" },
                { Icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-400" },
                { Icon: Twitter, href: "#", label: "Twitter", color: "hover:text-sky-400" },
                { Icon: Mail, href: "#", label: "Email", color: "hover:text-red-400" }
              ].map(({ Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  className={`w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 ${color} hover:border-current hover:bg-current/5 transition-all duration-300 hover:scale-110 group`}
                  aria-label={label}
                >
                  <Icon size={20} className="group-hover:animate-pulse" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Navigation & Content */}
        <section className="px-4 sm:px-6 pb-20">
          <div className="max-w-6xl mx-auto">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              {/* Professional Tab Navigation */}
              <div className="flex justify-center mb-16">
                <TabsList className="bg-black/50 backdrop-blur-xl p-2 rounded-2xl border border-gray-800">
                  {NAV_ITEMS.map(({ value, label, icon: Icon }) => (
                    <TabsTrigger
                      key={value}
                      value={value}
                      className="data-[state=active]:bg-amber-500 data-[state=active]:text-black text-gray-400 font-medium px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 hover:text-white group"
                    >
                      <Icon size={18} className="group-hover:animate-pulse" />
                      <span className="hidden sm:inline">{label}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {/* Enhanced About Tab */}
              <TabsContent value="about" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="space-y-6 order-2 lg:order-1">
                    <div>
                      <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-amber-400 bg-clip-text text-transparent">
                        About Me
                      </h2>
                      <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mb-8"></div>
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed">
                      I'm a passionate full-stack developer with 7+ years of experience creating
                      exceptional digital experiences. I specialize in modern web technologies
                      and have a keen eye for design that converts.
                    </p>

                    <p className="text-gray-400 leading-relaxed">
                      My expertise spans from crafting pixel-perfect frontends to building
                      robust backend systems. I believe in writing clean, maintainable code
                      and creating solutions that scale with your business needs.
                    </p>

                    <div className="flex flex-wrap gap-3 pt-4">
                      {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS'].map((tech) => (
                        <span key={tech} className="px-4 py-2 bg-amber-500/10 text-amber-400 rounded-full text-sm border border-amber-500/20 hover:bg-amber-500/20 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-3 rounded-xl mt-8 transition-all duration-300 hover:scale-105 group">
                      <Download className="mr-2 group-hover:animate-bounce" size={18} />
                      Download Resume
                    </Button>
                  </div>

                  {/* Enhanced Stats Grid */}
                  <div id="stats-section" className="grid grid-cols-2 gap-6 order-1 lg:order-2">
                    {STATS_DATA.map(({ number, label, icon: Icon, description, gradient }, index) => {
                      const animatedNumber = useAnimatedCounter(parseInt(number), 2000)
                      
                      return (
                        <div key={label} className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-2xl p-6 text-center hover:border-amber-500/30 transition-all duration-500 hover:scale-105 group">
                          <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center`}>
                            <Icon size={24} className="text-white group-hover:animate-pulse" />
                          </div>
                          <div className="text-3xl font-bold text-amber-400 mb-2">
                            {isVisible ? (number.includes('+') ? `${animatedNumber}+` : number.includes('%') ? `${animatedNumber}%` : number) : '0'}
                          </div>
                          <div className="text-gray-400 text-sm font-medium">{label}</div>
                          <div className="text-gray-500 text-xs mt-1">{description}</div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </TabsContent>

              {/* Enhanced Portfolio Tab */}
              <TabsContent value="portfolio" className="mt-8">
                <div className="text-center mb-12">
                  <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-amber-400 bg-clip-text text-transparent">
                    Featured Work
                  </h2>
                  <p className="text-gray-400 text-lg">A selection of projects that showcase my expertise</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects.map((project, index) => {
                    const IconComponent = project.icon
                    
                    return (
                      <Card
                        key={index}
                        className="bg-gray-900/30 backdrop-blur border border-gray-800 rounded-2xl overflow-hidden hover:border-amber-500/30 transition-all duration-500 hover:scale-105 group cursor-pointer relative"
                        onMouseEnter={() => setHoveredProject(index)}
                        onMouseLeave={() => setHoveredProject(null)}
                      >
                        <div className="absolute top-4 right-4 z-10">
                          <ExternalLink
                            size={18}
                            className={`text-gray-400 transition-all duration-300 ${
                              hoveredProject === index ? 'translate-x-1 -translate-y-1 text-amber-400' : ''
                            }`}
                          />
                        </div>
                        
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                              <IconComponent size={20} className="text-amber-400" />
                            </div>
                            <div>
                              <span className="text-xs text-gray-500 uppercase tracking-wide">{project.category}</span>
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-semibold mb-3 group-hover:text-amber-400 transition-colors">
                            {project.title}
                          </h3>
                          
                          <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                            {project.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <span key={tech} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-lg text-xs hover:bg-gray-700 transition-colors">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </TabsContent>

              {/* Enhanced Skills Tab */}
              <TabsContent value="skills" className="mt-8">
                <div className="text-center mb-12">
                  <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-amber-400 bg-clip-text text-transparent">
                    Skills & Expertise
                  </h2>
                  <p className="text-gray-400 text-lg">Technologies and tools I master</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {SKILLS_DATA.map((skill, index) => {
                    const IconComponent = skill.icon
                    
                    return (
                      <div key={skill.name} className="bg-gray-900/30 backdrop-blur border border-gray-800 rounded-2xl p-6 hover:border-amber-500/30 transition-all duration-300 group">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                              <IconComponent size={20} className="text-amber-400 group-hover:animate-pulse" />
                            </div>
                            <div>
                              <span className="text-lg font-semibold">{skill.name}</span>
                              <div className="text-xs text-gray-500 uppercase tracking-wide">{skill.category}</div>
                            </div>
                          </div>
                          <span className="text-amber-400 font-mono font-bold text-lg">{skill.level}%</span>
                        </div>
                        
                        <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-amber-400 to-amber-600 rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: `${skill.level}%`,
                              transitionDelay: `${index * 100}ms`
                            }}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </TabsContent>

              {/* Enhanced Contact Tab */}
              <TabsContent value="contact" className="mt-8">
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-12">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-amber-400 bg-clip-text text-transparent">
                      Let's Work Together
                    </h2>
                    <p className="text-gray-400 text-lg">Ready to bring your ideas to life? Let's create something amazing.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-gray-900/30 backdrop-blur border border-gray-800 rounded-2xl p-8 hover:border-amber-500/30 transition-all duration-300 hover:scale-105 group">
                      <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4">
                        <Mail className="text-amber-400 group-hover:animate-pulse" size={24} />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Email Me</h3>
                      <p className="text-gray-400 mb-4">Drop me a line and I'll get back to you within 24 hours.</p>
                      <a href="mailto:haris@example.com" className="text-amber-400 hover:text-amber-300 transition-colors font-medium">
                        haris@example.com
                      </a>
                    </div>

                    <div className="bg-gray-900/30 backdrop-blur border border-gray-800 rounded-2xl p-8 hover:border-amber-500/30 transition-all duration-300 hover:scale-105 group">
                      <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4">
                        <Linkedin className="text-amber-400 group-hover:animate-pulse" size={24} />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
                      <p className="text-gray-400 mb-4">Let's connect and discuss opportunities.</p>
                      <a href="#" className="text-amber-400 hover:text-amber-300 transition-colors font-medium">
                        @harisnarrendran
                      </a>
                    </div>
                  </div>

                  <div className="text-center">
                    <Button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-12 py-4 rounded-2xl text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 group">
                      <Mail className="mr-2 group-hover:animate-bounce" size={20} />
                      Start a Project
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </div>

      {/* Enhanced Footer */}
      <footer className="border-t border-gray-800 bg-gray-900/20 backdrop-blur py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Coffee size={20} className="text-amber-400" />
            <span className="text-gray-500">
              © 2025 Haris Narrendran. Crafted with ❤️ and lots of ☕
            </span>
          </div>
          <p className="text-gray-600 text-sm">
            Building the future, one line of code at a time.
          </p>
        </div>
      </footer>
    </div>
  )
}