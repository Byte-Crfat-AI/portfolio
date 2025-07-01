'use client'

import { useState, useEffect } from 'react'
import { Code2 } from "lucide-react"

const COURSE_DATA = {
  title: "Advanced React Development",
  institute: "Indian Institute of Technology Bombay",
  department: "Computer Science",
  level: "Advanced",
  description: [
    "Master advanced React concepts including hooks, context, and performance optimization",
    "Build production-ready applications with modern development practices",
    "Implement state management solutions with Redux Toolkit and Context API",
    "Integrate TypeScript for type-safe React applications",
    "Learn testing strategies with React Testing Library and Jest",
    "Deploy and optimize React applications for production environments"
  ],
  concepts: [
    "React 18+",
    "TypeScript",
    "Next.js",
    "Redux Toolkit",
    "React Query",
    "Testing Library",
    "Tailwind CSS",
    "Performance"
  ]
}

export default function CoursePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden flex flex-col">

      {/* Content */}
      <div className={`relative z-10 pt-12 px-4 sm:px-6 md:px-8 w-full transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>

        {/* Course Info */}
        <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 inline-block mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Code2 className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 font-semibold text-sm uppercase">
              {COURSE_DATA.level} • {COURSE_DATA.department}
            </span>
          </div>
          <p className="text-gray-300 text-sm">{COURSE_DATA.institute}</p>
        </div>

        {/* Title */}
        <div className="w-full max-w-6xl mx-auto px-4 py-4">
          <h1
            className="text-center font-bold leading-tight tracking-tight break-words text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl bg-gradient-to-r from-white via-amber-200 to-amber-500 bg-clip-text text-transparent"
          >
            {COURSE_DATA.title}
          </h1>
        </div>

        {/* Course Concepts */}
        <div className={`flex justify-center mb-16 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="w-full max-w-5xl px-2">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {COURSE_DATA.concepts.map((concept, index) => (
                <div
                  key={index}
                  className="rounded-2xl px-4 py-2 sm:px-6 sm:py-3 font-bold text-xs transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm"
                  style={{
                    backgroundColor: '#f59e0b',
                    borderColor: '#f59e0b',
                    border: '2px solid',
                    color: '#000',
                    animationDelay: `${(index * 100) + 800}ms`
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#fbbf24'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#f59e0b'
                  }}
                >
                  {concept}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 pb-16 w-full">
        <div className={`w-full max-w-4xl transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <ul className="space-y-4">
            {COURSE_DATA.description.map((item, index) => (
              <li key={index} className="flex items-start gap-4 group">
                <span className="text-amber-400 mt-1 font-bold text-xl transition-all duration-300 group-hover:scale-150 group-hover:rotate-90 flex-shrink-0">•</span>
                <span className="text-white text-base sm:text-lg leading-relaxed font-medium transition-all duration-300 group-hover:text-amber-100 group-hover:translate-x-2 break-words">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
