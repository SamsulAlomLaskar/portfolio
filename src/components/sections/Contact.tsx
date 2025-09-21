"use client";

import type React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store/store";
import {
  updateContactForm,
  resetContactForm,
  submitContactFormStart,
  submitContactFormSuccess,
  submitContactFormFailure,
} from "../../store/slices/portfolioSlice";
import { sendEmailWithEmailJS } from "../../services/emailService";
import { Mail, Phone, MapPin, Send, CheckCircle, X } from "lucide-react";
import { useState, useEffect } from "react";
import ContentLoader from "react-content-loader";

const ContactFormSkeleton = ({ isDark }: { isDark: boolean }) => (
  <ContentLoader
    speed={2}
    width={500}
    height={400}
    viewBox="0 0 500 400"
    backgroundColor={isDark ? "#374151" : "#f3f4f6"}
    foregroundColor={isDark ? "#4b5563" : "#e5e7eb"}
    className="w-full"
  >
    <rect x="0" y="0" rx="8" ry="8" width="500" height="60" />
    <rect x="0" y="80" rx="8" ry="8" width="500" height="60" />
    <rect x="0" y="160" rx="8" ry="8" width="500" height="120" />
    <rect x="0" y="300" rx="25" ry="25" width="150" height="50" />
  </ContentLoader>
);

