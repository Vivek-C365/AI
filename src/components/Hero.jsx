/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import TrueFocus from "../animations/TrueFocus";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <motion.div
      className="hero-section flex flex-col md:flex-row items-center justify-between py-"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div className="hero-content">
        <motion.div
          className="logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <TrueFocus
            sentence="Edu Ai"
            manualMode={false}
            blurAmount={5}
            borderColor="red"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          The Future of Smart Learning
        </motion.h1>
        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Tired of juggling assignments, quizzes, and deadlines?
          <span className="highlight">
            EDUAI is your personal AI-powered study assistant
          </span>
          —designed to streamline coursework, optimize study schedules, and
          maximize productivity.
        </motion.p>
        <motion.div
          className="integration-info"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          By integrating with <a href="#">Canvas LMS</a>, EDUAI fetches all your
          assignments, quizzes, and deadlines, then applies{" "}
          <a href="#">cutting-edge AI algorithms</a> to craft the most
          efficient, personalized study plan.
        </motion.div>
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
          <motion.a
            href="#"
            className="btn btn-secondary"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/learnmore">Learn More</Link>
          </motion.a>
        </motion.div>
      </motion.div>
      <motion.div
        className="hero-image"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <img
          src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&q=80"
          alt="Student using EDUAI"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
