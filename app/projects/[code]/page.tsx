'use client'

import PROJECT_DATA from "@/data/projects"
import { notFound, useRouter } from "next/navigation"
import { useState, useEffect } from 'react'
import { ArrowLeft } from "lucide-react"

export default function ProjectPage({ params }: { params: { code: string } }) {
  const project = PROJECT_DATA.find(p => p.code === params.code)
  const [isLoaded, setIsLoaded] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200)
    return () => clearTimeout(timer)
  }, [])

  if (!project) return notFound()

  const Icon = project.icon

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden flex flex-col">

      <div className="z-20 pt-6 px-4 sm:px-6 md:px-8">
        <button
          onClick={() => router.push('/#portfolio')}
          className="flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm font-medium transition-all duration-300 hover:scale-105"
        >
          <ArrowLeft size={18} />
          Back to Projects
        </button>
      </div>

      <div className={`relative z-10 pt-6 px-4 sm:px-6 md:px-8 w-full transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>

        <div className="bg-black/60 backdrop-blur-sm rounded-lg p-6 inline-block mb-6">
          <div className="flex items-center gap-2 mb-1">
            {Icon && <Icon className="w-4 h-4 text-amber-400" />}
            <span className="text-amber-400 font-semibold text-sm uppercase">
              {project.category} • {project.complexity}
            </span>
          </div>
        </div>

        <div className="w-full max-w-6xl mx-auto px-4 py-4">
          <h1 className="text-amber-400 text-center font-bold leading-tight tracking-tight break-words text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl">
            {project.title}
          </h1>
        </div>

        <div className={`flex justify-center mb-16 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="w-full max-w-5xl px-2">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {project.tech.map((concept, index) => (
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

      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 pb-16 w-full">
        <div className={`w-full max-w-4xl transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <ul className="space-y-4">
            {project.detailedDescription.map((item, index) => (
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
