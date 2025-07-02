'use client'

import { useState, useEffect } from 'react'
import { Code2 } from "lucide-react"

const PROJECT_DATA = {
  title: "E-Commerce Platform",
  organization: "TechCorp Solutions",
  department: "Full Stack Development",
  level: "Production",
  description: [
    "Built a comprehensive e-commerce platform with modern web technologies",
    "Implemented secure payment processing with Stripe and PayPal integration",
    "Developed real-time inventory management and order tracking system",
    "Created responsive design supporting mobile, tablet, and desktop devices",
    "Integrated advanced search and filtering capabilities with Elasticsearch",
    "Deployed scalable architecture handling 10,000+ concurrent users"
  ],
  concepts: [
    "React 18+",
    "Node.js",
    "MongoDB",
    "Express.js",
    "Stripe API",
    "Docker",
    "AWS Cloud",
    "Redis Cache"
  ]
}

export default function ProjectPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden flex flex-col">

      {/* Content */}
      <div className={`relative z-10 pt-12 px-4 sm:px-6 md:px-8 w-full transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>

        {/* Project Info */}
        <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 inline-block mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Code2 className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 font-semibold text-sm uppercase">
              {PROJECT_DATA.level} • {PROJECT_DATA.department}
            </span>
          </div>
          <p className="text-gray-300 text-sm">{PROJECT_DATA.organization}</p>
        </div>

        {/* Title */}
        <div className="w-full max-w-6xl mx-auto px-4 py-4">
          <h1
            className="text-amber-400 text-center font-bold leading-tight tracking-tight break-words text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl"
          >
            {PROJECT_DATA.title}
          </h1>
        </div>

        {/* Project Technologies */}
        <div className={`flex justify-center mb-16 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="w-full max-w-5xl px-2">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {PROJECT_DATA.concepts.map((concept, index) => (
                <div
                  key={index}
                  className="inline-flex items-center justify-center rounded-full px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-110 bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700"
                  style={{
                    animationDelay: `${(index * 100) + 800}ms`
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
            {PROJECT_DATA.description.map((item, index) => (
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