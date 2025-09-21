import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const { isDark } = useSelector((state: RootState) => state.theme);

  const experiences = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "To The New",
      location: "Noida",
      period: "2025 - Present",
      description: "N/A",
      achievements: ["IN PROGRESS"],

      technologies: [
        "Node.js",
        "React.js",
        "MongoDB",
        "PostgreSQL",
        "SQL",
        "AWS S3",
        "Next.js",
        "Express.js",
        "TypeScript",
      ],
    },
    {
      id: 2,
      title: "Software Engineer",
      company: "NEC Corporation",
      location: "Bengaluru",
      period: "2024 - 2025",
      description:
        "Troubleshot and debugged full-stack applications built with Node.js and React.js, ensuring smooth workflow and efficient resolution of complex issues. Collaborated with cross-functional teams and leveraged logs and data validation for root cause analysis and reliable fixes.",
      achievements: [
        "Resolved high-impact bugs through in-depth log analysis using AWS CloudWatch and Logz.io",
        "Improved issue resolution time by 35% through proactive root cause investigations",
        "Automated recurring support tasks with custom scripts, reducing manual effort significantly",
        "Validated large datasets across AWS S3, PostgreSQL, and MongoDB to maintain data integrity",
        "Worked closely with support and engineering teams to enhance system reliability and responsiveness",
      ],

      technologies: [
        "Node.js",
        "React.js",
        "MongoDB",
        "PostgreSQL",
        "SQL",
        "AWS S3",
        "CloudWatch",
        "Logz.io",
        "Automation Scripts",
      ],
    },
    {
      id: 3,
      title: "Software Engineer",
      company: "Techwise Digital",
      location: "Bengaluru",
      period: "2023 - 2024",
      description:
        "Analyzed and debugged Node.js and React.js applications, collaborating with cross-functional teams to resolve complex technical issues. Investigated data inconsistencies across SQL and MongoDB, and performed in-depth analysis using datasets from AWS S3 and logs from AWS CloudWatch and Logz.io.",
      achievements: [
        "Resolved critical application issues by analyzing logs from AWS CloudWatch and Logz.io",
        "Collaborated across engineering and support teams to improve response time for reported bugs",
        "Performed root cause analysis using large datasets from AWS S3 and validated results across SQL and MongoDB",
        "Enhanced system reliability by proactively identifying and fixing recurring workflow issues",
      ],

      technologies: [
        "Node.js",
        "React.js",
        "MongoDB",
        "SQL",
        "PostgreSQL",
        "AWS S3",
        "CloudWatch",
        "Logz.io",
      ],
    },
    {
      id: 4,
      title: "Associate Software Engineer",
      company: "Testyantra Software Solutions",
      location: "Bengaluru",
      period: "2021 - 2023",
      description:
        "Designed and implemented user-friendly interfaces and integrated services for smooth data exchange. Contributed to chatbot development and conversational flow design, while also building reusable components for scalable frontend architecture. Participated in building a school management platform and a Conversational AI system using Python, NLP, and JavaScript.",
      achievements: [
        "Developed and maintained a chatbot with dynamic conversational flows and logic handling",
        "Built a Conversational AI platform using Python and NLP technologies integrated with JavaScript workflows",
        "Created reusable UI components to enhance code efficiency and maintainability",
        "Delivered a school management system with features like exam handling, result publishing, and student feedback",
        "Collaborated closely with cross-functional teams to ensure seamless service integration and testing",
      ],
      technologies: [
        "React.js",
        "JavaScript",
        "Node.js",
        "MongoDB",
        "UI Component Libraries",
      ],
    },
  ];

  return (
    <section
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        isDark ? "bg-gray-800" : "bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            My professional journey and achievements
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative mb-12 last:mb-0">
              {/* Timeline dot */}
              <div
                className={`absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 ${
                  isDark ? "border-gray-800" : "border-white"
                }`}
              ></div>

              <div className="ml-16">
                <div
                  className={`p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                    isDark ? "bg-gray-700" : "bg-white"
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <div>
                      <h3
                        className={`text-xl font-bold mb-1 ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-blue-500 font-semibold mb-2">
                        <Briefcase className="h-4 w-4 mr-2" />
                        {exp.company}
                      </div>
                    </div>
                    <div
                      className={`text-sm space-y-1 ${
                        isDark ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p
                    className={`mb-4 leading-relaxed ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {exp.description}
                  </p>

                  <div className="mb-4">
                    <h4
                      className={`font-semibold mb-2 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Key Achievements:
                    </h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className={`text-sm flex items-start ${
                            isDark ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          <span className="text-green-500 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          isDark
                            ? "bg-gray-600 text-gray-300"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
