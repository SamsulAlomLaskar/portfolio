import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import {
  Award,
  Calendar,
  MapPin,
  Heart,
  Code,
  Lightbulb,
  BookOpen,
  Users,
  Wrench,
} from "lucide-react";

export default function About() {
  const { isDark } = useSelector((state: RootState) => state.theme);

  const loveItems = [
    {
      icon: Code,
      text: "Building user-friendly interfaces",
      color: "text-blue-500",
    },
    {
      icon: Lightbulb,
      text: "Solving complex problems",
      color: "text-yellow-500",
    },
    {
      icon: BookOpen,
      text: "Learning new technologies",
      color: "text-green-500",
    },
    // {
    //   icon: Wrench,
    //   text: "Contributing to open source",
    //   color: "text-purple-500",
    // },
    {
      icon: Users,
      text: "Mentoring junior developers",
      color: "text-orange-500",
    },
  ];

  return (
    <section
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        isDark ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            <span className="bg-gradient-to-r from-sky-500 via-violet-500 to-emerald-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Passionate developer with a love for creating innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div
              className={`p-6 rounded-2xl backdrop-blur-md border shadow-xl hover:shadow-2xl transition-all duration-300 ${
                isDark
                  ? "bg-gray-800/50 border-gray-700/50"
                  : "bg-white/50 border-gray-200/50"
              }`}
            >
              <h3
                className={`text-2xl font-bold mb-4 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                My Journey
              </h3>
              <p
                className={`leading-relaxed mb-4 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                My coding journey began over three & half years ago with a
                simple "Hello World" — and since then, I've been driven by a
                passion for building scalable, high-performance web applications
                that make a meaningful impact.
              </p>
              <p
                className={`leading-relaxed mb-4 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                With 3.5 years of professional experience, I specialize in the
                MERN stack (MongoDB, Express.js, React.js, Node.js) and have
                contributed to both startup environments and enterprise-grade
                solutions. My strengths lie in crafting clean, maintainable
                code, optimizing performance, and delivering user-centric
                features from concept to deployment.
              </p>
              <p
                className={`leading-relaxed ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                I'm a continuous learner who thrives on exploring emerging
                technologies and keeping pace with the ever-evolving web
                development landscape.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div
                className={`p-4 rounded-xl backdrop-blur-md border text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${
                  isDark
                    ? "bg-gray-800/50 border-gray-700/50"
                    : "bg-white/50 border-gray-200/50"
                }`}
              >
                <Calendar className="h-8 w-8 mx-auto mb-2 text-sky-500" />
                <div className="text-2xl font-bold bg-gradient-to-r from-sky-500 to-violet-500 bg-clip-text text-transparent">
                  3.5+
                </div>
                <div
                  className={`text-sm ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Years Experience
                </div>
              </div>
              <div
                className={`p-4 rounded-xl backdrop-blur-md border text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${
                  isDark
                    ? "bg-gray-800/50 border-gray-700/50"
                    : "bg-white/50 border-gray-200/50"
                }`}
              >
                <Award className="h-8 w-8 mx-auto mb-2 text-emerald-500" />
                <div className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent">
                  5+
                </div>
                <div
                  className={`text-sm ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Projects Completed
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-7">
            {/* Reduced image size */}
            <div className="flex justify-center">
              <img
                src="/portfolio/samsul.jpg"
                alt="samsul"
                className="w-82 h-82 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div
              className={`p-6 rounded-2xl backdrop-blur-md border shadow-xl hover:shadow-2xl transition-all duration-300 ${
                isDark
                  ? "bg-gray-800/50 border-gray-700/50"
                  : "bg-white/50 border-gray-200/50"
              }`}
            >
              <h3
                className={`text-xl font-bold mb-4 flex items-center ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                <Heart className="h-5 w-5 mr-2 text-red-500" />
                What I Love
              </h3>
              <ul
                className={`space-y-3 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {loveItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center group hover:translate-x-1 transition-transform duration-200"
                  >
                    <item.icon
                      className={`h-4 w-4 mr-3 ${item.color} group-hover:scale-110 transition-transform duration-200`}
                    />
                    <span className="group-hover:text-current transition-colors duration-200">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={`p-4 rounded-xl flex items-center ${
                isDark ? "bg-gray-800" : "bg-gray-50"
              }`}
            >
              <MapPin className="h-5 w-5 mr-2 text-purple-500" />
              <span className={isDark ? "text-gray-300" : "text-gray-600"}>
                Noida
              </span>
              <img
                src="https://flagcdn.com/w20/in.png"
                alt="India Flag"
                className="ml-2 w-5 h-4 shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
