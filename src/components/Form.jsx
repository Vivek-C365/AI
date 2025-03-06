import { motion } from "framer-motion";

export default function NeonForm() {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-6 bg-black bg-opacity-40 rounded-2xl shadow-lg"
      >
        <h2 className="text-center text-purple-400 text-2xl font-bold flex items-center justify-center">
          🚀 Get Early Access – 100% FREE!
        </h2>
        <p className="text-center text-gray-300 mt-2">
          ✅ No paywalls. ✅ No hidden fees. ✅ Just pure AI-powered productivity.
        </p>

        <form className="mt-6 space-y-4">
          <div>
            <label className="text-gray-300">Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full mt-1 p-2 rounded-md bg-black bg-opacity-50 text-white border border-gray-600 focus:border-purple-400 focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>

          <div>
            <label className="text-gray-300">Email</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full mt-1 p-2 rounded-md bg-black bg-opacity-50 text-white border border-gray-600 focus:border-purple-400 focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>

          <div>
            <label className="text-gray-300">I am a...</label>
            <select className="w-full mt-1 p-2 rounded-md bg-black bg-opacity-50 text-white border border-gray-600 focus:border-purple-400 focus:ring-2 focus:ring-purple-500 transition">
              <option>Student</option>
              <option>Professional</option>
              <option>Enthusiast</option>
            </select>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full flex items-center justify-center mt-4 py-2 rounded-md bg-purple-600 hover:bg-purple-500 transition text-white font-semibold text-lg shadow-md"
          >
            🚀 Get Early Access ✨
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
