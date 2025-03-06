import SpotlightCard from "../animations/SpotlightCard";

export default function Work() {
  const features = [
    {
      title: "Canvas LMS Integration",
      description: "Auto-fetches assignments, quizzes, and deadlines.",
      icon: "💻",
    },
    {
      title: "AI-Powered Time Management",
      description: "Predicts effort needed for each task.",
      icon: "🧠",
    },
    {
      title: "Smart Prioritization",
      description: "Ranks assignments based on urgency and impact.",
      icon: "⚡",
    },
    {
      title: "Real-Time Adjustments",
      description: "Study plan adapts to your progress.",
      icon: "⏳",
    },
    {
      title: "Intelligent Reminders",
      description: "Keeps you organized with proactive nudges.",
      icon: "🔔",
    },
  ];

  return (
    <div className="min-h-max  flex flex-col items-center p-8">
      <h2 className="text-3xl md:text-4xl font-bold text-[#9e6bff] flex items-center gap-2">
        🚀 How EDUAI Works
      </h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {features.map((feature, index) => (
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="#673ab745"
          >
            <div
              key={index}
              className="   rounded-xl
                         transition-all duration-300 ease-in-out"
            >
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mt-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 mt-1">{feature.description}</p>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
}