export default function Contact() {
  const dispatch = useDispatch();
  const { isDark } = useSelector((state: RootState) => state.theme);
  const { contactForm, isContactFormSubmitted, isSubmitting, submitError } =
    useSelector((state: RootState) => state.portfolio);
  const [isLoading, setIsLoading] = useState(true);
  const [countdown, setCountdown] = useState(5); // 5 second countdown

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Auto-close countdown effect
  useEffect(() => {
    if (isContactFormSubmitted) {
      const countdownInterval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(countdownInterval);
            dispatch(resetContactForm());
            return 5; // Reset countdown for next time
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(countdownInterval);
    } else {
      setCountdown(5); // Reset countdown when form is not submitted
    }
  }, [isContactFormSubmitted, dispatch]);

  const handleInputChange = (field: string, value: string) => {
    dispatch(updateContactForm({ [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !contactForm.name.trim() ||
      !contactForm.email.trim() ||
      !contactForm.message.trim()
    ) {
      dispatch(submitContactFormFailure("Please fill in all fields"));
      return;
    }

    dispatch(submitContactFormStart());

    try {
      const result = await sendEmailWithEmailJS(contactForm);
      if (result.success) {
        dispatch(submitContactFormSuccess());
      } else {
        dispatch(
          submitContactFormFailure(result.error || "Failed to send message")
        );
      }
    } catch (error) {
      dispatch(submitContactFormFailure("An unexpected error occurred"));
    }
  };

  const handleClose = () => {
    dispatch(resetContactForm());
  };

  if (isContactFormSubmitted) {
    return (
      <section
        className={`py-12 lg:py-20 px-4 sm:px-6 lg:px-8 ${
          isDark ? "bg-gray-800" : "bg-gray-50"
        }`}
      >
        <div className="max-w-2xl mx-auto text-center px-4">
          <div
            className={`relative rounded-2xl p-8 lg:p-12 shadow-xl ${
              isDark ? "bg-gray-700" : "bg-white"
            }`}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className={`absolute top-3 right-3 lg:top-4 lg:right-4 p-2 rounded-full transition-colors duration-200 ${
                isDark
                  ? "text-gray-400 hover:text-white hover:bg-gray-600"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
              }`}
              aria-label="Close"
            >
              <X className="h-4 w-4 lg:h-5 lg:w-5" />
            </button>

            {/* Success animation */}
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 animate-pulse">
              <CheckCircle className="h-8 w-8 lg:h-10 lg:w-10 text-green-600" />
            </div>

            <h2
              className={`text-2xl lg:text-3xl font-bold mb-3 lg:mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Message Sent Successfully! 🎉
            </h2>

            <p
              className={`mb-4 lg:mb-6 text-base lg:text-lg ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Thank you for reaching out! I'll get back to you as soon as
              possible.
            </p>

            {/* Countdown display */}
            <div
              className={`mb-6 lg:mb-8 p-3 lg:p-4 rounded-lg ${
                isDark ? "bg-gray-600" : "bg-gray-50"
              }`}
            >
              <p
                className={`text-xs lg:text-sm ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                This message will automatically close in{" "}
                <span className="font-bold text-blue-600">{countdown}</span>{" "}
                seconds
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col gap-3 lg:gap-4 justify-center">
              <button
                onClick={handleClose}
                className="px-6 lg:px-8 py-2.5 lg:py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg text-sm lg:text-base"
              >
                Send Another Message
              </button>
              <button
                onClick={handleClose}
                className={`px-6 lg:px-8 py-2.5 lg:py-3 rounded-lg font-semibold border transition-all duration-200 hover:scale-105 text-sm lg:text-base ${
                  isDark
                    ? "bg-gray-600 text-white border-gray-500 hover:bg-gray-500"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                }`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`py-12 lg:py-20 px-4 sm:px-6 lg:px-8 ${
        isDark ? "bg-gray-800" : "bg-gray-50"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <h2
            className={`text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 lg:mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <p
            className={`text-lg lg:text-xl max-w-3xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Let's discuss your next project or just say hello!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 lg:space-y-8">
            <div>
              <h3
                className={`text-xl lg:text-2xl font-bold mb-4 lg:mb-6 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Let's connect
              </h3>
              <p
                className={`leading-relaxed mb-6 lg:mb-8 text-sm lg:text-base ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                I'm always interested in hearing about new opportunities and
                exciting projects.
              </p>
            </div>

            <div className="space-y-4 lg:space-y-6">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "itsmesamsulalom@gmail.com",
                  href: "mailto:itsmesamsulalom@gmail.com",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+91 7002442110",
                  href: "tel:+917002442110",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Noida",
                  href: "#",
                },
              ].map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className={`flex items-center p-3 lg:p-4 rounded-lg hover:shadow-md transition-all duration-200 group ${
                    isDark
                      ? "bg-gray-700 hover:bg-gray-600"
                      : "bg-white hover:bg-gray-50"
                  }`}
                >
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-3 lg:mr-4 group-hover:bg-blue-200 transition-colors duration-200 flex-shrink-0">
                    <info.icon className="h-5 w-5 lg:h-6 lg:w-6 text-blue-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div
                      className={`text-xs lg:text-sm font-medium ${
                        isDark ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {info.label}
                    </div>
                    <div
                      className={`text-sm lg:text-lg font-semibold break-all ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`rounded-2xl p-6 lg:p-8 shadow-sm ${
              isDark ? "bg-gray-700" : "bg-white"
            }`}
          >
            <h3
              className={`text-xl lg:text-2xl font-bold mb-4 lg:mb-6 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Send a message
            </h3>

            {isLoading ? (
              <ContactFormSkeleton isDark={isDark} />
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className={`block text-sm font-medium mb-2 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    value={contactForm.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className={`w-full px-3 lg:px-4 py-2 lg:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-sm lg:text-base ${
                      isDark
                        ? "bg-gray-600 border-gray-500 text-white placeholder-gray-400"
                        : "bg-white border-gray-200 text-gray-900 placeholder-gray-500"
                    }`}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium mb-2 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    value={contactForm.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`w-full px-3 lg:px-4 py-2 lg:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-sm lg:text-base ${
                      isDark
                        ? "bg-gray-600 border-gray-500 text-white placeholder-gray-400"
                        : "bg-white border-gray-200 text-gray-900 placeholder-gray-500"
                    }`}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium mb-2 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={contactForm.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    className={`w-full px-3 lg:px-4 py-2 lg:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none text-sm lg:text-base ${
                      isDark
                        ? "bg-gray-600 border-gray-500 text-white placeholder-gray-400"
                        : "bg-white border-gray-200 text-gray-900 placeholder-gray-500"
                    }`}
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 lg:py-4 px-4 lg:px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center text-sm lg:text-base ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 hover:scale-105 shadow-lg hover:shadow-xl"
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 lg:h-5 lg:w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 lg:h-5 lg:w-5 mr-2" />
                      Send message
                    </>
                  )}
                </button>
              </form>
            )}

            {submitError && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">{submitError}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
