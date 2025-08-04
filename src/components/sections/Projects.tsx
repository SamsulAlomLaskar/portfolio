"use client";

import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { Github, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import { ProjectCardSkeleton } from "../ui/LoadingSkeletons";

export default function Projects() {
  const { isDark } = useSelector((state: RootState) => state.theme);
  const [isLoading, setIsLoading] = useState(true);

  const projects = [
    {
      id: "dashboard",
      title: "Github Dashboard",
      description:
        "A responsive React + TypeScript web app that allows users to search GitHub repositories, explore user profiles, and visualize issues in a Kanban-style board.",
      image:
        "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2088&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["React", "Node.js", "TypeScript", "Redux"],
      github: "https://github.com/SamsulAlomLaskar/github-dashboard",
      live: "https://gthb-search.netlify.app/",
    },
    {
      id: "task",
      title: "Task Management App",
      description:
        "A modern, responsive portfolio built using React, TypeScript, Vite, and Tailwind CSS. The site showcases personal projects, skills, and experience with a clean UI and smooth navigation.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["React.js", "TypeScript", "Material UI (MUI)", "CSS"],
      github: "https://github.com/samsulalomlaskar/task-management",
      live: "https://samsulalomlaskar.github.io/task-management/",
    },
    {
      id: "flow",
      title: "React Flow",
      description:
        "Built a modular visual flow builder using React 19 and React Flow. Users can drag and drop custom nodes, edit their properties via a settings panel, and organize flows with a smooth, responsive UI. Styled with clean CSS modules for consistency.",
      image:
        "https://images.unsplash.com/photo-1646617747563-4f080bddf282?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["React", "Typescript", "React Flow", "Tailwind CSS"],
      github: "https://github.com/SamsulAlomLaskar/bitespeed",
      live: "https://samsulalomlaskar.github.io/bitespeed/",
    },
    {
      id: "game",
      title: "Dice Game",
      description:
        "A two-player dice game using HTML, CSS, and JavaScript. Players roll dice, and the game displays the winner based on random rolls. Features simple UI, DOM manipulation, and responsive design.",
      image:
        "https://images.unsplash.com/photo-1581788927061-ac0e09850ed0?q=80&w=1268&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/SamsulAlomLaskar/dice-game",
      live: "https://dicegamebysamsul.netlify.app/",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        isDark ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl sm:text-5xl font-bold mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            A showcase of my recent work and contributions
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className={`rounded-xl shadow-sm overflow-hidden ${
                  isDark ? "bg-gray-800" : "bg-white"
                }`}
              >
                <ProjectCardSkeleton />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-105 animate-fade-in-up border ${
                  isDark
                    ? "bg-gray-800 border-gray-700 hover:border-gray-600"
                    : "bg-white border-gray-100 hover:border-gray-200"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Image with overlay icons */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />

                  {/* Overlay with icons */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-all duration-200 hover:scale-110"
                        title="View Source Code"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-all duration-200 hover:scale-110"
                        title="View Live Demo"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3
                      className={`text-xl font-semibold ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {project.title}
                    </h3>
                  </div>

                  <p
                    className={`mb-4 leading-relaxed text-sm ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200 ${
                          isDark
                            ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 ${
                        isDark
                          ? "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
                      }`}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-all duration-200 hover:scale-105"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View all projects button */}
        <div className="text-center">
          <a
            href="https://github.com/samsulalomlaskar"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl ${
              isDark
                ? "bg-white text-gray-900 hover:bg-gray-100"
                : "bg-gray-900 text-white hover:bg-gray-800"
            }`}
          >
            <Github className="mr-2 h-5 w-5" />
            View all projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
