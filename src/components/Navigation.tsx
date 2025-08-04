"use client";

import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store/store";
import { toggleTheme } from "../store/slices/themeSlice";
import { setActiveSection } from "../store/slices/portfolioSlice";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { NavigationSkeleton } from "./ui/LoadingSkeletons";

export default function Navigation() {
  const dispatch = useDispatch();
  const { isDark } = useSelector((state: RootState) => state.theme);
  const { activeSection } = useSelector((state: RootState) => state.portfolio);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleNavClick = (sectionId: string) => {
    dispatch(setActiveSection(sectionId));
    setIsMobileMenuOpen(false);
  };

  if (isLoading) {
    return (
      <nav
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b ${
          isDark
            ? "bg-gray-900/80 border-gray-700"
            : "bg-white/80 border-gray-100"
        }`}
      >
        <NavigationSkeleton />
      </nav>
    );
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
          isDark
            ? "bg-gray-900/80 border-gray-700"
            : "bg-white/80 border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div
              className="flex-shrink-0"
              onClick={() => handleNavClick("home")}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
            >
              <h1
                className={`text-2xl font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                samsul<span className="text-blue-600">.</span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                      : isDark
                      ? "text-gray-300 hover:text-white hover:bg-gray-800"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => dispatch(toggleTheme())}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  isDark
                    ? "text-yellow-400 hover:text-yellow-300 hover:bg-gray-800"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>

              {/* Mobile menu button */}
              <div className="lg:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                    isDark
                      ? "text-gray-300 hover:text-white hover:bg-gray-800"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                  aria-label="Toggle mobile menu"
                >
                  {isMobileMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            className={`lg:hidden border-t transition-colors duration-300 ${
              isDark
                ? "bg-gray-900 border-gray-700"
                : "bg-white border-gray-100"
            }`}
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                      : isDark
                      ? "text-gray-300 hover:text-white hover:bg-gray-800"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
