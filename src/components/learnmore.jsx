/* eslint-disable no-unused-vars */
import SpotlightCard from "../animations/SpotlightCard";
import { CheckCircle, Clock, Brain, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

function Learnmore() {
  return (
    <motion.div
      className="min-h-screen bg-darkBg text-white flex flex-col items-center justify-center p-6 relative"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-dot-pattern" />
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Learn More About EDUAI
      </h1>
      <p className="text-lg flex items-center gap-2 mt-2">
        🚀 AI-Powered Academic Assistant – Built to Help You Succeed
      </p>
      <div className="mt-6 p-6 bg-cardBg rounded-lg shadow-lg max-w-2xl text-center mb-8">
        <h2 className="text-xl font-semibold">Welcome to EDUAI</h2>
        <p className="mt-2 text-gray-500 text-justify">
          The ultimate AI-driven study assistant designed to revolutionize how
          students learn, plan, and succeed. Whether you're balancing multiple
          assignments, struggling with time management, or looking for smarter
          ways to collaborate, EDUAI adapts to your academic needs and makes
          studying effortless.
        </p>
      </div>

      {[
        {
          title: "📌 What Makes EDUAI Different?",
          content: [
            "Understands your coursework and deadlines",
            "Predicts how long tasks will take",
            "Prioritizes assignments based on urgency and impact",
            "Adapts to your study habits in real time",
            "Recommends personalized learning strategies",
          ],
        },
        {
          title: "🌟 How EDUAI Works",
          content: [
            {
              title: "Canvas LMS Integration",
              description:
                "EDUAI seamlessly integrates with Canvas LMS to automatically fetch your assignments, quizzes, and deadlines. No more manual tracking!",
            },
            {
              title: "Smart Time Estimation",
              description:
                "Our AI-driven Time Approximation Algorithm analyzes task complexity and estimates completion time.",
            },
            {
              title: "AI-Powered Prioritization",
              description:
                "EDUAI considers due dates, effort required, and grade weight to create your optimal study plan.",
            },
          ],
        },
        {
          title: "🌟 Why Students Love EDUAI",
          content: [
            {
              icon: <Clock className="text-purple-400" size={20} />,
              text: "No More Last-Minute Cramming",
            },
            {
              icon: <Brain className="text-purple-400" size={20} />,
              text: "Improve Study Habits",
            },
            {
              icon: <Sparkles className="text-purple-400" size={20} />,
              text: "Boost Productivity",
            },
          ],
        },
      ].map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 * (index + 1), duration: 0.6 }}
        >
          <SpotlightCard
            className="custom-spotlight-card mb-8 w-full"
            spotlightColor="#9a6f864f"
          >
            <div className="flex ">
              <div className="text-white max-w-4xl rounded-2xl">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <span>{section.title.split(" ")[0]}</span>{" "}
                  {section.title.replace(/^\S+/, "")}
                </h2>
                {Array.isArray(section.content) &&
                typeof section.content[0] === "string" ? (
                  <ul className="mt-4 space-y-2">
                    {section.content.map((text, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="text-indigo-400" size={20} />
                        {text}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul className="mt-4 space-y-4">
                    {section.content.map((item, i) => (
                      <li key={i} className="flex gap-4">
                        {item.icon ? (
                          item.icon
                        ) : (
                          <span className="bg-blue-500 text-white font-bold w-6 h-6 flex items-center justify-center rounded-full">
                            {i + 1}
                          </span>
                        )}
                        <div>
                          <h3 className="text-lg font-semibold">
                            {item.title}
                          </h3>
                          <p className="text-gray-300">
                            {item.description || item.text}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </SpotlightCard>
        </motion.div>
      ))}

      <motion.div
        className="cta-buttons"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <motion.a
          href="#"
          className="btn btn-primary"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>✨</span>
          Get Early Access
        </motion.a>
      </motion.div>
    </motion.div>
  );
}

export default Learnmore;
