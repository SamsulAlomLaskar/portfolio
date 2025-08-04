"use client";

import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { Download, FileText, Eye, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import ContentLoader from "react-content-loader";

const ResumeSkeleton = ({ isDark }: { isDark: boolean }) => (
  <ContentLoader
    speed={2}
    width={800}
    height={600}
    viewBox="0 0 800 600"
    backgroundColor={isDark ? "#374151" : "#f3f4f6"}
    foregroundColor={isDark ? "#4b5563" : "#e5e7eb"}
    className="w-full"
  >
    {/* Header */}
    <rect x="0" y="0" rx="8" ry="8" width="800" height="60" />

    {/* PDF Viewer Area */}
    <rect x="0" y="80" rx="12" ry="12" width="800" height="400" />

    {/* Download Button */}
    <rect x="300" y="500" rx="25" ry="25" width="200" height="50" />
  </ContentLoader>
);

export default function Resume() {
  const { isDark } = useSelector((state: RootState) => state.theme);
  const [isLoading, setIsLoading] = useState(true);
  const [pdfError, setPdfError] = useState(false);

  const resumeUrl = "/portfolio/Samsul_Alom_Laskar.pdf";

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Samsul_Alom_Laskar.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewInNewTab = () => {
    window.open(resumeUrl, "_blank");
  };

  if (isLoading) {
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
              Resume
            </h2>
            <p
              className={`text-xl max-w-3xl mx-auto ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              View and download my professional resume
            </p>
          </div>
          <ResumeSkeleton isDark={isDark} />
        </div>
      </section>
    );
  }

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
              Resume
            </span>
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            View and download my professional resume
          </p>
        </div>

        <div className="space-y-8">
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleDownload}
              className="group inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Download className="mr-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform duration-200" />
              Download Resume
            </button>

            <button
              onClick={handleViewInNewTab}
              className={`group inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold border transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl ${
                isDark
                  ? "bg-gray-800 text-white border-gray-700 hover:bg-gray-700"
                  : "bg-white text-gray-900 border-gray-200 hover:border-gray-300"
              }`}
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Open in New Tab
            </button>
          </div>

          {/* PDF Viewer */}
          <div
            className={`rounded-2xl shadow-xl overflow-hidden ${
              isDark ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div
              className={`p-4 border-b flex items-center justify-between ${
                isDark
                  ? "border-gray-700 bg-gray-700"
                  : "border-gray-200 bg-gray-50"
              }`}
            >
              <div className="flex items-center">
                <FileText
                  className={`h-5 w-5 mr-2 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                />
                <span
                  className={`font-medium ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Samsul_Alom_Laskar.pdf
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleViewInNewTab}
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                    isDark
                      ? "text-gray-400 hover:text-white hover:bg-gray-600"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                  title="Open in new tab"
                >
                  <Eye className="h-4 w-4" />
                </button>
                <button
                  onClick={handleDownload}
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                    isDark
                      ? "text-gray-400 hover:text-white hover:bg-gray-600"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                  title="Download"
                >
                  <Download className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* PDF Embed */}
            <div className="relative">
              {!pdfError ? (
                <iframe
                  src={`${resumeUrl}#toolbar=1&navpanes=0&scrollbar=1`}
                  className="w-full h-[800px] border-0"
                  title="Resume PDF"
                  onError={() => setPdfError(true)}
                />
              ) : (
                <div
                  className={`flex flex-col items-center justify-center h-[400px] ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  <FileText className="h-16 w-16 mb-4 opacity-50" />
                  <h3 className="text-xl font-semibold mb-2">
                    PDF Preview Not Available
                  </h3>
                  <p className="text-center mb-6 max-w-md">
                    The PDF preview couldn't be loaded. You can still download
                    the resume or view it in a new tab.
                  </p>
                  <div className="flex gap-4">
                    <button
                      onClick={handleDownload}
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </button>
                    <button
                      onClick={handleViewInNewTab}
                      className={`inline-flex items-center px-6 py-3 rounded-lg font-medium border transition-colors duration-200 ${
                        isDark
                          ? "bg-gray-700 text-white border-gray-600 hover:bg-gray-600"
                          : "bg-white text-gray-900 border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Open in New Tab
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Resume Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div
              className={`p-6 rounded-xl shadow-sm ${
                isDark ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Professional Experience
                </h3>
                <p
                  className={`text-sm ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  3.5+ years of full-stack development experience with modern
                  technologies
                </p>
              </div>
            </div>

            <div
              className={`p-6 rounded-xl shadow-sm ${
                isDark ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-6 w-6 text-green-600" />
                </div>
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Technical Skills
                </h3>
                <p
                  className={`text-sm ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Expertise in React, Node.js, TypeScript, and modern web
                  development
                </p>
              </div>
            </div>

            <div
              className={`p-6 rounded-xl shadow-sm ${
                isDark ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-6 w-6 text-purple-600" />
                </div>
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Education & Certifications
                </h3>
                <p
                  className={`text-sm ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Bachelors of Science degree and industry certifications
                </p>
              </div>
            </div>
          </div>

          {/* Quick Contact */}
          <div
            className={`text-center p-8 rounded-2xl ${
              isDark ? "bg-gray-800" : "bg-gray-50"
            }`}
          >
            <h3
              className={`text-2xl font-bold mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Interested in working together?
            </h3>
            <p className={`mb-6 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              Let's discuss how I can contribute to your team and projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:itsmesamsulalom@gmail.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <FileText className="mr-2 h-5 w-5" />
                Get in Touch
              </a>
              <a
                href="https://linkedin.com/in/samsulalomlaskar"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold border transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl ${
                  isDark
                    ? "bg-gray-700 text-white border-gray-600 hover:bg-gray-600"
                    : "bg-white text-gray-900 border-gray-200 hover:border-gray-300"
                }`}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
