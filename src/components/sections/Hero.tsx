"use client";

import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store/store";
import { setActiveSection } from "../../store/slices/portfolioSlice";
import { Github, Linkedin, Mail, ArrowRight, Play } from "lucide-react";
import TypingTransition from "../ui/TypingTransition";
import { useState, useEffect } from "react";
import { HeroSkeleton } from "../ui/LoadingSkeletons";

export default function Hero() {
  const dispatch = useDispatch();
  const { isDark } = useSelector((state: RootState) => state.theme);
  const [isLoading, setIsLoading] = useState(true);

  const developerTitles = [
    "Full Stack Developer",
    "React Specialist",
    "Frontend Developer",
    "Node.js Expert",
    "UI/UX Enthusiast",
    "Problem Solver",
    "AI/ML Enthusiast",
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <HeroSkeleton />;
  }

  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        isDark ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Background elements */}
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
            : "stripe-hero-gradient opacity-10"
        }`}
      ></div>

      {/* Floating elements */}
      <div
        className={`absolute top-20 left-10 w-20 h-20 rounded-full opacity-20 animate-pulse ${
          isDark ? "bg-blue-400" : "bg-blue-200"
        }`}
      ></div>
      <div
        className={`absolute top-40 right-20 w-16 h-16 rounded-full opacity-20 animate-pulse delay-1000 ${
          isDark ? "bg-yellow-400" : "bg-yellow-200"
        }`}
      ></div>
      <div
        className={`absolute bottom-40 left-20 w-12 h-12 rounded-full opacity-20 animate-pulse delay-2000 ${
          isDark ? "bg-green-400" : "bg-green-200"
        }`}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main content */}

        <div className="animate-fade-in-up">
          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Building digital
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              experiences
            </span>
          </h1>

          <div className="h-16 flex items-center justify-center mb-8">
            <TypingTransition
              texts={developerTitles}
              typingSpeed={100}
              deletingSpeed={50}
              pauseDuration={2000}
              className={`text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 bg-clip-text text-transparent ${
                isDark ? "drop-shadow-lg" : "drop-shadow-md"
              }`}
              showCursor={true}
            />
          </div>

          <p
            className={`text-lg sm:text-xl mb-12 max-w-3xl mx-auto leading-relaxed ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            I create scalable web applications with modern technologies.
            Specialized in React, Node.js, and everything in between.
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => dispatch(setActiveSection("projects"))}
              className="group inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View my work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            <button
              onClick={() => dispatch(setActiveSection("contact"))}
              className={`group inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold border transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl ${
                isDark
                  ? "bg-gray-800 text-white border-gray-700 hover:bg-gray-700"
                  : "bg-white text-gray-900 border-gray-200 hover:border-gray-300"
              }`}
            >
              <Play className="mr-2 h-5 w-5" />
              Get in touch
            </button>
          </div>

          {/* Social Links - Updated with brand colors */}
          <div className="flex justify-center items-center space-x-6">
            {/* GitHub */}
            <div className="group relative">
              <a
                href="https://github.com/samsulalomlaskar"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 hover:scale-110 transform ${
                  isDark
                    ? "text-gray-400 hover:text-white hover:bg-gray-800 hover:shadow-lg"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-900 hover:text-white hover:shadow-lg"
                }`}
              >
                <Github className="h-6 w-6" />
              </a>
              {/* Tooltip */}
              <div
                className={`absolute -top-12 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded-md text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                  isDark ? "bg-gray-700 text-white" : "bg-gray-800 text-white"
                }`}
              >
                GitHub
              </div>
            </div>

            {/* LinkedIn */}
            <div className="group relative">
              <a
                href="https://linkedin.com/in/samsulalomlaskar"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 hover:scale-110 transform hover:bg-[#0077B5] hover:text-white hover:shadow-lg hover:shadow-blue-500/25 ${
                  isDark
                    ? "text-gray-400 hover:border-[#0077B5]"
                    : "text-gray-600 hover:border-[#0077B5]"
                }`}
              >
                <Linkedin className="h-6 w-6" />
              </a>
              {/* Tooltip */}
              <div
                className={`absolute -top-12 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded-md text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                  isDark ? "bg-gray-700 text-white" : "bg-gray-800 text-white"
                }`}
              >
                LinkedIn
              </div>
            </div>

            {/* Email */}
            <div className="group relative">
              <button
                onClick={() => dispatch(setActiveSection("contact"))}
                className={`flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 hover:scale-110 transform hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500 hover:text-white hover:shadow-lg hover:shadow-red-500/25 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <Mail className="h-6 w-6" />
              </button>
              {/* Tooltip */}
              <div
                className={`absolute -top-12 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded-md text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                  isDark ? "bg-gray-700 text-white" : "bg-gray-800 text-white"
                }`}
              >
                Email
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          {[
            { number: "3.5+", label: "Years Experience", highlight: true },
            { number: "5+", label: "Projects Completed", highlight: false },
            { number: "100%", label: "Client Satisfaction", highlight: false },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div
                className={`text-3xl font-bold mb-2 ${
                  stat.highlight
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-4xl"
                    : isDark
                    ? "text-white"
                    : "text-gray-900"
                }`}
              >
                {stat.number}
              </div>
              <div
                className={`text-sm font-medium ${
                  stat.highlight
                    ? isDark
                      ? "text-blue-300"
                      : "text-blue-600"
                    : isDark
                    ? "text-gray-400"
                    : "text-gray-600"
                }`}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
