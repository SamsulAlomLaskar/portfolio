"use client"

import { useSelector } from "react-redux"
import type { RootState } from "../../store/store"
import { useState, useEffect } from "react"
import { SkillCardSkeleton } from "../ui/LoadingSkeletons"

// React Icons imports
import { IoLogoJavascript, IoLogoPython, IoLogoHtml5, IoLogoCss3 } from "react-icons/io5"
import { BiLogoTypescript, BiLogoNodejs, BiLogoReact, BiLogoMongodb, BiLogoPostgresql } from "react-icons/bi"
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb"
import { FaGithub, FaAws, FaAngular } from "react-icons/fa"
import { SiExpress } from "react-icons/si"

export default function Skills() {
  const { isDark } = useSelector((state: RootState) => state.theme)
  const [isLoading, setIsLoading] = useState(true)

  const skills = [
    { name: "JavaScript", level: 95, color: "bg-yellow-400", icon: IoLogoJavascript },
    { name: "TypeScript", level: 60, color: "bg-blue-600", icon: BiLogoTypescript },
    { name: "Python", level: 60, color: "bg-blue-500", icon: IoLogoPython },
    { name: "Node.js", level: 80, color: "bg-green-500", icon: BiLogoNodejs },
    { name: "React", level: 95, color: "bg-cyan-500", icon: BiLogoReact },
    { name: "Next.js", level: 40, color: "bg-gray-800", icon: TbBrandNextjs },
    { name: "MongoDB", level: 80, color: "bg-green-600", icon: BiLogoMongodb },
    { name: "PostgreSQL", level: 70, color: "bg-blue-700", icon: BiLogoPostgresql },
    { name: "HTML5", level: 90, color: "bg-orange-500", icon: IoLogoHtml5 },
    { name: "Express.js", level: 50, color: "bg-gray-700", icon: SiExpress },
    { name: "CSS3", level: 80, color: "bg-blue-500", icon: IoLogoCss3 },
    { name: "Git", level: 80, color: "bg-gray-900", icon: FaGithub },
    { name: "AWS", level: 50, color: "bg-orange-400", icon: FaAws },
    { name: "Angular", level: 10, color: "bg-purple-700", icon: FaAngular },
    { name: "React Native", level: 10, color: "bg-sky-400", icon: TbBrandReactNative },
  ]

  // Sort skills by level in descending order (highest to lowest)
  const sortedSkills = [...skills].sort((a, b) => b.level - a.level)

  // Function to get skill level category and styling
  const getSkillCategory = (level: number) => {
    if (level >= 90) return { category: "Expert", color: "text-green-500", bgColor: "bg-green-100" }
    if (level >= 70) return { category: "Advanced", color: "text-blue-500", bgColor: "bg-blue-100" }
    if (level >= 50) return { category: "Intermediate", color: "text-yellow-500", bgColor: "bg-yellow-100" }
    return { category: "Beginner", color: "text-gray-500", bgColor: "bg-gray-100" }
  }

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-gray-800" : "bg-gray-50"}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            Technologies I use to build amazing digital experiences
          </p>
          <p className={`text-sm mt-2 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
            Sorted by proficiency level (highest to lowest)
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className={`rounded-xl p-6 shadow-sm ${isDark ? "bg-gray-700" : "bg-white"}`}>
                <SkillCardSkeleton />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sortedSkills.map((skill, index) => {
              const skillCategory = getSkillCategory(skill.level)
              return (
                <div
                  key={skill.name}
                  className={`group rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up border relative ${isDark
                    ? "bg-gray-700 border-gray-600 hover:border-gray-500"
                    : "bg-white border-gray-100 hover:border-gray-200"
                    }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Skill level badge */}
                  <div
                    className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${isDark ? "bg-gray-600 text-gray-300" : skillCategory.bgColor
                      } ${isDark ? "" : skillCategory.color}`}
                  >
                    {skillCategory.category}
                  </div>

                  <div className="flex items-center mb-4">
                    <div
                      className={`w-12 h-12 ${skill.color} rounded-lg flex items-center justify-center text-white text-2xl mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <skill.icon />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-semibold text-lg ${isDark ? "text-white" : "text-gray-900"}`}>
                        {skill.name}
                      </h3>
                      <p className={`text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                        {skill.level}% proficiency
                      </p>
                    </div>
                  </div>

                  <div className={`w-full rounded-full h-3 ${isDark ? "bg-gray-600" : "bg-gray-200"} overflow-hidden`}>
                    <div
                      className={`${skill.color} h-3 rounded-full transition-all duration-1000 ease-out relative`}
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="absolute inset-0 bg-white/20 rounded-full"></div>
                      {/* Animated shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full animate-pulse"></div>
                    </div>
                  </div>

                  {/* Skill level indicator */}
                  <div className="mt-3 flex justify-between items-center">
                    <span className={`text-xs font-medium ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                      Beginner
                    </span>
                    <span className={`text-xs font-medium ${isDark ? "text-gray-400" : "text-gray-500"}`}>Expert</span>
                  </div>

                  {/* Rank indicator */}
                  <div className="mt-2 text-center">
                    <span
                      className={`text-xs font-bold px-2 py-1 rounded-full ${index < 3
                        ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white"
                        : isDark
                          ? "bg-gray-600 text-gray-300"
                          : "bg-gray-100 text-gray-600"
                        }`}
                    >
                      #{index + 1}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Skills Summary */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Expert", count: sortedSkills.filter((s) => s.level >= 90).length, color: "text-green-500" },
            {
              label: "Advanced",
              count: sortedSkills.filter((s) => s.level >= 70 && s.level < 90).length,
              color: "text-blue-500",
            },
            {
              label: "Intermediate",
              count: sortedSkills.filter((s) => s.level >= 50 && s.level < 70).length,
              color: "text-yellow-500",
            },
            { label: "Learning", count: sortedSkills.filter((s) => s.level < 50).length, color: "text-gray-500" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center p-4 rounded-lg ${isDark ? "bg-gray-700" : "bg-white"} shadow-sm`}
            >
              <div className={`text-2xl font-bold ${stat.color}`}>{stat.count}</div>
              <div className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
