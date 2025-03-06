import PixelCard from "../animations/PixelCard";
export default function FeaturesSection() {
  const features = [
    {
      icon: "🧠",
      title: "AI-Powered Study Groups",
      description:
        "Get real-time insights on your study groups: who's contributing, session effectiveness, and AI-driven suggestions to improve collaboration.",
    },
    {
      icon: "⏰",
      title: "Dynamic Scheduling",
      description:
        "EDUAI's Time Approximation Algorithm creates study plans that evolve with you, adjusting in real time based on workload and priorities.",
    },
    {
      icon: "🎯",
      title: "Smart Recommendations",
      description:
        "Your AI study coach analyzes habits and coursework to highlight what matters most—boost efficiency and ace exams.",
    },
    {
      icon: "📅",
      title: "Proactive Planning",
      description:
        "AI-generated schedules ensure you never miss a deadline. EDUAI adapts dynamically to keep you on top of coursework.",
    },
    {
      icon: "🔔",
      title: "Smart Notifications",
      description:
        "Get reminders before deadlines hit. No more cramming—just smooth, stress-free studying.",
    },
    {
      icon: "💻",
      title: "Expert-Backed Technology",
      description:
        "Built with insights from top professors and AI researchers from Penn State's EECS, IST, and College of Education.",
    },
  ];

  return (
    <section className="min-h-screen  flex flex-col items-center p-8">
      <h2 className="text-3xl md:text-4xl font-bold text-[#9e6bff] flex items-center gap-2">
        🚀 Features That Change the Game
      </h2>
      <p className="text-gray-400 mt-2 text-center">
        Experience the next generation of AI-powered learning
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        
        {features.map((feature, index) => (
          <PixelCard variant="pink" colors="#b4a6cebd">
            <div
              key={index}
              className=" abosolute p-6 rounded-xl shadow-lg 
                         transition-all duration-300 ease-in-out 
                         hover:scale-105 transform bg-[#0000003d]"
            >
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-[#9e6bff] mt-2">
                {feature.title}
              </h3>
              <p className="text-gray-300 mt-1">{feature.description}</p>
            </div>
          </PixelCard>
        ))}
      </div>
    </section>
  );
}
