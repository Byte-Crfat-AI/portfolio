'use client'

import { useState, useEffect } from 'react'
import { Sparkle } from "lucide-react"

const SKILL_DATA = {
  title: "Machine Learning",
  category: "Artificial Intelligence",
  department: "Data Science & Analytics",
  level: "Advanced",
  description: "Comprehensive understanding of supervised and unsupervised learning algorithms with hands-on experience in building predictive models, neural networks, and deploying ML solutions across various domains including computer vision and NLP.",
  courses: [
    "Stanford CS229 - Machine Learning",
    "Deep Learning Specialization (Coursera)",
    "AWS Machine Learning Specialty",
    "Computer Vision with PyTorch",
    "Natural Language Processing",
    "MLOps Engineering Practices"
  ],
  projects: [
    "Predictive Analytics Dashboard",
    "Image Classification System",
    "Sentiment Analysis API",
    "Recommendation Engine",
    "Time Series Forecasting",
    "Automated ML Pipeline"
  ]
}

export default function SkillPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden flex flex-col">

      {/* Content */}
      <div className={`relative z-10 pt-12 px-4 sm:px-6 md:px-8 w-full transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>

        {/* Skill Info */}
        <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 inline-block mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Sparkle className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 font-semibold text-sm uppercase">
              {SKILL_DATA.level} • {SKILL_DATA.department}
            </span>
          </div>
          <p className="text-gray-300 text-sm">{SKILL_DATA.category}</p>
        </div>

        {/* Title */}
        <div className="w-full max-w-6xl mx-auto px-4 py-4">
        <h1 className="text-amber-400 ftext-center font-bold leading-tight tracking-tight break-words text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl">
            {SKILL_DATA.title}
        </h1>
        </div>

        <div className={`w-full max-w-6xl mx-auto px-4 mb-12 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <p className="text-gray-300 text-base sm:text-lg leading-tight font-light text-left">
            {SKILL_DATA.description}
        </p>
        </div>


        {/* Courses Section */}
        {/* Courses Section */}
<div className={`flex justify-center mb-12 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
  <div className="w-full max-w-5xl px-2">
    <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-amber-400">Courses </h2>
    <div className="flex flex-wrap gap-2 sm:gap-3">
      {SKILL_DATA.courses.map((course, index) => (
        <div
          key={index}
          className="rounded-lg px-3 py-2 sm:px-4 sm:py-2 font-medium text-xs sm:text-sm rounded-full border border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors"
          style={{
            animationDelay: `${(index * 100) + 600}ms`
          }}
        >
          {course}
        </div>
      ))}
    </div>
  </div>
</div>

{/* Projects Section */}
<div className={`flex justify-center mb-16 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
  <div className="w-full max-w-5xl px-2">
    <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-amber-400">Projects</h2>
    <div className="flex flex-wrap gap-2 sm:gap-3">
      {SKILL_DATA.projects.map((project, index) => (
        <div
          key={index}
          className="rounded-lg px-3 py-2 sm:px-4 sm:py-2 font-medium text-xs sm:text-sm transition-all duration-300 hover:scale-105 shadow-lg backdrop-blur-sm border border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700"
          style={{
            animationDelay: `${(index * 100) + 800}ms`
          }}
        >
          {project}
        </div>
      ))}
    </div>
  </div>
</div>

      </div>
    </div>
  )
}