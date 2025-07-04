'use client'

import { useState, useEffect, useMemo } from 'react'
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search, X } from "lucide-react"
import PROJECT_DATA from "@/data/projects"
import SKILLS_DATA from "@/data/skills"
import COURSE_DATA from "@/data/courses"
import Link from "next/link"
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
  Coffee,
  GraduationCap,
  Sparkle,
  Settings,
  Satellite,
  Code,
  Function,
  Pi,
  Calculator,
  Sigma,
  Atom,
  CircuitBoard,
  Cpu,
  FlaskConical,
  Waves,
  Thermometer
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

const getDifficultyColor = (difficulty) => {
  switch (difficulty) {
    case 'Advanced': return 'text-red-400 bg-red-400/10 border-red-400/20'
    case 'Intermediate': return 'text-blue-400 bg-blue-400/10 border-blue-400/20'
    case 'Beginner': return 'text-green-400 bg-green-400/10 border-green-400/20'
    default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20'
  }
}


const getSkillProficiency = (level) => {
  if (level >= 90) return { label: "Virtuoso", color: "text-green-400" }
  if (level >= 70) return { label: "Practitioner", color: "text-purple-400" }
  return { label: "Explorer", color: "text-gray-400" }
}

// Navigation configuration
const NAV_ITEMS = [
  { value: "about", label: "About", icon: User },
  { value: "portfolio", label: "Projects", icon: Code2 },
  { value: "skills", label: "Skills", icon: Sparkle },
  {value: "courses", label: "Courses", icon: GraduationCap },
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
  useEffect(() => {
    const hash = window.location.hash
    if (hash === "#courses") {
      setActiveTab("courses")
    } else if (hash === "#portfolio") {
      setActiveTab("portfolio")
    } else if (hash === "#skills") {
      setActiveTab("skills")
    } else {
      setActiveTab("about")
    }
  }, [])
  const [hoveredProject, setHoveredProject] = useState(null)
  const [hoveredCourse, setHoveredCourse] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState("") // Add this missing state
  // Memoized calculations for performance
  const filteredProjects = useMemo(() => {
    return PROJECT_DATA.sort((a, b) => {
      if (a.complexity === "High" && b.complexity !== "High") return -1
      if (a.complexity !== "High" && b.complexity === "High") return 1
      return 0
    })
  }, [])

  const filteredCourses = useMemo(() => {
    return COURSE_DATA.sort((a, b) => {
      const difficultyOrder = { Advanced: 3, Intermediate: 2, Beginner: 1 }
      return difficultyOrder[b.difficulty] - difficultyOrder[a.difficulty]
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

    const handleSearch = (query) => {
    console.log('Search query:', query)
    // Add your search logic here
    // This function will be called when user types in the search input
  }

  // Clear search
  const clearSearch = () => {
    setSearchQuery("")
    setShowSearch(false)
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-purple-500/3 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4">
        <div className={`transition-all duration-300 ${showSearch ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
          <div className="relative">
            <Input
              type="text"
              placeholder="Search projects, skills, courses..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                handleSearch(e.target.value)
              }}
              className="w-full bg-gray-900/90 backdrop-blur-xl border-gray-700 rounded-2xl pl-12 pr-12 py-3 text-white placeholder-gray-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Search Toggle Button */}
      <button
        onClick={() => setShowSearch(!showSearch)}
        className="fixed top-4 right-4 z-50 w-12 h-12 bg-gray-900/90 backdrop-blur-xl border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-amber-400 hover:border-amber-500/50 transition-all duration-300 hover:scale-110 group"
      >
        <Search size={18} className="group-hover:animate-pulse" />
      </button>
      {/* Main Content Container */}
      <div className="relative z-10">
        {/* Hero Section with Enhanced Design */}
        {/* Hero Section with Enhanced Design */}
        <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 py-16 sm:py-0">
          <div className="text-center max-w-4xl mx-auto w-full">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-8 sm:mb-12 group">
              {/* Glowing Amber Background Circle */}
              <div className="absolute inset-0 rounded-full bg-amber-500 z-0 group-hover:scale-105 transition-transform duration-500" />

              {/* Profile Image */}
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden">
                <img
                  src="/Formals.png"
                  alt="Haris Narrendran - Professional Profile"
                  className="w-full h-full object-cover filter contrast-100 brightness-100"
                />
              </div>
            </div>

            {/* Enhanced Typography */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-amber-100 to-amber-400 bg-clip-text text-transparent animate-pulse leading-tight">
              Haris Narrendran
            </h1>
            
            <p className="text-base sm:text-lg md:text-2xl lg:text-3xl text-gray-400 mb-4 sm:mb-6 font-light px-2 sm:px-4">
              <span className="block sm:inline">Undergraduate @ IIT Bombay</span>
              <span className="hidden sm:inline"> | </span>
              <span className="block sm:inline">AI Researcher</span>
              <span className="hidden sm:inline"> | </span>
              <span className="block sm:inline">Backend Developer</span>
            </p>
            
            <p className="text-gray-500 max-w-2xl mx-auto mb-8 sm:mb-12 text-base sm:text-lg leading-relaxed px-4 sm:px-0">
              I'm a third-year student passionate about building intelligent systems — from AI models to backend services and applied machine learning pipelines.
            </p>

            {/* Enhanced Social Links */}
            <div className="flex justify-center space-x-4 sm:space-x-6 px-4">
              {[
                { Icon: Github, href: "#", label: "GitHub", color: "hover:text-gray-300" },
                { Icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-400" },
                { Icon: Mail, href: "#", label: "Email", color: "hover:text-red-400" }
              ].map(({ Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 ${color} hover:border-current hover:bg-current/5 transition-all duration-300 hover:scale-110 group`}
                  aria-label={label}
                >
                  <Icon size={18} className="sm:w-5 sm:h-5 group-hover:animate-pulse" />
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
                <div className=" items-center">
                    <div className="space-y-6 order-2 lg:order-1">
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-amber-400 bg-clip-text text-transparent">
                        About Me
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mb-8"></div>
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed">
                        I'm Haris Narrendran, an undergraduate at IIT Bombay in Engineering Physics, and pursuing a dual minor in Artificial Intelligence & Data Science  and  Computer Science.
                    </p>

                    <p className="text-gray-400 leading-relaxed">
                        I'm deeply interested in Artificial Intelligence, especially areas like computer vision, generative models. I enjoy exploring how learning algorithms can model complex real-world systems in science, engineering, and decision-making.
                    </p>

                    <p className="text-gray-400 leading-relaxed">
                        My focus lies in developing performant, backend-driven systems that scale. I’m also drawn to the intersection of AI and real-time applications — from intelligent agents to low-level systems that integrate AI models with APIs, robotics, or optimization tasks.
                    </p>

                    <div className="flex flex-wrap gap-3 pt-4">
                        {['Artificial Intelligence', 'Backend Systems', 'Computer Vision', 'Diffusion Models', 'Recommender System', 'Data Structures'].map((interest) => (
                        <span key={interest} className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700 hover:bg-gray-700 transition-colors">
                            {interest}
                        </span>
                        ))}
                    </div>

                    <Button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-3 rounded-xl mt-8 transition-all duration-300 hover:scale-105 group">
                        <Download className="mr-2 group-hover:animate-bounce" size={18} />
                        Download Resume
                    </Button>
                    </div>
                </div>
                </TabsContent>


              {/* Enhanced Project Tab */}
              <TabsContent value="portfolio" className="mt-8">
                <div className="items-center mb-12">
                  <h2 className="text-4xl lg:text-5xl font-bold mb-4 ">
                    Featured Work
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mb-8"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects.map((project, index) => {
                    const IconComponent = project.icon
                    
                    return (
                      <Link href={`/projects/${project.code}`}>
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
                          
                          <h3 className="text-xl font-semibold mb-3 text-amber-400 transition-colors">
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
                      </Link>
                    )
                  })}
                </div>
              </TabsContent>

              <TabsContent value="skills" className="mt-8">
                <div className="items-center mb-12">
                  <h2 className="text-4xl lg:text-5xl font-bold mb-4 ">
                    Skills
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mb-8"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {SKILLS_DATA.map((skill, index) => {
                    const IconComponent = skill.icon
                    const proficiency = getSkillProficiency(skill.level)
                    
                    return (
            
                      <div key={skill.name} className="bg-gray-900/30 backdrop-blur border border-gray-800 rounded-2xl p-6 hover:border-amber-500/30 transition-all duration-300 group">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                              <IconComponent size={20} className="text-amber-400 group-hover:animate-pulse" />
                            </div>
                            <div className="flex-1">
                              <span className="text-lg font-semibold">{skill.name}</span>
                              <div className="text-xs text-gray-500 uppercase tracking-wide">{skill.category}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className={`text-sm font-medium ${proficiency.color}`}>
                              {proficiency.label}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </TabsContent>

              <TabsContent value="courses" className="mt-8">
                <div className="items-center mb-12">
                  <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                    Academic Courses
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mb-8"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredCourses.map((course, index) => {
                    const IconComponent = course.icon
                    const difficultyStyle = getDifficultyColor(course.difficulty)

                    return (
                      <Link href={`/courses/${course.code}`} key={index}>
                        <Card
                          className="bg-gray-900/30 backdrop-blur border border-gray-800 rounded-2xl overflow-hidden hover:border-amber-500/30 transition-all duration-500 hover:scale-105 group cursor-pointer relative"
                          onMouseEnter={() => setHoveredCourse(index)}
                          onMouseLeave={() => setHoveredCourse(null)}
                        >
                          <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                                <IconComponent size={20} className="text-amber-400" />
                              </div>
                              <div className="flex-1">
                                <span className="text-xs text-gray-500 uppercase tracking-wide">
                                  {course.category}
                                </span>
                                <div className="text-xs text-gray-600">{course.code}</div>
                              </div>
                            </div>

                            <h3 className="text-xl font-semibold mb-2 text-amber-400 transition-colors line-clamp-2">
                              {course.title}
                            </h3>

                            <p className="text-gray-500 text-xs mb-2">
                              {course.instructor} • {course.semester}
                            </p>

                            <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">
                              {course.description}
                            </p>

                            <div className="flex items-center justify-between mb-4">
                              <span
                                className={`px-3 py-1 rounded-full text-xs font-medium border ${difficultyStyle}`}
                              >
                                {course.difficulty}
                              </span>
                              <span className="text-xs text-gray-500">{course.department}</span>
                            </div>

                            <div className="flex flex-wrap gap-1">
                              {course.concepts.slice(0, 4).map((concept) => (
                                <span
                                  key={concept}
                                  className="px-2 py-1 bg-gray-800 text-gray-300 rounded-full text-xs hover:bg-gray-700 transition-colors"
                                >
                                  {concept}
                                </span>
                              ))}
                              {course.concepts.length > 4 && (
                                <span className="px-2 py-1 bg-gray-700 text-gray-400 rounded-full text-xs">
                                  +{course.concepts.length - 4}
                                </span>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    )
                  })}
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
              © 2025 Haris Narrendran. Crafted with ❤️ 
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}