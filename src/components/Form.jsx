import { motion } from "framer-motion";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";

export default function NeonForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "Student",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      toast.error("Please fill in all fields!", {
        style: {
          background: "rgba(17, 24, 39, 0.9)",
          color: "#fff",
          border: "1px solid #8b5cf6",
        },
      });
      return;
    }

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      user_role: formData.role,
    };

    emailjs
      .send(
        "service_87pago8", // Replace with your EmailJS Service ID
        "template_tm0cdro", // Replace with your EmailJS Template ID
        templateParams,
        "EnsTM4lRc3dUHTtGH" // Replace with your EmailJS Public Key
      )
      .then(() => {
        toast.success("Successfully joined the waitlist! 🎉", {
          style: {
            background: "rgba(17, 24, 39, 0.9)",
            color: "#fff",
            border: "1px solid #8b5cf6",
          },
        });

        setFormData({ name: "", email: "", role: "Student" });
      })
      .catch(() => {
        toast.error("Failed to send email. Please try again later!", {
          style: {
            background: "rgba(17, 24, 39, 0.9)",
            color: "#fff",
            border: "1px solid #ff4d4d",
          },
        });
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Toaster position="top-center" reverseOrder={false} />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 bg-black bg-opacity-30 backdrop-blur-lg rounded-3xl shadow-xl border border-gray-700"
      >
        <h2 className="text-3xl font-bold text-purple-400 text-center flex justify-center items-center mb-4">
          🚀 Join the Waiting List
        </h2>

        <p className="text-center text-lg font-medium text-gray-200 mb-6 bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
          No paywalls. No hidden fees. Just seamless AI-powered productivity.
        </p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="text-gray-300 block text-sm mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full p-3 rounded-lg bg-black bg-opacity-40 text-white border border-gray-600 focus:border-purple-400 focus:ring-2 focus:ring-purple-500 transition shadow-md outline-none"
            />
          </div>

          <div>
            <label className="text-gray-300 block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full p-3 rounded-lg bg-black bg-opacity-40 text-white border border-gray-600 focus:border-purple-400 focus:ring-2 focus:ring-purple-500 transition shadow-md outline-none"
            />
          </div>

          <div>
            <label className="text-gray-300 block text-sm mb-1">I am a...</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-black bg-opacity-40 text-white border border-gray-600 focus:border-purple-400 focus:ring-2 focus:ring-purple-500 transition shadow-md outline-none"
            >
              <option>Student</option>
              <option>Professional</option>
              <option>Enthusiast</option>
            </select>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full flex items-center justify-center py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-purple-500 hover:to-indigo-400 transition text-white font-semibold text-lg shadow-md"
          >
            ✨ Get Early Access
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
